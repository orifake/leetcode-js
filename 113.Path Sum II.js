/**
 *  Time: O(n)
 *  Space: O(logn)
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
 * @param {number} sum
 * @return {boolean}
 */
const pathSum = function (root, targetSum) {
  const result = [];
  if (root) {
    findPathSum(root, targetSum, [], 0, result)
  }
  return result
};

const findPathSum = function (node, targetSum, stack, sum, result) {
  stack.push(node.val)
  sum += node.val
  if (targetSum === sum && !node.left && !node.right) {
    result.push([...stack])
  }
  if (node.left) {
    findPathSum(node.left, targetSum, stack, sum, result)
  }
  if (node.right) {
    findPathSum(node.right, targetSum, stack, sum, result)
  }
  stack.pop()
}