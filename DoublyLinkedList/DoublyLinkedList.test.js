const DoublyLinkedList = require('./DoublyLinkedList');

describe('Doubly Linked List', () => {
  describe('Basic Functionality of class', () => {
    const dll = new DoublyLinkedList();
    test('should have a head', () => {
      expect(dll.head).toBeNull();
      expect(dll.size).toBe(0);
    });
    test('should have a tail', () => {
      expect(dll.tail).toBeNull();
      expect(dll.size).toBe(0);
    });
  });
  describe('addToHead method', () => {
    const dll = new DoublyLinkedList();
    // add new node to head of doubly linked list
    dll.addToHead('First');
    test('should add node to empty list', () => {
      expect(dll.head.value).toBe('First');
      expect(dll.head.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.size).toBe(1);
    });
    test('should be head and tail if it is the only node in the list', () => {
      expect(dll.tail.value).toBe('First');
      expect(dll.tail.next).toBeNull();
      expect(dll.tail.prev).toBeNull();
      expect(dll.size).toBe(1);
    });
    test('should add node to the head of the list that already has nodes', () => {
      dll.addToHead('Second');
      dll.addToHead('Third');
      expect(dll.head.value).toBe('Third');
      expect(dll.head.next.value).toBe('Second');
      expect(dll.head.next.next.value).toBe('First');
      expect(dll.tail.value).toBe('First');
      expect(dll.tail.next).toBeNull();
    });
    test('should point to previous nodes aswell', () => {
      dll.addToHead('Second');
      dll.addToHead('Third');
      expect(dll.tail.value).toBe('First');
      expect(dll.tail.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.tail.prev.value).toBe('Second');
      expect(dll.tail.prev.prev.value).toBe('Third');
      expect(dll.tail.prev.prev.prev).toBeNull();
    });
  });
});
