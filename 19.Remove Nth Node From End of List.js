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
	let slow = head
	let fast = head
	for (let i = 0; i < n; i++) {
		fast = fast.next
	}
	if (!fast) return slow.next
	while (fast.next) {
		fast = fast.next
		slow = slow.next
	}
	// 删除节点
	slow.next = slow.next.next;
	return head;
};