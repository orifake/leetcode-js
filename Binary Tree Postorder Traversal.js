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
const postorderTraversal = function (root) {
  const ans = []
  const traverse = function (node) {
    if (!node) return
    traverse(node.left);
    traverse(node.right);
    ans.push(node.val);
  }
  traverse(root)
  return ans
};