const seeds = [
  {
    image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/smallpug.png",
    prompt: "replace the background with a photo of a nice beach",
  },
  {
    image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/isometric_sm.jpg",
    prompt: "make it look like its on the set of game of thrones",
  },
  {
    image: "https://raw.githubusercontent.com/electriczephyr/electriczephyr.github.io/master/images/livingroom.jpg",
    prompt: "add a family sitting together in the middle of the couch",
  },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
