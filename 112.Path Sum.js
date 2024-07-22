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
const hasPathSum = function (root, sum) {
  let a = false;
  let b = false;
  if (!root) return false;
  if (!root.left && !root.right) {
    if (root.val === sum) {
      return true;
    }
    return false;
  }
  if (root.left) {
    a = hasPathSum(root.left, sum - root.val);
  }
  if (root.right) {
    b = hasPathSum(root.right, sum - root.val);
  }
  return (a || b);
};