class Matrix {
  xSize;
  ySize;
  buffer;

  constructor({ xSize, ySize }) {
    this.xSize = xSize;
    this.ySize = ySize;
    this.buffer = new Array(this.xSize * this.ySize).fill(0);
  }

  get(coord) {
    return this.buffer[this.#getIndex(coord)];
  }

  set(coord, value) {
    this.buffer[this.#getIndex(coord)] = value;
  }

  #getIndex({ x, y }) {
    return y * this.xSize + x;
  }

  *[Symbol.iterator]() {
    for (let y = 0; y < this.ySize; y++) {
      for (let x = 0; x < this.xSize; x++) {
        yield [{ x, y }, this.get({ x, y })];
      }
    }
  }
}

class Graph {
  size;
  matrix;

  constructor(size) {
    this.size = size;
    this.matrix = new Matrix({ xSize: size, ySize: size });
  }

  rel(from, to) {
    this.matrix.set(
      {
        y: this.#getPos(from),
        x: this.#getPos(to),
      },
      1
    );
  }

  hasRel(from, to) {
    return (
      this.matrix.get({
        y: this.#getPos(from),
        x: this.#getPos(to),
      }) === 1
    );
  }

  #getPos(label) {
    return label.charCodeAt(0) + 'a'.charCodeAt(0);
  }
}

const graph = new Graph(5);

graph.rel('a', 'b');
graph.rel('b', 'd');
console.log(graph.matrix);
console.log(graph.hasRel('a', 'b'));
