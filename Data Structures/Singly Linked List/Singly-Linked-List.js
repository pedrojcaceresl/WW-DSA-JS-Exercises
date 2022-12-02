// Singly Linked List

// Implement the following on the SinglyLinkedList class:

// push
// This function should take in a value and add a node to the end of the SinglyLinkedList.
// It should return the SinglyLinkedList.

// pop
// This function should remove a node at the end of the SinglyLinkedList.
// It should return the node removed.

// shift
// This function should remove a node from the beginning of the SinglyLinkedList.
// It should return the node removed.

// unshift
// This function should add a new node to the beginning of the SinglyLinkedList.
// It should return the SinglyLinkedList.

// get
// This function should find a node at a specified index in a SinglyLinkedList.
// It should return the found node.

// set
// This function should accept an index and a value and update the value
// of the node in the SinglyLinkedList at the index with the new value.
// It should return true if the node is updated successfully,
// or false if an invalid index is passed in.

// insert
// This should insert a node at a specified index in a SinglyLinkedList.
// It should return true if the index is valid, and false if the index is
// invalid (less than 0 or greater than the length of the list).

// remove
// This function should remove a node at a specified index in a SinglyLinkedList.
// It should return the removed node, if the index is valid,
// or undefined if the index is invalid.

// reverse
// This function should reverse the SinglyLinkedList in place.

// rotate
// This function should rotate all the nodes in the list by some number passed in.
// For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2,
// the list should be modified to 3 -> 4 -> 5 -> 1 -> 2.
// The number passed in to rotate can be any integer (should work with negative indexes).
// Time Complexity: O(N), where N is the length of the list.
// Space Complexity: O(1)

// Additionally, the following methods are implemented on the class:
// find - accepts a parameter compareTo which can be a value for comparison or
// a comparison function (must return true or false for each node), returns
// the found node or its index.

// iterate - accepts a callback function as a parameter, iterates through each node
// in the list applying the callback function, returns array of values returned from
// the callback function

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removed = this.head;
    let previous = removed;
    while (removed.next) {
      previous = removed;
      removed = removed.next;
    }
    this.tail = previous;
    this.tail.next = null;
    if (this.tail == 0) {
      this.head = null;
      this.tail = this.head;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.head === this.tail) this.tail = null;

    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    return removedHead;
  }

  unshift(value) {
    if (!this.head) return undefined;
    if (!this.length) this.tail = this.head;
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  insert(index, value) {
    let newNode = new Node(value);
    if (index < 0 || index >= this.length) return false;
    if (index === this.length) return !!this.push(value);
    let previous = this.get(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return false;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !this.shift;
    if (index === this.length) return this.pop();
    let previousNode = this.get(index - 1);

    if (!previousNode) return undefined;

    let removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    removedNode.next = null;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let nextNode;
    let prevNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }
    return this;
  }

  rotate(number) {
    const index = number < 0 ? number + this.length : number;
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this;

    let prevNode = this.get(index - 1);
    if (!prevNode) return undefined;

    this.tail.next = this.head;
    this.head = prevNode.next;
    this.tail = prevNode;
    prevNode.next = null;

    return this;
  }

  find(compareTo, returnIndex = false) {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let i = 0;
    while (currentNode) {
      if (typeof compareTo === "function" && compareTo(currentNode.val)) {
        return returnIndex ? i : currentNode;
      } else if (
        typeof compareTo !== "function" &&
        currentNode.val === compareTo
      ) {
        return returnIndex ? i : currentNode;
      }

      currentNode.next;
      i++;
    }
    return undefined;
  }

  iterate(callback = null) {
    let arr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (typeof callback === "function") arr.push(callback(currentNode.val));
      else arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  }

  print2() {
    console.log(this.iterate());
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(1); // singlyLinkedList
singlyLinkedList.push(2); // singlyLinkedList
singlyLinkedList.push(3); // singlyLinkedList
singlyLinkedList.push(4); // singlyLinkedList
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.push(6); // singlyLinkedList
singlyLinkedList.push(7); // singlyLinkedList
singlyLinkedList.push(8); // singlyLinkedList
singlyLinkedList.push(9); // singlyLinkedList
// singlyLinkedList.set(2, 69);
// singlyLinkedList.rotate(-4);
// singlyLinkedList.reverse();

singlyLinkedList.print2();
