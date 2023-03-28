const seeds = [
  {
    image:
      "https://user-images.githubusercontent.com/2289/215219780-cb4a0cdb-6fea-46fe-ae22-12d68e5ba79f.jpg",
    prompt: "make his jacket out of leather",
  },
  {
     image:
       "https://user-images.githubusercontent.com/2289/215241066-654c5acf-8293-4fb1-a85d-c87a0297a30b.jpg",
     prompt: "what would it look like if it were snowing?",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215248577-bdf7c342-e65c-4b11-bc53-cdb2c0c52d8b.jpg",
    prompt: "add fireworks to the sky",
  },
  {
    image:
      "https://user-images.githubusercontent.com/2289/215248708-80787623-fff4-4b22-a548-e5c46b055244.png",
    prompt: "swap sunflowers with roses",
  },
];

// const seeds = [
//   {
//     image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/smallpug.png",
//     prompt: "replace the background with a photo of a nice beach",
//   },
//   {
//     image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/isometric_sm.jpg",
//     prompt: "make it look like its on the set of game of thrones",
//   },
//   {
//     image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/livingroom.jpg",
//     prompt: "add a family sitting together in the middle of the couch",
//   },
// ];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
