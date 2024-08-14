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

const nextRightNode = function (node) {
  let next = node.next;
  while (next) {
    if (next.left) return next.left;
    if (next.right) return next.right;
    next = next.next;
  }
  return null;
}

const connect = function (root) {
  if (root === null) return root
  if (root.left) {
    root.left.next = root.right ? root.right : nextRightNode(root)
  }
  if (root.right) {
    root.right.next = nextRightNode(root)
  }
  connect(root.right)
  connect(root.left)
  return root
};