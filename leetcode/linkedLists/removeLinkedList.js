var removeElements = function(head, val) {
    if (!head) return null;
    if (head.val === val) {
        return removeElements(head.next, val) 
    } else {
        head.next = removeElements(head.next, val)
        return head;
    }
};