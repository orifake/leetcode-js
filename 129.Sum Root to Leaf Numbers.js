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
const sumNumbers = function (root) {
  const dfs = (node, sum) => {
    if (!node) return 0
    sum = sum * 10 + node.val
    if (!node.left && !node.right) return sum
    const leftSum = dfs(node.left, sum)
    const rightSum = dfs(node.right, sum)
    return leftSum + rightSum
  }
  return dfs(root, 0)
};