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
  // {
  //   image:
  //     "/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg",
  //   prompt: "make the pug a corgi instead",
  // },
  // {
  //   image:
  //     "https://github.com/electriczephyr/hovering-art-director/blob/main/public/Isometric%20render%20of%20a%20streamer%20(3).jpg",
  //   prompt: "what would it look like if this was on the great british bake off television show?",
  // },
  // {
  //   image:
  //     "https://github.com/electriczephyr/hovering-art-director/blob/main/public/jamie-street-Zqy-x7K5Qcg-unsplash.jpg",
  //   prompt: "swap out the magazine for a book about cats",
  // },
  // {
  //   image:
  //     "https://raw.githubusercontent.com/electriczephyr/hovering-art-director/main/public/raoul-droog-yMSecCHsIBc-unsplash.jpg?token=GHSAT0AAAAAACAPKK6CVCLYTEV7BCGNICWIZA6TORA",
  //   prompt: "turn this into an album cover for a jazz band",
  // },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
