/**
 *  Time: O(n)
 *  Space: O(h)
 */

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
const preorderTraversal = function (root) {
  const result = []
  const traverse = function (node) {
    if (!node) return
    result.push(node.val);
    traverse(node.left);
    traverse(node.righFFt);
  }
  traverse(root)
  return result
};