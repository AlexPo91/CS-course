class Matrix3D {
  constructor({ x, y, z }) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.buffer = new Uint8Array(x * y * z);
  }

  getBuffer() {
    return this.buffer;
  }

  #getIndex({ x, y, z }) {
    // return this.x * this.y * z + x * this.y + y;
    // return (y * this.x + x) * this.z + z
    return (z * this.y + y) * this.x + x;
  }

  get({ x, y, z }) {
    return this.buffer[this.#getIndex({ x, y, z })];
  }

  set({ x, y, z }, value) {
    this.buffer[this.#getIndex({ x, y, z })] = value;
  }
}

const matrix = new Matrix3D({ x: 2, y: 3, z: 4 });
matrix.set({ x: 0, y: 0, z: 0 }, 1);
matrix.set({ x: 1, y: 0, z: 0 }, 2);
matrix.set({ x: 0, y: 1, z: 0 }, 3);
matrix.set({ x: 1, y: 1, z: 0 }, 4);
matrix.set({ x: 0, y: 2, z: 0 }, 5);
matrix.set({ x: 1, y: 2, z: 0 }, 6);

matrix.set({ x: 0, y: 0, z: 1 }, 7);
matrix.set({ x: 1, y: 0, z: 1 }, 8);
matrix.set({ x: 0, y: 1, z: 1 }, 9);
matrix.set({ x: 1, y: 1, z: 1 }, 10);
matrix.set({ x: 0, y: 2, z: 1 }, 11);
matrix.set({ x: 1, y: 2, z: 1 }, 12);

matrix.set({ x: 0, y: 0, z: 2 }, 13);
matrix.set({ x: 1, y: 0, z: 2 }, 14);
matrix.set({ x: 0, y: 1, z: 2 }, 15);
matrix.set({ x: 1, y: 1, z: 2 }, 16);
matrix.set({ x: 0, y: 2, z: 2 }, 17);
matrix.set({ x: 1, y: 2, z: 2 }, 18);

matrix.set({ x: 0, y: 0, z: 3 }, 19);
matrix.set({ x: 1, y: 0, z: 3 }, 20);
matrix.set({ x: 0, y: 1, z: 3 }, 21);
matrix.set({ x: 1, y: 1, z: 3 }, 22);
matrix.set({ x: 0, y: 2, z: 3 }, 23);
matrix.set({ x: 1, y: 2, z: 3 }, 24);

console.log(matrix.getBuffer());
