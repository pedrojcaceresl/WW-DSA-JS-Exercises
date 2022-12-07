class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let currenNode = this.root;

    while (currenNode) {
      if (value === currenNode.value) return currenNode;

      if (value < currenNode.left) currenNode = currenNode.left;
      else currenNode = currenNode.right;
    }
    return undefined;
  }

  DFSPreOrder() {
    let node = this.root;
    let stack = [];
    let result = [];

    stack.push(node);

    while (stack.length) {
      let currenNode = stack.pop();

      if (currenNode.right) stack.push(currenNode.right);
      if (currenNode.left) stack.push(currenNode.left);
      result.push(currenNode.value);
    }
    return result;
  }

  DFSInOrder() {
    let stack = [];
    let result = [];
    let currentNode = this.root;

    while (currentNode || stack.length) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      currentNode = stack.pop();
      result.push(currentNode.value);
      currentNode = currentNode.right;
    }
    return result;
  }

  DFSPostOrder() {
    let node = this.root;
    let stack = [];
    let result = [];

    stack.push(node);
    while (stack.length) {
      let currenNode = stack.pop();
      if (currenNode.left) stack.push(currenNode.left);
      if (currenNode.right) stack.push(currenNode.right);
      result.push(currenNode.value);
    }
    return result.reverse();
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    if (!node) return data;

    queue.unshift(node);
    while (queue.length) {
      let currentNode = queue.pop();
      if (currentNode.left) queue.unshift(currentNode.left);
      if (currentNode.right) queue.unshift(currentNode.right);
      data.push(currentNode.value);
    }
    return data;
  }

  findNodeWithParent(value) {
    let parentNode = null;
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) break;

      parentNode = currentNode;

      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return { parentNode, currentNode };
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(5);
bst.insert(9);
bst.insert(12);
bst.insert(11);
bst.insert(20);

// bst.insert(15);
// bst.insert(20);
// bst.insert(10);
// bst.insert(12);
// bst.insert(1);
// bst.insert(5);
// bst.insert(50);

// console.log(bst.DFSPreOrder());
// console.log(bst.BFS());
console.log(bst.findNodeWithParent(12));

//              10
//             /  \
//           8     12
//         /  \   / \
//        5   9  11  20
