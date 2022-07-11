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
const findTilt = function (root) {
  let ans = 0
  const subTreeSum = function (node) {
    if (!node) return 0
    let lsum = subTreeSum(node.left)
    let rsum = subTreeSum(node.right)
    ans += Math.abs(lsum - rsum)
    return node.val + lsum + rsum
  }
  subTreeSum(root)
  return ans
};
