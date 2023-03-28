# 👩‍🎨 Hovering Art Director 

Modify images by chatting with your overworked intern, a generative AI model.

Try out the original at [paintbytext.chat](http://paintbytext.chat)
Original repo: [https://github.com/replicate/paint-by-text](https://github.com/replicate/paint-by-text)

Try out our modified version at [https://hovering-art-director.vercel.app/](https://hovering-art-director.vercel.app/)
Our modified version [https://github.com/electriczephyr/hovering-art-director](https://github.com/electriczephyr/hovering-art-director)

Our changes
- Replaced seed images with images from Unsplash and Lexica
- Added avatar images and names for our chat interface
- Made user uploaded images appear to be sent from the art director 
- Changed the messages state management 
- Made the conversation blocks more modular



## How it works

This app is powered by:

🚀 [Replicate](https://replicate.com/?utm_source=project&utm_campaign=paintbytext), a platform for running machine learning models in the cloud.

🎨 [InstructPix2Pix](https://replicate.com/timothybrooks/instruct-pix2pix?utm_source=project&utm_campaign=paintbytext), an open-source machine learning model that generates images from text.

▲ [Vercel](https://vercel.com/), a platform for running web apps.

⚡️ Next.js [server-side API routes](pages/api), for talking to the Replicate API.

👀 Next.js React components, for the browser UI.

🍃 [Tailwind CSS](https://tailwindcss.com/), for styles.


## Development

1. Install a recent version of [Node.js](https://nodejs.org/)
1. Copy your [Replicate API token](https://replicate.com/account?utm_source=project&utm_campaign=paintbytext) and set it in your environment:
    ```
    echo "REPLICATE_API_TOKEN=<your-token-here>" > .env.local
    ````
1. Install dependencies and run the server:
    ```
    npm install
    npm run dev
    ```
1. Open [localhost:3000](http://localhost:3000) in your browser. That's it!
