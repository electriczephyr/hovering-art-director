import { REPLICATE } from "constants";
import { useEffect, useState } from "react";
import { CHANGE_WHAT, getRandomPhrase } from "utils";
import Message from "./message";

export default function PromptForm({
  initialPrompt,
  isFirstPrompt,
  onSubmit,
  disabled = false,
}) {
  const [prompt, setPrompt] = useState(initialPrompt);

  useEffect(() => {
    setPrompt(initialPrompt);
  }, [initialPrompt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrompt("");
    onSubmit(e);
  };

  if (disabled) {
    return;
  }

  return (
    <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
      <Message sender={REPLICATE} isSameSender>
        <label htmlFor="prompt-input">
          {getRandomPhrase(CHANGE_WHAT)}
        </label>
      </Message>

      <div className="flex mt-8">
        <input
          id="prompt-input"
          type="text"
          name="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your message..."
          className={`block w-full flex-grow${
            disabled ? " rounded-md" : " rounded-l-md"
          }`}
          disabled={disabled}
        />

        {disabled || (
          <button
            className="bg-black text-white rounded-r-md text-small inline-block p-3 flex-none"
            type="submit"
          >
            Send Feedback
          </button>
        )}
      </div>
    </form>
  );
}
