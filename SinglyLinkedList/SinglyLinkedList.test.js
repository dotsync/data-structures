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
    const choirs = new SinglyLinkedList();
    choirs.addToTail('Wash Dishes');
    test('should add new node to empty list', () => {
      expect(choirs.head.value).toBe('Wash Dishes');
      expect(choirs.head.next).toBeNull();
      expect(choirs.size).toBe(1);
    });
    test('should add new nodes to tail', () => {
      choirs.addToTail('Vacuum');
      expect(choirs.head.value).toBe('Wash Dishes');
      expect(choirs.head.next.value).toBe('Vacuum');
      expect(choirs.head.next.next).toBeNull();
      expect(choirs.size).toBe(2);
      choirs.addToTail('Mop');
      expect(choirs.head.next.next.value).toBe('Mop');
      expect(choirs.size).toBe(3);
      choirs.addToTail('Laundry');
      expect(choirs.head.next.next.next.value).toBe('Laundry');
      expect(choirs.head.next.next.next.next).toBeNull();
      expect(choirs.size).toBe(4);
    });
  });
});
