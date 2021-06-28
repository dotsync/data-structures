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
    test('should add node to empty list', () => {
      const dll = new DoublyLinkedList();
      dll.addToHead('First');
      expect(dll.head.value).toBe('First');
      expect(dll.head.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.size).toBe(1);
    });

    test('should be head and tail if it is the only node in the list', () => {
      const dll = new DoublyLinkedList();
      dll.addToHead('First');
      expect(dll.tail.value).toBe('First');
      expect(dll.tail.next).toBeNull();
      expect(dll.tail.prev).toBeNull();
      expect(dll.size).toBe(1);
    });
    const dll = new DoublyLinkedList();
    dll.addToHead('First');
    dll.addToHead('Second');
    dll.addToHead('Third');
    test('should add node to the head of the list that already has nodes', () => {
      expect(dll.head.value).toBe('Third');
      expect(dll.head.next.value).toBe('Second');
      expect(dll.head.next.next.value).toBe('First');
      expect(dll.tail.value).toBe('First');
      expect(dll.head.next.next.next).toBeNull();
      expect(dll.tail.next).toBeNull();
    });
    test('should point to previous nodes aswell', () => {
      expect(dll.tail.value).toBe('First');
      expect(dll.tail.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.tail.prev.value).toBe('Second');
      expect(dll.tail.prev.prev.value).toBe('Third');
      expect(dll.tail.prev.prev.prev).toBeNull();
    });
  });
  describe('addToTail method', () => {
    test('should add to tail and head when adding to empty list', () => {
      const dll = new DoublyLinkedList();
      dll.addToTail(1);
      expect(dll.head.value).toBe(1);
      expect(dll.head.next).toBeNull();
      expect(dll.head.prev).toBeNull();
      expect(dll.tail.value).toBe(1);
      expect(dll.tail.next).toBeNull();
      expect(dll.tail.prev).toBeNull();
      expect(dll.tail.next).toBeNull();
      expect(dll.size).toBe(1);
    });
  });
});
