class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    let currentNode = this.first;
    let prevNode;
    if (this.last == this.first) this.last = null;

    while (currentNode.next) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = null;
    this.last = prevNode;
    this.size--;
    return this;
  }
}

// 1 2 3 4 5 6 7 8
let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.dequeue();
console.log(q);
