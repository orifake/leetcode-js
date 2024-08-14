/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
const connect = function (root) {
  if (root === null || root.left === null) return root
  root.left.next = root.right
  root.right.next = root.next ? root.next.left : null
  connect(root.left)
  connect(root.right)
  return root
};