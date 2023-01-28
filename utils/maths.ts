export const roundDown = (number: number, digit: number): number => {
  const standard = 10 ** digit;
  return Math.floor(number * standard) / standard;
};
