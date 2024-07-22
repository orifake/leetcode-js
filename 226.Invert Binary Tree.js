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
 * @return {TreeNode}
 */
const invertTree = function (root) {
	if (!root) return root
	root.left && invertTree(root.left);
	root.right && invertTree(root.right);

	[root.left, root.right] = [root.right, root.left]
	return root
};