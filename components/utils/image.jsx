export const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
export const checkImage = (image) => {
  const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!image) {
    return "https://i.imgur.com/ExPrPlU.png";
  } else if (image.slice(0, 4) === "blob") {
    return image;
  }
  return apiUrl + image;
};
