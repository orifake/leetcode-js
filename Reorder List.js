/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (head === null) return
  /**
   * The goal is to reverse the second half of the list and merge it onto
   * the first half of the list. The first half will have at most one more
   * element than the second half.
   */
  let second = split(head);
  second = reverse(second);
  merge(head, second);
};

function split(node) {
  let fast = node;
  let slow = node;

  while (fast !== null) {
    if (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      fast = null;
    }
  }

  const second = slow.next;
  slow.next = null;

  return second;
}

function reverse(node) {
  let curr = node;
  let prev = null;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function merge(l1, l2) {
  let l1Next = null;
  let l2Next = null;

  while (l2 !== null) {
    l1Next = l1.next;
    l2Next = l2.next;

    l1.next = l2;
    l2.next = l1Next;

    l1 = l1Next;
    l2 = l2Next;
  }
}