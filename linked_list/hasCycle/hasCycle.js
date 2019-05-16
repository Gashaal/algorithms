function hasCycle(head) {
    let hasCycle = false;

    if (head) {
        let slowPointer = head;
        let fastPointer = head;

        while (true) {
            if (fastPointer.next && fastPointer.next.next) {
                fastPointer = fastPointer.next.next;
                slowPointer = slowPointer.next;

                if (fastPointer === slowPointer) {
                    hasCycle = true;
                    break;
                }
            } else {
                break;
            }
        }
    }

    return hasCycle;
}

module.exports = hasCycle;