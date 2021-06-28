const DoublyLinkedList = require('./DoublyLinkedList');

describe('Doubly Linked List', () => {
  describe('Basic Functionality of class', () => {
    dll = new DoublyLinkedList();
    test('should have a head', () => {
      expect(dll.head).toBeNull();
      expect(dll.size).toBe(0);
    });
    test('should have a tail', () => {
      expect(dll.tail).toBeNull();
      expect(dll.size).toBe(0);
    });
  });
});
