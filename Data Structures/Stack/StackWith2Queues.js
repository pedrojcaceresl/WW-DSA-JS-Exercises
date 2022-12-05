import { Queue } from "./../Queue/Queue.js";

class Stack {
  constructor() {
    this.main = new Queue();
    this.helper = new Queue();
  }

  push(value) {
    while (this.main.size > 0) {
      this.helper.enqueue(this.main.dequeue());
    }

    this.main.enqueue(value);
    console.log(this.main.first);

    while (this.helper.size > 0) {
      this.main.enqueue(this.helper.dequeue());
    }
  }

  // Time complexity - O(1)
  // Space complexity - O(1)
  pop() {
    return this.main.dequeue();
  }
}
// main -       0  20  10
// help -      0
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();

console.log(stack.main);
