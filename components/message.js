import { ART_DIRECTOR } from "constants";
import Image from "next/image";

export default function Message({
  sender,
  shouldFillWidth = false,
  isSameSender = false,
  children,
}) {
  console.log('sender is', sender);
  return (
    <div className={`w-full${sender === ART_DIRECTOR ? " text-right" : ""}`}>
      {/* Show the avatar image if current sender differs from previous sender */}
      {!isSameSender && (<Avatar sender={sender} />)}

      {/* Display the message content */}
      <div
        className={`p-3 rounded-lg ${shouldFillWidth ? "" : "inline-block"} ${sender === ART_DIRECTOR
          ? "text-black bg-[#fef6aa]"
          : "bg-gray-100 text-black"
          } ${isSameSender ? "mt-4" : "mt-2"}`}
      >
        {children}
      </div>
    </div>
  );
}

// const Avatar = ({ sender }) => {
//   if (sender === ART_DIRECTOR) {
//     return (
//       <div className="avatar right">
//         <p>Hovering Art Director</p>
//         <Image
//           src="https://images.unsplash.com/photo-1544973810-7ecf787e9608?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
//           alt="hovering art director avatar"
//           width="48"
//           height="48"
//         />
//       </div>
//     );

//   }

//   return (
//     <div className="avatar">
//       <Image
//         src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
//         alt="replicate avatar"
//         width="48"
//         height="48"
//       />
//       <p>Overworked Intern</p>
//     </div>
//   );
// };

const Avatar = ({ sender }) => {
  const isArtDirector = sender === ART_DIRECTOR;
  const username = isArtDirector ? 'Hovering Art Director' : 'Overworked Intern';
  const cssClass = `avatar${isArtDirector ? ' right' : ''}`;
  const altTag = isArtDirector ? 'hovering art director avatar' : 'replicate avatar';
  const avatarUrl = isArtDirector
    ? 'https://images.unsplash.com/photo-1544973810-7ecf787e9608?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    : 'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ';
  return (
    <div className={cssClass}>
      {isArtDirector && (<p>{username}</p>)}
      <Image
        src={avatarUrl}
        alt={altTag}
        width="48"
        height="48"
      />
      {!isArtDirector && (<p>{username}</p>)}
    </div>
  );
};