export const getRandomCoordinates = () => {
  const min = 1;
  const max = 98;
  const x = Math.floor(Math.random() * (max - min + 1)) + min;
  const y = Math.floor(Math.random() * (max - min + 1)) + min;
  return [x, y];
};
