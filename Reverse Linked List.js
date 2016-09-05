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
var reverseList = function(head) {
	var array = [];
	while (head) {
		array.push(new ListNode(head.val));
		head = head.next;
	}
	array.reverse();
	if (!array.length) {
		return null;
	}
	for (var i = 0; i < array.length - 1; i++) {
		array[i].next = array[i + 1];
	}
	return array[0];
};