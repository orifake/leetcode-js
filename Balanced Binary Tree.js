/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (!root) return ture;
  if (Math.abs(depth(root.left) - depth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right)
  } else {
    return false
  }
};

const depth = (node) => {
  if (!node) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1
}