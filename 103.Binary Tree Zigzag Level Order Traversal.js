/**
 *  Time: O(n)
 *  Space: O(n)
 */

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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let levelList = [];
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (result.length % 2 === 0) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelList);
  }
  return result;
};