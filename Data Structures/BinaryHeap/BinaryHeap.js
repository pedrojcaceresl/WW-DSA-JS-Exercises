class BinaryHeap {
  constructor() {
    this.values = [];
    // this.getItem = this.getItem.bind(this);
  }

  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getItem(index) {
    return this.values[index];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = this.getParentIndex(idx);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
    return this;
  }
}

let heap = new BinaryHeap();
console.log(heap.insert(10));
console.log(heap.insert(20));
console.log(heap.insert(30));
console.log(heap.insert(40));
console.log(heap.insert(50));

// 50 40 20 10 30 60
