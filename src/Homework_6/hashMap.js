import { LinkedList } from '../Homework_3';
import { getStringHash, getObjectHash, getPrime } from '../utils/utils';

class HashTable {
  constructor(capacity = 31) {
    this.length = 0;
    this.buffer = new Array(capacity).fill(null);
  }

  #getHash(key) {
    switch (typeof key) {
      case 'number':
        return key;
      case 'string':
        return getStringHash(key, this.buffer.length);
      case 'object':
        return getObjectHash(key);
    }
  }

  #changeSizeBuffer() {
    const currentBuffer = this.buffer;
    this.buffer = new Array(getPrime(this.buffer.length * 2)).fill(null);

    for (let currentElement of currentBuffer) {
      if (currentElement === null) {
        continue;
      } else {
        let list = currentElement.first;
        while (list !== null) {
          const { key, value } = list.value;
          this.set(key, value);
          list = list.next;
        }
      }
    }
  }

  set(key, value) {
    if (this.length / this.buffer.length >= 1) {
      this.#changeSizeBuffer();
    }
    const hash = this.#getHash(key) % this.buffer.length;
    if (this.buffer[hash] === null) {
      this.length++;
      this.buffer[hash] = new LinkedList();
      this.buffer[hash].addLast({ key, value });
    } else {
      let currentItem = this.buffer[hash].first;
      while (currentItem !== null) {
        if (currentItem.value.key === key) {
          break;
        } else {
          currentItem = currentItem.next;
        }
      }
      if (currentItem !== null) {
        currentItem.value.value = value;
      } else {
        this.length++;
        this.buffer[hash].addLast({ key, value });
      }
    }
  }

  get(key) {
    const hash = this.#getHash(key) % this.buffer.length;
    let currentElement = this.buffer[hash];
    if (currentElement === null) {
      return undefined;
    }
    let list = this.buffer[hash].first;
    while (list !== null && list.value.key !== key) {
      list = list.next;
    }
    return list !== null ? list.value.value : undefined;
  }

  has(key) {
    const hash = this.#getHash(key) % this.buffer.length;
    if (this.buffer[hash] === null) {
      return false;
    } else {
      let currentItem = this.buffer[hash].first;
      while (currentItem !== null) {
        if (currentItem.value.key === key) {
          return true;
        }
        currentItem = currentItem.next;
      }
      return false;
    }
  }

  delete(key) {
    const hash = this.#getHash(key) % this.buffer.length;
    if (this.buffer[hash] === null) {
      return false;
    } else {
      let currentItem = this.buffer[hash].first;
      let previousItem = this.buffer[hash].first;

      while (currentItem.value.key !== key) {
        if (currentItem.next === null) {
          return null;
        } else {
          previousItem = currentItem;
          currentItem = currentItem.next;
        }
      }
      if (currentItem === this.buffer[hash].first) {
        this.buffer[hash].first = this.buffer[hash].first.next;
      } else {
        previousItem.next = currentItem.next;
      }
      return currentItem.value.value;
    }
  }
}

const hashMap = new HashTable();

hashMap.set('a', 1);
hashMap.set('abe', 3);
hashMap.set('cav', 5);
hashMap.set('cwad', 7);

console.log(hashMap.get('a'));
console.log(hashMap.get('abe'));
console.log(hashMap.get('cav'));
console.log(hashMap.get('cwad'));
console.log(hashMap.has('cwad'));
console.log(hashMap.delete('cwad'));
