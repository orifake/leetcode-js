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
var levelOrder = function(root) {
	if (!root) return [];
	var result = [],
		temp = [root];

	while (temp.length) {
		var res = [],
			a = [];

		for (var i = 0, len = temp.length; i < len; i++) {
			if (!temp[i]) continue;
			res.push(temp[i].val);
			a.push(temp[i].left);
			a.push(temp[i].right);
		}

		temp = a.concat();
		if (res.length)
			result.push(res);
	}

	return result;

};