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
	let temp = [];
	let result = [];
	let level_node = [];
	while (queue.length) {
		const elem = queue.shift();
		elem.left && temp.push(elem.left);
		elem.right && temp.push(elem.right);
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