/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
	if (head.next == null) return null;
	let pre = head
	let curr = head
	for (let i = 0; i < n; i++) {
		curr = curr.next
	}
	if (!curr) return pre.next
	while (curr.next) {
		curr = curr.next
		pre = pre.next
	}
	pre.next = pre.next.next;
	return head;
};