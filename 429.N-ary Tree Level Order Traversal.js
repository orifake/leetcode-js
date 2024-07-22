/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let levelSize = queue.length;
    let levelList = [];

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      levelList.push(node.val);
      node.children.forEach((child) => {
        queue.push(child)
      })
    }

    result.push(levelList);
  }
  return result;
};