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
const getMinimumDifference = function (root) {
  let prev = null
  let result = Infinity
  const inOrder = function (node) {
    if (!node) return
    inOrder(node.left)
    if (prev) {
      result = Math.min(ans, node.val - prev.val)
    }
    prev = node
    inOrder(node.right)
  }
  inOrder(root)
  return result
};