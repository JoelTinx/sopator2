import { matrixToString, randomInt, copyMatrix } from "./utils"

export class Sopator {
  alphabet = 'ABCDEFGKIJKLMNOPQRSTUVWXYZ';
  height = 15;
  width = 15;
  solution = [];
  matrix = [];
  words = [];
  log = [];
  directions = [
    { x: 1, y: 0 },
    { x: 1, y: -1 },
    { x: 0, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 0 },
    { x: -1, y: 1 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];

  constructor(words, height, width) {
    this.words = words;
    this.height = height;
    this.width = width;
  }

  generate() {
    this.matrix = this.createMatrix();
    for (let i = 0; i < this.words.length; i++) {
      const pos_x = randomInt(this.width);
      const pos_y = randomInt(this.height);
      const index_dir = randomInt(this.directions.length);
      if (this.validateWordInsertion(this.words[i], pos_x, pos_y, this.directions[index_dir])) {
        this.insertWord(this.words[i], pos_x, pos_y, this.directions[index_dir]);
      } else {
        i--;
      }
    }
    this.solution = copyMatrix(this.matrix);
    this.fillSoup();
  }

  validateWordInsertion(word, pos_x, pos_y, direction) {
    let len = word.length;
    let result = false;
    if (
      (pos_x + len * direction.x) > 0 &&
      (pos_x + len * direction.x) < this.width &&
      (pos_y + len * direction.y) > 0 &&
      (pos_y + len * direction.y) < this.height
    ) {
      for (let i = 0; i < word.length; i++) {
        if (
          this.matrix[pos_y + i * direction.y][pos_x + i * direction.x] == '*' ||
          this.matrix[pos_y + i * direction.y][pos_x + i * direction.x] == word[i]
        ) {
          result = true;
        } else {
          result = false;
          break;
        }
      }
    }
    return result;
  }

  insertWord(word, pos_x, pos_y, direction) {
    this.log = [...this.log, { word, x: pos_x, y: pos_y, direction }];
    for (let i = 0; i < word.length; i++) {
      this.matrix[pos_y + i * direction.y][pos_x + i * direction.x] = word[i];
    }
  }

  createMatrix() {
    return Array(this.height)
      .fill([])
      .map(() => Array(this.width).fill('*'));
  }

  fillSoup(char = '*') {
    this.matrix.forEach((row, i) => {
      row.forEach((letter, j) => {
        this.matrix[i][j] = letter === char ? this.getRandomChar() : letter;
      })
    });
  }

  getRandomChar() {
    return this.alphabet[randomInt(this.alphabet.length)];
  }

  toString() {
    return matrixToString(this.matrix);
  }

}
