/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let result = [];
    while (head) {
        if (result.length === 0 || result[result.length - 1].val !== head.val) {
            result.push(head)
        }
        head = head.next;
    }
    for (let i = 0; i < result.length; i++) {
        result[i].next = result[i + 1];
    }

    return result.length === 0 ? null : result[0];
};
