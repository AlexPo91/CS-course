class Matrix {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.buffer = new Array(rows * cols);
  }

  #getIndex(row, col) {
    return row * this.cols + col;
  }

  get(row, col) {
    return this.buffer[this.#getIndex(row, col)];
  }

  set(row, col, value) {
    this.buffer[this.#getIndex(row, col)] = value;
  }
}

export { Matrix };
