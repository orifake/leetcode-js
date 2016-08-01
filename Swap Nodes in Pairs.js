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
var swapPairs = function(head) {
    'use strict'
    if (!head) {
        return null;
    }
    let result = [];
    while (head) {
        let next = head.next;
        head.next = null;
        result.push(head);
        head = next;
    }

    for (let i = 0; i < result.length; i += 2) {
        let a = result[i];
        let b = result[i + 1];

        if (!b) {
            continue;
        }

        result[i] = b;
        result[i + 1] = a;
    }

    for (let i = 0; i < result.length - 1; i++) {
        result[i].next = result[i + 1];
    }

    return result[0];
};
