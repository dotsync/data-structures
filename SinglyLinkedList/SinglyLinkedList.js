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
  addToTail(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.size++;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
      this.size++;
    }
  }
  // print
  print() {
    const result = ['head'];
    let currentNode = this.head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    result.push('tail');
    console.log(result);
  }
  // removeHead
  removeHead() {
    if (!this.head) {
      return null;
    } else {
      const oldHead = this.head;
      const newHead = this.head.next;
      this.head = newHead;
      this.size--;
      return [oldHead, this.size];
    }
  }
  removeTail() {
    let currentNode = this.head;
    if (!currentNode) return null;
    if (!currentNode.next) {
      this.head = null;
      return;
    }
    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
  /**
   * @param {Array} arr Values to add to the linked list
   */
  // 1 --- 2 --- 3 --- 4
  insertNodesAtTail(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.addToTail(arr[i]);
    }
  }
}

module.exports = SinglyLinkedList;
