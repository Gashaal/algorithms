import test from 'ava';


class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

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

test('no cycle', t => {
    const head = new ListNode(3);
    const second = new ListNode(2);
    const third = new ListNode(0);
    const tail = new ListNode(-4);

    head.next = second;
    second.next = third;
    third.next = tail;

    t.is(hasCycle(head), false);
    t.is(hasCycle(), false);
    t.is(detectCycle(head), null);
});

test("has cycle", t => {
    const head = new ListNode(3);
    const second = new ListNode(2);
    const third = new ListNode(0);
    const tail = new ListNode(-4);

    head.next = second;
    second.next = third;
    third.next = tail;
    tail.next = second;

    t.is(hasCycle(head), true);
});

test('detectCycle', t => {
    const head = new ListNode(3);
    const second = new ListNode(2);
    const third = new ListNode(0);
    const tail = new ListNode(-4);

    head.next = second;
    second.next = third;
    third.next = tail;
    tail.next = second;

    t.is(detectCycle(head), second);
});