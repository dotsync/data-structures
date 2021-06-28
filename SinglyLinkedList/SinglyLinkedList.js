class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
  hasCycle(head = this.head) {
    // space O(1)
    // time O(n)
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }

  cycleLength(head = this.head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        let current = slow;
        let length = 0;
        while (true) {
          current = current.next;
          length++;
          if (current === slow) break;
        }
        return length;
      }
    }
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
