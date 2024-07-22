/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function (root) {
  const result = []
  const traverse = function (node) {
    if (!node) return
    result.push(node.val);
    node.children.forEach((child) => {
      traverse(child)
    });
  }
  traverse(root)
  return result
};