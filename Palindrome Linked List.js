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
var isPalindrome = function(head) {
	var array = [];
	while (head) {
		array.push(head.val);
		head = head.next;
	}

	for (var i = 0, length = array.length; i < ~~(length / 2); i++) {
		if (array[i] !== array[length - i - 1]) {
			return false;
		}
	}
	return true;
};