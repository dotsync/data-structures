class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Time
 * access: O(n)
 * search: O(n)
 * insertion: O(1)
 * deletion: O(1)
 *
 * space
 * O(n)
 */

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**
   Example

            node A (head)        node B
            value: 1             value: 2
            next: node B ------> next: null
            prev: null   <------ prev: node A
   */
  // methods
  addToHead(value) {
    const newHead = new Node(value);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.prev = newHead;
      newHead.next = currentHead;
    }
    this.head = newHead;
    if (!this.tail) this.tail = newHead;
    this.size++;
  }
  addToTail(value) {
    const newTail = new Node(value);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.next = newTail;
      newTail.prev = currentTail;
    }
    this.tail = newTail;
    if (!this.head) this.head = newTail;
    this.size++;
  }
  removeHead() {
    let currentHead = this.head;
    // if there is no head
    if (!currentHead) return null;
    // if there is no head.next (just one item)
    this.size--;
    if (currentHead.next === null) {
      this.head = null;
      this.tail = null;
      return currentHead;
    } else {
      // switch next and prev pointers
      let nextNode = currentHead.next;
      this.head = nextNode;
      this.head.prev = null;
      return this.head;
    }
  }
  // return the tail that is being removed or null
  removeTail() {
    let currentTail = this.tail;
    if (!currentTail) return null;
    this.size--;
    if (currentTail.prev === null) {
      this.tail = null;
      this.head = null;
      return currentTail;
    } else {
      this.tail = currentTail.prev;
      this.tail.next = null;
    }
  }
}

module.exports = DoublyLinkedList;
