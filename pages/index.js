import Messages from "components/messages";
import PromptForm from "components/prompt-form";
import Head from "next/head";
import { useEffect, useState } from "react";

import Footer from "components/footer";

import prepareImageFileForUpload from "lib/prepare-image-file-for-upload";
import { getRandomSeed } from "lib/seeds";
import { ART_DIRECTOR, CHANGE_WHAT, REPLICATE } from "constants";
import { getRandomPhrase } from "utils";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const appName = "Hey Hovering Art Director";
export const appSubtitle = "Just describe your vision and I'll try my best!";
export const appMetaDescription = "Just describe your vision and I'll try my best!";

export default function Home() {
  const [convo, setConvo] = useState([]);
  const [predictions, setPredictions] = useState([]);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [seed] = useState(getRandomSeed());
  const [initialPrompt, setInitialPrompt] = useState(seed.prompt);

  // set the initial image from a random seed
  useEffect(() => {
    setConvo([
      { image: seed.image, sender: REPLICATE },
      { text: getRandomPhrase(CHANGE_WHAT), sender: REPLICATE, isSameSender: true },
    ]);
  }, [seed.image]);

  const handleImageDropped = async (image) => {
    try {
      image = await prepareImageFileForUpload(image);
    } catch (error) {
      setError(error.message);
      return;
    }
    setConvo([
      ...convo,
      { image, sender: ART_DIRECTOR },
      { text: getRandomPhrase(CHANGE_WHAT), sender: REPLICATE, isSameSender: true },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = e.target.prompt.value;
    const lastImage = convo.findLast((part) => part.image)?.image;

    setConvo(prevConvo => ([
      ...prevConvo,
      { text: prompt, sender: ART_DIRECTOR }
    ]));

    setError(null);
    setIsProcessing(true);
    setInitialPrompt("");

    const body = {
      prompt,
      image: lastImage,
    };

    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(500);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }

      // just for bookkeeping
      setPredictions(predictions.concat([prediction]));

      if (prediction.status === "succeeded") {
        const outputImageUrl = prediction.output?.[prediction.output.length - 1];
        const newPhrase = getRandomPhrase(CHANGE_WHAT);

        setConvo(prevConvo => ([
          ...prevConvo,
          { image: outputImageUrl, sender: REPLICATE },
          { text: newPhrase, sender: REPLICATE, isSameSender: true }
        ]));
      }
    }

    setIsProcessing(false);
  };

  const startOver = async (e) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(false);
    setInitialPrompt(seed.prompt);
    const updatedConvo = convo.slice(0, 2);
    setConvo(updatedConvo);
  };

  return (
    <div>
      <Head>
        <title>{appName}</title>
        <meta name="description" content={appMetaDescription} />
        <meta property="og:title" content={appName} />
        <meta property="og:description" content={appMetaDescription} />
        <meta property="og:image" content="https://paintbytext.chat/opengraph.jpg" />
      </Head>

      <main className="container max-w-[700px] mx-auto p-5">
        <hgroup>
          <h1 className="text-center text-3xl font-bold m-3">{appName}</h1>
          <p className="text-center text-l opacity-60 m-3">
            {appSubtitle}
          </p>
        </hgroup>

        <Messages
          conversation={convo}
          isProcessing={isProcessing}
          onUndo={() => {
            const updatedConvo = convo.slice(0, convo.length - 3);
            setConvo(updatedConvo);
          }}
        />

        <PromptForm
          initialPrompt={initialPrompt}
          onSubmit={handleSubmit}
          disabled={isProcessing}
        />

        <div className="mx-auto w-full">
          {error && <p className="bold text-red-500 pb-5">{error}</p>}
        </div>

        <Footer
          conversation={convo}
          startOver={startOver}
          handleImageDropped={handleImageDropped}
        />
      </main>
    </div>
  );
}
