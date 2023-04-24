import { TypedArrayConstructor, TypedArray } from './types';

class Stack {
  typedArray: TypedArray;
  current: number;
  constructor(TypedArrayConstructor: TypedArrayConstructor, count: number) {
    this.typedArray = new TypedArrayConstructor(count);
    this.current = -1;
  }
  get head() {
    return this.typedArray[this.current];
  }

  push(value: number): Error | undefined {
    if (this.current === this.typedArray.length - 1) {
      return new Error('Adding is not possible');
    }
    this.current++;
    this.typedArray[this.current] = value;
  }
  pop(): number | undefined | Error {
    if (this.current < 0) {
      return new Error('Deletion is not possible');
    }
    const temp = this.head;
    this.typedArray[this.current] = 0;
    this.current--;
    return temp;
  }
}

export { Stack };
