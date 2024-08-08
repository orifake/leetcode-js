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
const swapPairs = function (head) {
    if (head === null || head.next === null) {
        return head
    }
    let first = head
    let second = head.next
    let others = head.next.next
    second.next = first
    first.next = swapPairs(others)
    return second
}
