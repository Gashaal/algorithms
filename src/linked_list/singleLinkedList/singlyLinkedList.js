const ListNode = require("./listNode");

class MyLinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
        this._tail = null;
    }

    get(index) {
        if (index >= 0 && index < this._length) {
            let val;

            let pos = 0;
            let pointer = this._head;
            while (pointer) {
                if (index === pos) {
                    val = pointer.val;
                    break;
                }

                pos++;
                pointer = pointer.next;
            }

            return val;
        } else {
            return -1;
        }
    }

    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    addAtTail(val) {
        this.addAtIndex(this._length, val);
    }

    addAtIndex(index, val) {
        if (index <= this._length) {
            switch (true) {
                case index <= 0 && this._length === 0: {
                    const listNode = new ListNode(val, null);
                    this._head = listNode;
                    this._tail = listNode;
                    break;
                }
                case index === 0 && this._length > 0: {
                    const listNode = new ListNode(val, this._head);
                    this._head = listNode;
                    break;
                }
                case index === this._length: {
                    const listNode = new ListNode(val, null);
                    this._tail.next = listNode;
                    this._tail = listNode;
                    break;
                }
                default: {
                    let pos = 1;
                    let prevNode = this._head;
                    let pointer = this._head.next;
                    while (pointer) {
                        if (pos === index) {
                            const listNode = new ListNode(val, pointer);
                            prevNode.next = listNode;
                            break;
                        }

                        pos++;
                        prevNode = pointer;
                        pointer = pointer.next;
                    }
                }
            }

            this._length++;
        }
    }

    deleteAtIndex(index) {
        if (index >= 0 && index < this._length && this._length > 0) {
            if (index === 0) {
                this._head = this._head.next;
            } else {
                let pos = 1;
                let prevNode = this._head;
                let pointer = this._head.next;
                while (pointer) {
                    if (pos === index) {
                        if (pointer.next) {
                            prevNode.next = pointer.next;
                        } else {
                            prevNode.next = null;
                            this._tail = prevNode;
                        }

                        break;
                    }

                    pos++;
                    prevNode = pointer;
                    pointer = pointer.next;
                }
            }

            this._length--;
        }
    }

    hasCycle() {
        if (this._length > 1) {
            let pos = -1;

            let slowIndex = 0;
            let slowPointer = this._head;
            let fastPointer = this._head;

            while (true) {
                if (fastPointer.next && fastPointer.next.next) {
                    if (slowIndex < this._length) {
                        slowIndex++;
                    } else {
                        slowIndex = 0;
                    }

                    fastPointer = fastPointer.next.next;
                    slowPointer = slowPointer.next;

                    if (fastPointer === slowPointer) {
                        pos = slowIndex;
                        break;
                    }
                } else {
                    break;
                }
            }

            return pos;
        } else {
            return -1;
        }
    }
}

/**
 * @return {string}
 */
function PrintList(head) {
    let str = "";
    let pointer = head;
    while (pointer) {
        str += pointer.val;
        pointer = pointer.next;
        if (pointer) {
            str += " -> ";
        }
    }

    return str;
}

function createLinkedList(arr) {
    const head = new ListNode(arr[0]);
    let pointer = head;

    arr.slice(1).forEach(item => {
        const node = new ListNode(item);
        pointer.next = node;
        pointer = node;
    });

    return head;
}

module.exports = MyLinkedList;
