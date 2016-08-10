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
var minDepth = function(root) {
    var min = 0;
    var recursionDepth = function(node, depth) {
        if (!node) {
            return;
        }
        if (min && depth >= min) {
            return;
        }
        if (!node.left && !node.right) {
            min = depth;
            return;
        }

        if (node.left) {
            recursionDepth(node.left, depth + 1);
        }
        if (node.right) {
            recursionDepth(node.right, depth + 1);
        }
    }
    recursionDepth(root, 1);
    return min;
};
