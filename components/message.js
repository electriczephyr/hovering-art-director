import Image from "next/image";

export default function Message({
  sender,
  shouldFillWidth = false,
  isSameSender = false,
  children,
}) {
  // console.log (sender)

  return (
    <div className={`w-full ${sender === "user" ? "text-right" : ""}`}>
      {sender !== "user" ? (
        <div className="avatar">
          <Image
            src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            width="48"
            height="48"
          />
          <p>Overworked Intern</p>
        </div>
      ) : (
        <div className="avatar right">
          <p>Hovering Art Director</p>
          <Image
            src="https://images.unsplash.com/photo-1544973810-7ecf787e9608?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            width="48"
            height="48"
          />
        </div>
      )}

      <div
        className={`p-3 rounded-lg ${shouldFillWidth ? "" : "inline-block"} ${
          sender === "user"
            ? "ml-16 text-black bg-[#fef6aa]"
            : "bg-gray-100 text-black"
        } ${isSameSender ? "mt-4" : "mt-2"}`}
      >
        {children}
      </div>
    </div>
  );
}
