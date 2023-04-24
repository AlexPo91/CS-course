import { LinkedList } from '../../Homework_3';

class Queue<T> {
  #list: LinkedList<T>;

  constructor() {
    this.#list = new LinkedList();
  }

  get head() {
    return this.#list.first?.value;
  }

  push(value: T) {
    this.#list.addLast(value);
  }

  shift() {
    return this.#list.removeFirst();
  }
}

export { Queue };
