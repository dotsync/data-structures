const SinglyLinkedList = require('./SinglyLinkedList');

/**

  Singly Linked List
  node1    |---> node2
  data     |     data
  next --->      next ---> null

notes:
Singly linked lists do not have a tail
 */

describe('Singly Linked List Class', () => {
  describe('Basic functionality of class', () => {
    const ll = new SinglyLinkedList();
    test('should have a head equal to null', () => {
      expect(ll.head).toBeNull();
    });
    test('should have a size equal to 0', () => {
      expect(ll.size).toBe(0);
    });
  });
  describe('addToHead method', () => {
    const ll = new SinglyLinkedList();
    ll.addToHead('New York');
    test('should add new value to head', () => {
      expect(ll.head.value).toBe('New York');
      expect(ll.head.next).toBeNull();
      expect(ll.size).toBe(1);
    });
    test('should add a second value to the head', () => {
      ll.addToHead('Connecticut');
      expect(ll.head.value).toBe('Connecticut');
      expect(ll.head.next.value).toBe('New York');
      expect(ll.head.next.next).toBeNull();
      expect(ll.size).toBe(2);
    });
  });
  describe('addToTail method', () => {
    const chores = new SinglyLinkedList();
    chores.addToTail('Wash Dishes');
    test('should add new node to empty list', () => {
      expect(chores.head.value).toBe('Wash Dishes');
      expect(chores.head.next).toBeNull();
      expect(chores.size).toBe(1);
    });
    test('should add new nodes to tail', () => {
      chores.addToTail('Vacuum');
      expect(chores.head.value).toBe('Wash Dishes');
      expect(chores.head.next.value).toBe('Vacuum');
      expect(chores.head.next.next).toBeNull();
      expect(chores.size).toBe(2);
      chores.addToTail('Mop');
      expect(chores.head.next.next.value).toBe('Mop');
      expect(chores.size).toBe(3);
      chores.addToTail('Laundry');
      expect(chores.head.next.next.next.value).toBe('Laundry');
      expect(chores.head.next.next.next.next).toBeNull();
      expect(chores.size).toBe(4);
    });
  });
  describe('removeHead method', () => {
    test('should return null when removing from empty list', () => {
      const places = new SinglyLinkedList();
      expect(places.removeHead()).toBeNull();
    });
    test('should remove from a list that has only one node', () => {
      const ll = new SinglyLinkedList();
      ll.addToTail(1);
      ll.removeHead();
      expect(ll.head).toBeNull();
    });

    test('should remove items from the head of the list', () => {
      const places = new SinglyLinkedList();
      places.insertNodesAtTail([1, 2, 3, 4, 5]);
      expect(places.head.value).toBe(1);
      expect(places.size).toBe(5);
      places.removeHead();
      expect(places.head.value).toBe(2);
      expect(places.size).toBe(4);
      places.removeHead();
      expect(places.head.value).toBe(3);
      expect(places.size).toBe(3);
    });
  });
  describe('removeTail method', () => {
    test('should return null if list is empty', () => {
      const ll = new SinglyLinkedList();
      expect(ll.removeTail()).toBeNull();
    });
    test('should remove the head if it is the only node in list', () => {
      const ll = new SinglyLinkedList();
      ll.addToTail(1);
      ll.removeTail();
      expect(ll.head).toBeNull();
    });

    test('should remove node from the tail of list', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3]);
      ll.removeTail();
      expect(ll.head.next.value).toBe(2);
      expect(ll.head.next.next).toBeNull();
    });
  });
  describe('hasCycle method', () => {
    test('should return false if given an empty list', () => {
      const ll = new SinglyLinkedList();
      expect(ll.hasCycle()).toBe(false);
    });
    test('should return false if there is no cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3, 4, 5]);
      expect(ll.hasCycle()).toBe(false);
    });
    test('should return true for a single node cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1]);
      ll.head.next = ll.head;
      expect(ll.hasCycle()).toBe(true);
    });

    test('should return true for the two node cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2]);
      ll.head.next.next = ll.head;
      expect(ll.hasCycle()).toBe(true);
    });

    test('should return true if there is a cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3]);
      // attach cycle
      ll.head.next.next.next = ll.head.next;
      // check cycle
      expect(ll.hasCycle()).toBe(true);
    });
  });
  describe('cycleLength method', () => {
    test('should return the length of the cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3]);
      ll.head.next.next.next = ll.head.next;
      expect(ll.cycleLength()).toBe(2);
    });
    test('should return the length of the small cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3, 4, 5]);
      ll.head.next.next.next.next.next = ll.head.next.next;
      expect(ll.cycleLength()).toBe(3);
    });
    test('should return the length of the large cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3, 4, 5, 6]);
      ll.head.next.next.next.next.next.next = ll.head.next.next;
      expect(ll.cycleLength()).toBe(4);
    });
    test('should return the length of the cycle', () => {
      const ll = new SinglyLinkedList();
      ll.insertNodesAtTail([1, 2, 3, 4, 5, 6]);
      ll.head.next.next.next.next.next.next = ll.head.next.next.next;
      expect(ll.cycleLength()).toBe(3);
    });
  });
});
