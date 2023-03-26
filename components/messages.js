import { ART_DIRECTOR, REPLICATE } from "constants";
import { RotateCcw as UndoIcon } from "lucide-react";
import Image from "next/future/image";
import { Fragment, useEffect, useRef } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { CHANGE_WHAT, getRandomPhrase } from "utils";
import Message from "./message";

export default function Messages({
  events,
  isProcessing,
  onUndo,
  conversation = []
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (events.length > 2) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [events.length]);

  console.log('conversation', conversation);

  return (
    // <section className="w-full">
    //   {events.map((ev, index) => {
    //     if (ev.image) {
    //       return (
    //         <Fragment key={"image-" + index}>
    //           <Message sender={REPLICATE} shouldFillWidth>
    //             <Image
    //               alt={
    //                 ev.prompt
    //                   ? `The result of the prompt "${ev.prompt}" on the previous image`
    //                   : "The source image"
    //               }
    //               width="512"
    //               height="512"
    //               priority={true}
    //               className="w-full h-auto rounded-lg"
    //               src={ev.image}
    //             />

    //             {onUndo && index > 0 && index === events.length - 1 && (
    //               <div className="mt-2 text-right">
    //                 <button
    //                   className="lil-button"
    //                   onClick={() => {
    //                     onUndo(index);
    //                   }}
    //                 >
    //                   <UndoIcon className="icon" /> That&apos;s garbage, throw it away!
    //                 </button>
    //               </div>
    //             )}
    //           </Message>

    //           {(isProcessing || index < events.length - 1) && (
    //             <Message sender={REPLICATE} isSameSender>
    //               {getRandomPhrase(CHANGE_WHAT)}
    //             </Message>
    //           )}
    //         </Fragment>
    //       );
    //     }

    //     if (ev.prompt) {
    //       return (
    //         <Message key={"prompt-" + index} sender={ART_DIRECTOR}>
    //           {ev.prompt}
    //         </Message>
    //       );
    //     }
    //   })}
    <section className="w-full">
      {conversation.map((part, index) => {
        return (
          <Fragment key={`image-${index}`}>
            {/* <p>{part.sender}</p> */}
            {part.image && (
              // <p>{part.image}</p>
              <ImageMessage
                sender={part.sender}
                url={part.image}
                onUndo={onUndo}
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
        // if (ev.image) {
        //   return (
        //     <Fragment key={"image-" + index}>
        //       <Message sender={REPLICATE} shouldFillWidth>
        //         <Image
        //           alt={
        //             ev.prompt
        //               ? `The result of the prompt "${ev.prompt}" on the previous image`
        //               : "The source image"
        //           }
        //           width="512"
        //           height="512"
        //           priority={true}
        //           className="w-full h-auto rounded-lg"
        //           src={ev.image}
        //         />

        //         {onUndo && index > 0 && index === events.length - 1 && (
        //           <div className="mt-2 text-right">
        //             <button
        //               className="lil-button"
        //               onClick={() => {
        //                 onUndo(index);
        //               }}
        //             >
        //               <UndoIcon className="icon" /> That&apos;s garbage, throw it away!
        //             </button>
        //           </div>
        //         )}
        //       </Message>

        //       {(isProcessing || index < events.length - 1) && (
        //         <Message sender={REPLICATE} isSameSender>
        //           {getRandomPhrase(CHANGE_WHAT)}
        //         </Message>
        //       )}
        //     </Fragment>
        //   );
        // }

        // if (ev.prompt) {
        //   return (
        //     <Message key={"prompt-" + index} sender={ART_DIRECTOR}>
        //       {ev.prompt}
        //     </Message>
        //   );
        // }
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
  index,
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

      {/* {onUndo && index > 0 && index === events.length - 1 && (
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
      )} */}
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