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

export const onlyLetters = (str) => /^[a-zA-Z]+$/.test(str);

export const normalizeText = (str = '') => str
	.trim()
	.toLowerCase()
	.normalize("NFD")
	.replace(/[\u0300-\u036f]/g, "")
	.replace(/[\w]+/g, "-");
