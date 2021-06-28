class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

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
}

module.exports = DoublyLinkedList;
