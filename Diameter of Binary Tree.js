/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  let max = 1
  const maxDepth = function (node) {
    if (!node) return 0
    let left = maxDepth(node.left)
    let right = maxDepth(node.right)
    max = Math.max(max, left + right + 1)
    return 1 + Math.max(left, right)
  }
  maxDepth(root)
  return max - 1
};