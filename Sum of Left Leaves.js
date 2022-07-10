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
const sumOfLeftLeaves = function (root) {
  let ans = 0
  if (!root) return ans
  if (root.left && isLeaf(root.left)) {
    ans += root.left.val
  }
  return ans + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)
};

const isLeaf = function (node) {
  return !node.left && !node.right
}