/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
const Solution = function (head) {
  this.head = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let i = 0
  let result
  let node = this.head
  while (node) {
    i++
    if (Math.floor(Math.random() * i) + 1 === i) {
      result = node.val
    }
    node = node.next;
  }
  return result
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */