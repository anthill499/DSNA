var mergeTwoLists = function(l1, l2) {
    if (!l1 && l2) return l2
    if (l1 && !l2) return l1
    if (!l1 && !l2) return null;
    
    let newListHead;
    if (l1.val <= l2.val) {
        newListHead = new ListNode(l1.val)
        l1 = l1.next
    } else {
        newListHead = new ListNode(l2.val)
        l2 = l2.next
    }
    let currTail = newListHead
    while (l1 || l2) {
        console.log(l1, l2, newListHead, currTail)
        if (!l1 && l2) {
           currTail.next = l2
           l2 = l2.next
            break;
        } else if (l1 && !l2) {
           currTail.next = l1
           l1 = l1.next
            break;
        } else if (l1 && l2) {
           if (l1.val <= l2.val) {
               currTail.next = new ListNode(l1.val);
               currTail = currTail.next;
               l1 = l1.next;
           } else {
               currTail.next = new ListNode(l2.val);
               currTail = currTail.next;
               l2 = l2.next;
           }
        }
    }
    return newListHead;
};
