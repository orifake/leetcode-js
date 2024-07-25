/**
 *  Time: O(n)
 *  Space: O(1)
 */

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
const reverseList = function (head) {
	let prev = null
	let curr = head
	while (curr) {
		let next = curr.next
		curr.next = prev
		prev = curr
		curr = next
	}
	return prev
};