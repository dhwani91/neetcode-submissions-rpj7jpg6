
class Solution {
    // Helper to reverse a linked list
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        return prev;
    }

    reorderList(head) {
        if (!head || !head.next) return;

        // Step 1: Find the middle using slow/fast pointers
        let slow = head;
        let fast = head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half
        let second = this.reverseList(slow.next);
        slow.next = null; // Cut off first half

        // Step 3: Merge the two halves
        let first = head;

        while (second) {
            let temp1 = first.next;
            let temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
