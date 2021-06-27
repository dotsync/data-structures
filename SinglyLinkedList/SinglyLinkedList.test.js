const SinglyLinkedList = require('./SinglyLinkedList');

describe('Singly Linked List Class', () => {
  describe('Basic functionality of class', () => {
    const ll = new SinglyLinkedList();
    test('should have a head equal to null', () => {
      expect(ll.head).toBeNull();
    });
    test('should have a tail equal to null', () => {
      expect(ll.tail).toBeNull();
    });
    test('should have a length equal to 0', () => {
      expect(ll.length).toBe(0);
    });
  });
});
