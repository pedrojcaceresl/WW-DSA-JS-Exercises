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

  dephtFirstSearchPreOrder(node = this.root) {
    let result = [];
    if (!node) return result;

    function traverse(root) {
      if (root != null) return;
      if (this.node.right) return traverse(this.node.right);
    }
  }

  dephtFirstSearchInOrder() {}

  dephtFirstSearchPostOrder() {}
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(8);
bst.insert(5);
bst.insert(9);
bst.insert(12);
bst.insert(11);
bst.insert(20);

console.log(bst.find(20));

// 1
//              10
//             /  \
//           8     12
//         /  \   / \
//        5   9  11  20
//
//
//
