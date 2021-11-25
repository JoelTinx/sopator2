export const createArrayOfChars = (length, character) => {
  return Array.from({ length: length }, () => character);
}

export const copyMatrix = (matrix) => {
  return matrix.map((row) => [...row]);
}

export const matrixToString = (matrix, separator = '\t') => {
  return matrix.map((row) => row.join(separator)).join('\n');
}

export const randomInt = (value) => {
  return parseInt(Math.random() * value);
}