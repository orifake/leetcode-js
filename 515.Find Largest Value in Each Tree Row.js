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
 * @return {number[]}
 */
const largestValues = function (root) {
  const result = []
  if (!root) {
    return result
  }

  let queue = [root];

  while (queue.length > 0) {
    let levelMax = Number.MIN_SAFE_INTEGER
    let nextLevel = []

    for (const node of queue) {
      levelMax = Math.max(levelMax, node.val)

      if (node.left) {
        nextLevel.push(node.left)
      }
      if (node.right) {
        nextLevel.push(node.right)
      }
    }

    result.push(levelMax)
    queue = nextLevel
  }

  return result
};