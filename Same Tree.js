/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let result = true;

    const isSame = (a, b) => {
        if (a === null && b === null) return true;
        if (a === null && b !== null) return false;
        if (a !== null && b === null) return false;
        if (a.val === b.val)
            return true;
        return false;
    }

    const compare = (a, b) => {
        if (!result) {
            return
        }
        if (!isSame(a, b)) {
            result = false;
            return;
        }
        if (a && b && a.left !== undefined && b.left !== undefined) {
            compare(a.left, b.left);
        }
        if (a && b && a.right !== undefined && b.right !== undefined) {
            compare(a.right, b.right);
        }
    }

    compare(p, q);
    return result;
};
