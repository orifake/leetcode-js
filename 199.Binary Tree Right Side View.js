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
const rightSideView = function (root) {
  if (!root) return []
  const result = []
  const walk = (node, h) => {
    if (!node) return
    result[h] = node.val
    walk(node.left, h + 1)
    walk(node.right, h + 1)
  }

  walk(root, 0)
  return result
};