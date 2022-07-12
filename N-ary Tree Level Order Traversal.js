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
  let temp = [];
  let result = [];
  let level_node = [];
  while (queue.length) {
    const elem = queue.shift();
    elem.children.forEach((node) => {
      temp.push(node)
    })
    level_node.push(elem.val);
    if (queue.length === 0) {
      result.push(level_node)
      level_node = []
      queue = temp
      temp = []
    }
  }
  return result;
};