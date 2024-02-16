function detectCycle(head) {
    let cycleNode = null;
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

        if (hasCycle) {
            fastPointer = head;

            while (true) {
                if (fastPointer === slowPointer) {
                    cycleNode = slowPointer;
                    break;
                }

                fastPointer = fastPointer.next;
                slowPointer = slowPointer.next;
            }
        }
    }

    return cycleNode;
}

module.exports = detectCycle;