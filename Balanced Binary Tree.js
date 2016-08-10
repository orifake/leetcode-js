/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var flag = true;
    var check = function(root) {
        if (!root) return;

        var a = root.left ? check(root.left) : 0,
            b = root.right ? check(root.right) : 0;

        if (Math.abs(a - b) > 1) {
            flag = false;
        }

        return Math.max(a, b) + 1;
    };
    check(root);
    return flag;
};
