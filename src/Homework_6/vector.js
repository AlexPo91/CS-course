class Vector {
  constructor(Constr, opt) {
    this.vect = new Constr(opt.capacity);
    this.capacity = opt.capacity;
    this.current = 0;
  }
  get length() {
    return this.current;
  }

  resizeVector(newCapacity) {
    this.capacity = newCapacity;
    const newArray = new this.vect.constructor(newCapacity);
    for (let i = 0; i <= this.current; i++) {
      newArray[i] = this.vect[i];
    }
    this.vect = newArray;
  }

  push(...items) {
    if (this.current + items.length > this.capacity) {
      this.resizeVector(this.capacity * 2);
    }
    for (let item of items) {
      this.vect[this.current++] = item;
    }
    return this.current;
  }
  pop() {
    return this.vect[--this.current];
  }
  unshift(...items) {
    if (this.current + items.length > this.capacity) {
      this.resizeVector(this.capacity * 2);
    }
    const itemsLength = items.length;
    this.current += itemsLength;
    for (let i = this.current - 1; i >= 0; i--) {
      this.vect[i + itemsLength] = this.vect[i];
    }
    for (let i = 0; i < items.length; i++) {
      this.vect[i] = items[i];
    }
    return this.current;
  }
  shift() {
    let tempValue = this.vect[0];
    for (let i = 0; i <= this.current; i++) {
      this.vect[i] = this.vect[i + 1];
    }
    this.current--;
    return tempValue;
  }
}

const uint8Vector = new Vector(Uint8Array, { capacity: 100 });

uint8Vector.push(100); // 1
uint8Vector.push(20, 10); // 3

uint8Vector.pop(); // 10
uint8Vector.shift(); // 100

uint8Vector.unshift(1); // 2
console.log(uint8Vector.length); // 2
