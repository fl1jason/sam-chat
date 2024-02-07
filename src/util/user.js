const stringToUniqueRGB = (text) => {
  
  // create a random hex number from the text
  const hexColor = text
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0)
    .toString(16)
    .slice(0, 6);
  
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
