/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    const findMinDepth = (currentNode) => {
      if (currentNode.left === null && currentNode.right === null) return 1;
      if (currentNode.left === null) return findMinDepth(currentNode.right) + 1;
      if (currentNode.right === null) return findMinDepth(currentNode.left) + 1;
      return Math.min(findMinDepth(currentNode.left), findMinDepth(currentNode.right)) + 1;
    }

    return findMinDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    const findMaxDepth = (currentNode) => {
      if (currentNode.left === null && currentNode.right === null) return 1;
      if (currentNode.left === null) return findMaxDepth(currentNode.right) + 1;
      if (currentNode.right === null) return findMaxDepth(currentNode.left) + 1;
      return Math.max(findMaxDepth(currentNode.left), findMaxDepth(currentNode.right)) + 1;
    }

    return findMaxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxPathSum = 0;
    const findMaxPathSum = (currentNode) => {
      if (currentNode === null) return 0;
      const leftPathSum = findMaxPathSum(currentNode.left), rightPathSum = findMaxPathSum(currentNode.right);
      maxPathSum = Math.max(maxPathSum, currentNode.val + leftPathSum + rightPathSum);
      return Math.max(0, leftPathSum + currentNode.val, rightPathSum + currentNode.val);
    }

    findMaxPathSum(this.root);
    return maxPathSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
