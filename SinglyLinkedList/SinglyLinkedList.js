class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // addToHead
  addToHead(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.size++;
    } else {
      const oldHead = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
      this.size++;
    }
  }
  // addToTail
  // print
}

module.exports = SinglyLinkedList;
