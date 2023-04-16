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

    isEmpty() {
        return !this.first;
    }

    addLast(value: T): void {
        const newLinkNode = new LinkNode(value);
        if (this.isEmpty()) {
            this.first = newLinkNode;
        } else {
            this.last!.next = newLinkNode;
            newLinkNode.prev = this.last;
        }
        this.last = newLinkNode;
    }

    addFirst(value: T): void {
        const newLinkNode = new LinkNode(value);
        if (this.isEmpty()) {
            this.last = newLinkNode;
        } else {
            this.first!.prev = newLinkNode;
            newLinkNode.next = this.first;
        }
        this.first = newLinkNode;
    }

    removeLast(): void {
        if (this.first!.next === null) {
            this.first = null;
        } else {
            this.last!.prev!.next = null;
        }
        this.last = this.last!.prev;
    }

    removeFirst(): void {
        if (this.first === null) {
            this.last = null;
        } else {
            this.first.next!.prev = null;
        }
        this.first = this.first!.next;
    }

    *[Symbol.iterator]() {
        let current = this.first;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

const linkedList = new LinkedList()



linkedList.addFirst(5);
linkedList.addFirst(4);
linkedList.addFirst(3);
linkedList.addFirst(2);
linkedList.addFirst(1);

linkedList.removeLast();
linkedList.removeFirst();
for (const value of linkedList) {
    console.log(value);
}

export { LinkedList };