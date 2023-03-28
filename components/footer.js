import Dropzone from "components/dropzone";
import {
  Code as CodeIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer({
  conversation = [],
  startOver,
  handleImageDropped
}) {
  return (
    <footer className="w-full my-8">
      <div className="text-center">
        <Link href="/about">
          <a className="lil-button">
            <InfoIcon className="icon" />
            What is this?
          </a>
        </Link>

        {conversation.length > 1 && (
          <button className="lil-button" onClick={startOver}>
            <StartOverIcon className="icon" />
            Start over
          </button>
        )}

        <Dropzone onImageDropped={handleImageDropped} />

        {conversation.length > 2 && (
          <Link href={conversation.findLast((part) => part.image).image}>
            <a className="lil-button" target="_blank" rel="noopener noreferrer">
              <DownloadIcon className="icon" />
              Download image
            </a>
          </Link>
        )}

        <Link href="https://github.com/electriczephyr/hovering-art-director">
          <a className="lil-button" target="_blank" rel="noopener noreferrer">
            <CodeIcon className="icon" />
            Fork repo
          </a>
        </Link>
      </div>

      <div className="text-center lil-text mt-8">
        <div className="inline-block py-2 px-4 border border-yellow-200 rounded-lg bg-[#fef6aa]">
          🤔 This is a version of the &quot;paint with text&quot; app example from Vercel, modified by Jayne and Shawn. Check out the {" "}
          <Link href="https://github.com/electriczephyr/hovering-art-director/#readme">
            <a target="_blank">README</a>
          </Link>.
        </div>
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://www.timothybrooks.com/instruct-pix2pix/">
          <a target="_blank">InstructPix2Pix</a>
        </Link>
        ,{" "}
        <Link href="https://replicate.com/timothybrooks/instruct-pix2pix?utm_source=project&utm_campaign=paintbytext">
          <a target="_blank">Replicate</a>
        </Link>
        ,{" "}
        <Link href="https://vercel.com/templates/ai">
          <a target="_blank">Vercel</a>
        </Link>
        , and{" "}
        <Link href="https://github.com/replicate/instruct-pix2pix-demo">
          <a target="_blank">GitHub</a>
        </Link>
      </div>
    </footer>
  );
}
