/**
 *  Time: O(n)
 *  Space: O(n)
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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelList = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      levelList.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelList);
  }
  return result;
};