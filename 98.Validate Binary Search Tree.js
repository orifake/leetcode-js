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
 * @return {boolean}
 */
const isValidBST = function (root) {
  return checkBST(root, null, null)
};

const checkBST = function (root, min, max) {
  if (!root) return true
  if (min !== null && root.val <= min.val) return false
  if (max !== null && root.val >= max.val) return false

  return checkBST(root.left, min, root) && checkBST(root.right, root, max)
}