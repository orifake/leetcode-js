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
  const ans = []
  const traverse = function (node) {
    if (!node) return
    ans.push(node.val);
    node.children.forEach(n => {
      traverse(n)
    });
  }
  traverse(root)
  return ans
};