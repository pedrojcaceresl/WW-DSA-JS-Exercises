// Implement the following methods on the Stack class
// push - takes in a node and puts it at the top of the stack.
// Should return the new size of the stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.last) {
      this.last = newNode;
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  pop() {
    if (!this.size) return undefined;
    let removedNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = removedNode.next;
    }
    this.size--;
    return removedNode;
  }
}

stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
console.log(stack.first);
