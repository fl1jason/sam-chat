const crypto = require("crypto");

const stringToUniqueRGB = (text) => {
  // Calculate MD5 hash of the input text
  const hash = crypto.createHash("md5").update(text).digest("hex");

  // Take the first 6 characters of the hash
  const hexColor = hash.substring(0, 6);

  // Convert the hex color to RGB values
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return { r, g, b };
};

export const getUserColor = (user) => {
  const color = stringToUniqueRGB(user);
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};

// Test the function
const text1 = "Hello, world!";
const text2 = "Hello, worle!";

const color1 = stringToUniqueRGB(text1);
const color2 = stringToUniqueRGB(text2);

console.log(color1); // Example output: { r: 180, g: 121, b: 11 }
console.log(color2); // Example output: { r: 70, g: 110, b: 29 }
