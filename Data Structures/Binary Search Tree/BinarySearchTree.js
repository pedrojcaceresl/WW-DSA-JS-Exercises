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
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) return currentNode;

      if (value < currentNode.left) currentNode = currentNode.left;
      else currentNode = currentNode.right;
    }
    return undefined;
  }

  DFSPreOrder() {
    let node = this.root;
    let stack = [];
    let result = [];

    stack.push(node);

    while (stack.length) {
      let currentNode = stack.pop();

      if (currentNode.right) stack.push(currentNode.right);
      if (currentNode.left) stack.push(currentNode.left);
      result.push(currentNode.value);
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
      let currentNode = stack.pop();
      if (currentNode.left) stack.push(currentNode.left);
      if (currentNode.right) stack.push(currentNode.right);
      result.push(currentNode.value);
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
    let parent = null;
    let currentNode = this.root;

    while (currentNode) {
      parent = currentNode;
      // test for children
      if (value < currentNode.value) currentNode = currentNode.left;
      else currentNode = currentNode.right;

      if (value === currentNode?.value) return { parent, currentNode };
    }
  }

  findNextBigNodeWithParent(node = this.root) {
    let nextBigNodeParent = node;

    if (!nextBigNodeParent || !nextBigNodeParent.right) {
      return { nextBigNodeParent, nextBigNode: null };
    }
    let nextBigNode = node.right;

    while (nextBigNode.left) {
      nextBigNodeParent = nextBigNode;
      nextBigNode = nextBigNode.left;
    }
    return { nextBigNodeParent, nextBigNode };
  }

  //              10
  //             /  \
  //           8     12
  //         /  \   / \
  //        5   9  11  20
  //      /  \        /  \
  //     2    6      18  25

  remove1(value) {
    const { parentNode, currentNode } = this.findNodeWithParent(value);

    if (!currentNode) return null;

    // removed node
    const removedNode = Object.assign({}, currentNode, {
      left: null,
      right: null,
    });

    // parent has no children
    if (!currentNode.left && !currentNode.right) {
      // we have to do a few things here:
      // check if parent is the root
      if (!parentNode) this.root = null;
      // check if it has left child and if it's true, then it will be null
      else if (parentNode.left && parentNode.left.value === value)
        parentNode.left = null;
      // check if it has right child
      else if (parentNode.right && parentNode.right.value === value)
        parentNode.right = null;
    }

    // parent has two children
    if (currentNode.left && currentNode.right) {
      const { nextBigNodeParent, nextBigNode } =
        this.findNextBigNodeWithParent();
      // assign the value of the nextBigNode to the current node
      currentNode.value = nextBigNode.value;

      // Node is the direct parent of the next big node
      if (nextBigNodeParent === currentNode)
        nextBigNodeParent.right = nextBigNode.right;
      // Node is no direct parent of the next biggest node
      else nextBigNodeParent.left = nextBigNode.right;
    }
    // parent has only one child
    else {
      const nextNode = currentNode.left || currentNode.right;
      currentNode.value = nextNode.value;
      currentNode.left = nextNode.left;
      currentNode.right = nextNode.right;
    }
    return removedNode;
  }

  findMax(node = this.root) {
    if (!node) return null;

    let currentNode = node;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode;
  }

  findSecondLargest(node = this.root) {
    if (!node) return null;

    let currentNode = node;
    let parent;

    while (currentNode.right) {
      parent = currentNode;
      currentNode = currentNode.right;
    }

    return currentNode.left ? this.findMax(currentNode.left) : parent;
  }

  isBalanced(node = this.root) {
    if (!node) return true;

    const stack = [];
    const dephts = new Map();
    stack.push([node, false]);

    while (stack.length) {
      const [currentNode, seen] = stack.pop();
      console.log(stack.pop());

      if (!seen) {
        stack.push([currentNode, true]);
        if (currentNode.right) stack.push([currentNode.right, 0]);
        if (currentNode.left) stack.push([currentNode.left, 0]);
      } else {
        const left = dephts.get(currentNode.left) || 0;
        const right = dephts.get(currentNode.right) || 0;

        if (Math.abs(left - right) > 1) return false;
        dephts.set(currentNode, Math.max(left, right) + 1);
      }
    }
    return true;
  }
}
// cN:    10
// seen:  false
// stack: [10, true], [12, 0], [9, 0];
// map:

//              10
//             /  \
//           9     12
//         /  \   / \
//        5   9  11  20
//      /  \        /  \
//     2    6      18  25

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(5);
bst.insert(9);
bst.insert(12);
bst.insert(11);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(2);
bst.insert(6);

console.log(bst.isBalanced());

// bst.insert(15);
// bst.insert(20);
// bst.insert(10);
// bst.insert(12);
// bst.insert(1);
// bst.insert(5);
// bst.insert(50);

// console.log(bst.root.right.right);
// console.log(bst.remove(6));
// console.log(bst.remove1(8));
// console.log(bst.DFSInOrder());
