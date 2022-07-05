const detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      fast = head
      break
    }
  }

  if (fast == null || fast.next == null) {
    // fast 遇到空指针说明没有环
    return null;
  }
  
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
}