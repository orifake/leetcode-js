/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function (root) {
  const result = []
  const traverse = function (node) {
    if (!node) return
    node.children.forEach((child) => {
      traverse(child)
    });
    result.push(node.val);
  }
  traverse(root)
  return result
};