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
var removeNthFromEnd = function(head, n) {
	var result = [];

	while (head) {
		result.push(new ListNode(head.val));
		head = head.next;
	}

	result.splice(-n, 1);

	for (var i = 0; i < result.length - 1; i++)
		result[i].next = result[i + 1];

	return result.length === 0 ? null : result[0];
};