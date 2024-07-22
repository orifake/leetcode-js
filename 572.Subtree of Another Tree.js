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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  if (!root) return !subRoot
  if (isSameTree(root, subRoot)) {
    return true;
  }
  // 去左右子树中判断是否有和 subRoot 相同的子树
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const isSameTree = function (p, q) {
  // 判断一对节点是否相同
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  // 判断其他节点是否相同
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}