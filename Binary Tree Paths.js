/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  let result = [];
  getPath(root, "", result);
  return result;
};

const getPath = function (node, curVal, result) {
  if (node === null) {
    return;
  }

  if (!curVal) {
    curVal = '' + node.val;
  } else {
    curVal += '->' + node.val;
  }

  if (node.left) {
    getPath(node.left, curVal, result);
  }
  if (node.right) {
    getPath(node.right, curVal, result);
  }
  if (!node.left && !node.right) {
    result.push(curVal);
  }
}