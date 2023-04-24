class LinkNode<T> {
  value: T;
  next: LinkNode<T> | null;
  prev: LinkNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList<T> {
  first: LinkNode<T> | null;
  last: LinkNode<T> | null;

  constructor() {
    this.first = null;
    this.last = null;
  }

  isEmpty(): boolean {
    return !this.first;
  }

  addLast(value: T): LinkedList<T> {
    const newLinkNode = new LinkNode(value);
    if (this.isEmpty()) {
      this.first = newLinkNode;
    } else {
      this.last!.next = newLinkNode;
      newLinkNode.prev = this.last;
    }
    this.last = newLinkNode;
    return this;
  }

  addFirst(value: T): LinkedList<T> {
    const newLinkNode = new LinkNode(value);
    if (this.isEmpty()) {
      this.last = newLinkNode;
    } else {
      this.first!.prev = newLinkNode;
      newLinkNode.next = this.first;
    }
    this.first = newLinkNode;
    return this;
  }

  removeLast(): T | null | Error {
    if (this.isEmpty()) {
      return new Error('List is empty!');
    }
    const temp = this.last;
    if (this.first!.next === null) {
      this.first = null;
    } else {
      this.last!.prev!.next = null;
    }
    this.last = this.last!.prev;
    return temp!.value;
  }

  removeFirst(): T | null | Error {
    if (this.isEmpty()) {
      return new Error('List is empty!');
    }
    const temp = this.first;
    if (this.first!.next === null) {
      this.last = null;
    } else {
      this.first!.next!.prev = null;
    }
    this.first = this.first!.next;
    return temp!.value;
  }

  *[Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

export { LinkedList };
