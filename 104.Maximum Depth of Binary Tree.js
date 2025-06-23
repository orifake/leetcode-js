/**
 *  Time: O(n)
 *  Space: O(n)
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
 * @return {number}
 */

const maxDepth = function (root) {
  if (!root) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

const maxDepth2 = function (root) {
  let depth = 0;
  let result = 0;

  const traverse = (node) => {
    if (!node) return;
    depth++;
    if (!node.left && !node.right)  {
      // If it's a leaf node, update the result
      result = Math.max(result, depth);
    }
    traverse(node.left);
    traverse(node.right);
    depth--;
  };
  traverse(root);
  return result;
}