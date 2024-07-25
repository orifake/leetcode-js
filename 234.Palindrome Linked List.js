/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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

const isPalindrome = function (head) {
	let slow = head
	let fast = head
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next
	}
	if (fast) slow = slow.next
	let mid = reverseList(slow)
	while (mid) {
		if (mid.val === head.val) {
			head = head.next
			mid = mid.next
		} else {
			return false
		}
	}
	return true
};