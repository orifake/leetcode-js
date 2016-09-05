/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	var max = -1;
	var cal = function(node, depth) {
		if (!node) {
			max = Math.max(max, depth);
			return
		}
		cal(node.left, depth + 1);
		cal(node.right, depth + 1);
	}
	cal(root, 0);
	return max;
};