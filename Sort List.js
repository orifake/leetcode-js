/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const sortList = function (head) {
  //If List Contain a Single or 0 Node
  if (!head || !head.next) return head

  let fast = head;
  let slow = head;
  let temp = null

  // 2 pointer appraoach / turtle-hare Algorithm (Finding the middle element)
  while (fast && fast.next) {
    temp = slow;
    slow = slow.next;       //slow increment by 1
    fast = fast.next.next;  //fast incremented by 2
  }

  temp.next = null          //end of first left half
  const l1 = sortList(head)
  const l2 = sortList(slow)
  return mergeList(l1, l2)
};

//MergeSort Function O(n*logn)
function mergeList(l1, l2) {
  let head = new ListNode();
  let curr = head;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  //for unqual length linked list

  if (l1) {
    curr.next = l1;
    l1 = l1.next;
  }

  if (l2) {
    curr.next = l2;
    l2 = l2.next;
  }
  return head.next;
}
