/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
	var val = root.val;
	var valP = p.val;
	var valQ = q.val;
	if (root === null || root === p || root === q) {
		return root;
	}

	if (val > valP && val > valQ) {
		return lowestCommonAncestor(root.left, p, q);
	} else if (val < valP && val < valQ) {
		return lowestCommonAncestor(root.right, p, q);
	} else {
		return root;
	}
};