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
 * @return {number[]}
 */
const findMode = function (root) {
  const count = {}
  const inOrder = function (node) {
    if (!node) return
    inOrder(node.left)
    count[node.val] = (count[node.val] ? count[node.val] + 1 : 1)
    inOrder(node.right)
  }
  inOrder(root)
  const result = []
  const freq = Math.max(...Object.values(count))
  for (const [key, value] of Object.entries(count)) {
    (value === freq) && result.push(key)
  }
  return result
};