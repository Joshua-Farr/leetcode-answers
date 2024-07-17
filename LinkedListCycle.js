/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //If size === 1 then we return false (no list)

  // Start at the head and traverse the linked list
  // Two pointers, one at the next node and the one at the following node
  // Check all the nodes for next until we get to null or to the same as the first pointer
  // If the same, then return true, otherwise move pointer to next node.

  if (head === null || head.next === null) return false;

  let p1 = head;
  let p2 = head.next;

  while (p2 !== null && p2.next !== null) {
    if (p1 === p2) {
      return true;
    }
    p1 = p1.next;
    p2 = p2.next.next;
  }
  return false;
};
