/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
	if (!head) return null
	let dummy = new ListNode(0)
	dummy.next = head
	let prev = dummy
	let curr = dummy.next
	while (curr) {
		if (curr.val === val) {
			prev.next = curr.next
		} else {
			prev = prev.next
		}
		curr = curr.next
	}

	return dummy.next
};