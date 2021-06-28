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
  describe('Basic functionality of class test suite', () => {
    const ll = new SinglyLinkedList();
    test('should have a head equal to null', () => {
      expect(ll.head).toBeNull();
    });
    test('should have a size equal to 0', () => {
      expect(ll.size).toBe(0);
    });
  });
  describe('addToHead method test suite', () => {
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
  describe('addToTail method test suite', () => {
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

  describe('removeHead method test suite', () => {
    const places = new SinglyLinkedList();
    test('should return null when removing from empty list', () => {
      expect(places.removeHead()).toBeNull();
    });
    test('should remove items from the head of the list', () => {});
  });
});
