class Matrix3D {
  constructor({ x, y, z }) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.buffer = new Uint8Array(x * y * z);
  }
  #getIndex({ x, y, z }) {
    return this.x * this.y * z + x * this.y + y;
  }

  get({ x, y, z }) {
    return this.buffer[this.#getIndex({ x, y, z })];
  }

  set({ x, y, z }, value) {
    this.buffer[this.#getIndex({ x, y, z })] = value;
  }
}

const matrix = new Matrix3D({ x: 10, y: 10, z: 10 });
matrix.set({ x: 1, y: 3, z: 2 }, 10);
matrix.get({ x: 1, y: 3, z: 2 });
