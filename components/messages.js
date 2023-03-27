import { REPLICATE } from "constants";
import { Trash2 as UndoIcon } from "lucide-react";
import Image from "next/future/image";
import { Fragment, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Message from "./message";

export default function Messages({
  isProcessing,
  onUndo,
  conversation = []
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (conversation.length > 2) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversation.length]);

  return (
    <section className="w-full">
      {conversation.map((part, index) => {
        const shouldShowUndo = conversation.length > 2
          && conversation[conversation.length - 2].sender === REPLICATE
          && index === conversation.length - 2
          && index !== 0;
        return (
          <Fragment key={`image-${index}`}>
            {part.image && (
              <ImageMessage
                sender={part.sender}
                url={part.image}
                onUndo={onUndo}
                showUndo={shouldShowUndo}
                index={index}
              />
            )}
            {part.text && (
              <TextMessage
                sender={part.sender}
                text={part.text}
                isSameSender={part?.isSameSender}
                index={index}
              />
            )}
          </Fragment>
        )
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

const ImageMessage = ({
  sender,
  url,
  onUndo,
  showUndo = false,
}) => {
  return (
    <Message sender={sender} onUndo={onUndo} shouldFillWidth>
      <Image
        alt={"An image uploaded from user or provided by Replicate"}
        width="512"
        height="512"
        priority={true}
        className="w-full h-auto rounded-lg"
        src={url}
      />

      {showUndo && (
        <div className="mt-2 text-right">
          <button
            className="lil-button"
            onClick={onUndo}
          >
            <UndoIcon className="icon" /> That&apos;s garbage, throw it away!
          </button>
        </div>
      )}
    </Message>
  );
};

const TextMessage = ({
  sender,
  text,
  index,
  isSameSender,
}) => {
  return (
    <Message key={"prompt-" + index} sender={sender} isSameSender={isSameSender}>
      {text}
    </Message>
  );
};