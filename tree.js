/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    let sum = this.root.val;
    const traverseAndSum = (currentNode) => {
      for (let descendant of currentNode.children) {
        sum += descendant.val;
        if (descendant.children.length > 0) traverseAndSum(descendant);
      }
    }

    traverseAndSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let evenCount = this.root.val % 2 === 0 ? 1 : 0;
    const traverseAndCountEvenNodes = (currentNode) => {
      for (let descendant of currentNode.children) {
        if (descendant.val % 2 === 0) evenCount++;
        if (descendant.children.length > 0) {
          traverseAndCountEvenNodes(descendant);
        }
      }
    }

    traverseAndCountEvenNodes(this.root);
    return evenCount;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let greaterCount = this.root.val > lowerBound ? 1 : 0;

    const traverseAndCountGreater = (currentNode) => {
      for (let descendant of currentNode.children) {
        if (descendant.val > lowerBound) greaterCount++;
        if (descendant.children.length > 0) {
          traverseAndCountGreater(descendant);
        }
      }
    }

    traverseAndCountGreater(this.root);
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
