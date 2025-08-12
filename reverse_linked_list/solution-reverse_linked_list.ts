/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  type NullListNode = ListNode | null;

  let lastNode: NullListNode = null;

  const reverting = (node: NullListNode): NullListNode => {
    if (!node) {
      return node;
    }
    
    const nextNode: NullListNode = node.next;

    const newNode: ListNode = node;
    newNode.next = lastNode;

    lastNode = newNode;

    if (!nextNode) {
      return newNode;
    }

    return reverting(nextNode);
  }

  return reverting(head);
};
