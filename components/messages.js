import { ART_DIRECTOR, REPLICATE } from "constants";
import { RotateCcw as UndoIcon } from "lucide-react";
import Image from "next/future/image";
import { Fragment, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { CHANGE_WHAT, getRandomPhrase } from "utils";
import Message from "./message";

export default function Messages({ events, isProcessing, onUndo }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (events.length > 2) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [events.length]);

  return (
    <section className="w-full">
      {events.map((ev, index) => {
        if (ev.image) {
          return (
            <Fragment key={"image-" + index}>
              <Message sender={REPLICATE} shouldFillWidth>
                <Image
                  alt={
                    ev.prompt
                      ? `The result of the prompt "${ev.prompt}" on the previous image`
                      : "The source image"
                  }
                  width="512"
                  height="512"
                  priority={true}
                  className="w-full h-auto rounded-lg"
                  src={ev.image}
                />

                {onUndo && index > 0 && index === events.length - 1 && (
                  <div className="mt-2 text-right">
                    <button
                      className="lil-button"
                      onClick={() => {
                        onUndo(index);
                      }}
                    >
                      <UndoIcon className="icon" /> That&apos;s garbage, throw it away!
                    </button>
                  </div>
                )}
              </Message>

              {(isProcessing || index < events.length - 1) && (
                <Message sender={REPLICATE} isSameSender>
                  {getRandomPhrase(CHANGE_WHAT)}
                  {/* {index === 0
                    ? "What do you think, what should we change with this?"
                    : "Oh yeah, I think that looks great! Do you have more feedback for me?"} */}
                </Message>
              )}
            </Fragment>
          );
        }

        if (ev.prompt) {
          return (
            <Message key={"prompt-" + index} sender={ART_DIRECTOR}>
              {ev.prompt}
            </Message>
          );
        }
      })}

      {isProcessing && (
        <Message sender={REPLICATE}>
          <PulseLoader color="#999" size={7} />
        </Message>
      )}

      <div ref={messagesEndRef} />
    </section>
  );
}
