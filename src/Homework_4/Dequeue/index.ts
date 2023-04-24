import { LinkedList } from '../../Homework_3';

class Dequeue<T> {
  #list: LinkedList<T>;
  constructor() {
    this.#list = new LinkedList();
  }

  push(value: T) {
    this.#list.addLast(value);
    return this;
  }

  unshift(value: T) {
    this.#list.addFirst(value);
    return this;
  }

  pop() {
    return this.#list.removeLast();
  }

  shift() {
    return this.#list.removeFirst();
  }
}
export { Dequeue };
