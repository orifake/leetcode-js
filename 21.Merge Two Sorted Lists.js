/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  if (!l1) return l2
  if (!l2) return l1
  let dummy = new ListNode()
  let head = dummy
  while (l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2
      l2 = l2.next
    } else {
      head.next = l1
      l1 = l1.next
    }
    head = head.next
  }
  if (l1) {
    head.next = l1
  } else {
    head.next = l2
  }

  return dummy.next
};
