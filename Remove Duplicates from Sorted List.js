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
const deleteDuplicates = function (head) {
  let curr = head
  while (curr) {
    let runner = curr.next
    while (runner && curr.val === runner.val) {
      runner = runner.next
    }
    curr.next = runner
    curr = runner
  }
  return head
};
