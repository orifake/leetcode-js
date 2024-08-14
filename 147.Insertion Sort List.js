/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = function (head) {
  let current = head
  let list = []
  while (current) {
    list.push(current.val)
    current = current.next
  }

  for (let i = 1; i < list.length; i++) {
    let currVal = list[i]
    let j = i - 1
    for (; j >= 0 && list[j] > currVal; j--) {
      list[j + 1] = list[j]
    }
    list[j + 1] = currVal
  }

  current = head;
  for (let i = 0; i < list.length; i++) {
    current.val = list[i];
    current = current.next;
  }

  return head
};