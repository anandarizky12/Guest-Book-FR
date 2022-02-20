//https://i.imgur.com/ExPrPlU.png
import { local } from "./link";
// const link = "https://guestbookapibyar.herokuapp.com";

export const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export const checkImage = (image) => {
  if (!image) {
    return "https://i.imgur.com/ExPrPlU.png";
  } else if (image.slice(0, 4) === "blob") {
    return image;
  } else {
    return local + image;
  }
};
