/**
 *  Time: O(n)
 *  Space: O(logn)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
  if (!root) return ture;
  if (Math.abs(depth(root.left) - depth(root.right)) <= 1) {
    return isBalanced(root.left) && isBalanced(root.right)
  } else {
    return false
  }
};

const depth = (node) => {
  if (!node) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1
}

const isBalanced2 = function (root) {
  let result = true;
  const check = function (root) {
    if (!root) return;

    let a = root.left ? check(root.left) : 0;
    let b = root.right ? check(root.right) : 0;

    if (Math.abs(a - b) > 1) {
      result = false;
    }

    return Math.max(a, b) + 1;
  };
  check(root);
  return result;
};