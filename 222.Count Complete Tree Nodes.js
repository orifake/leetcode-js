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
const countNodes = function (root) {
  let l = root
  let r = root
  let hl = 0
  let hr = 0
  while (l) {
    hl += 1
    l = l.left
  }

  while (r) {
    hr += 1
    r = r.right
  }
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
};