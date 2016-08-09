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
var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }
    var result = [],
        temp = [root];
    while (temp.length) {
        var _node = [],
            _temp = [];
        temp.forEach(function(item) {
            _node.push(item.val);
            if (item.left) {
                _temp.push(item.left);
            }
            if (item.right) {
                _temp.push(item.right);
            }
        })
        result.push(_node);
        temp = _temp;
    }
    return result.reverse();
};
