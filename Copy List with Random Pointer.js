/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


const copyNodes = function (node) {
  let current = node
  while (current) {
    let cloneNode = {
      val: current.val,
      next: current.next
    }
    current.next = cloneNode
    current = cloneNode.next
  }
}

const copyRandom = function (node) {
  let current = node
  while (current) {
    let cloneNode = current.next
    if (current.random) {
      cloneNode.random = current.random.next
    } else {
      cloneNode.random = null
    }
    current = cloneNode.next;
  }
}

const reconnentNodes = function (head) {
  let cloneHead = head.next
  let cloneNode = head.next
  let current = head
  while (current) {
    current.next = cloneNode.next
    current = cloneNode.next;
    if (current) {
      cloneNode.next = current.next;
      cloneNode = current.next;
    } else {
      cloneNode.next = null;
    }
  }
  return cloneHead
}


const copyRandomList = function (head) {
  if (!head) return null
  copyNodes(head)
  copyRandom(head)
  return reconnentNodes(head)
}