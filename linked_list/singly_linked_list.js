const test = require("ava");


class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
};

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
                        slowIndex = 0
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

    toString() {
        let str = '';
        let pointer = this._head;
        while (pointer) {
            str += pointer.val;
            pointer = pointer.next;
            if (pointer) {
                str += ' -> ';
            }
        }

        return str;
    }
}

function PrintList(head) {
    let str = '';
    let pointer = head;
    while (pointer) {
        str += pointer.val;
        pointer = pointer.next;
        if (pointer) {
            str += ' -> ';
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

// test('basic', t => {
//     const list = new MyLinkedList();
//     const methods = ["addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"];
//     const params = [[1],[3],[1,2],[1],[1],[1]];
//     const expected = [undefined,undefined,undefined,2,undefined,3];
//
//     for (let i = 0; i < methods.length; i++) {
//         t.is(list[methods[i]].apply(list, params[i]), expected[i]);
//     }
// });
//
// test('negative index', t => {
//     const list = new MyLinkedList();
//     const methods = ["addAtIndex","get","deleteAtIndex"];
//     const params = [[-1,0],[0],[-1]];
//     const expected = [undefined,0,undefined];
//
//     for (let i = 0; i < methods.length; i++) {
//         t.is(list[methods[i]].apply(list, params[i]), expected[i]);
//     }
// });
//
// test("full", t => {
//     const list = new MyLinkedList();
//     const methods = ["addAtHead","addAtHead","deleteAtIndex","addAtIndex","addAtTail","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","addAtTail","addAtTail","addAtHead","addAtTail","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtTail","addAtTail","get","addAtIndex","addAtHead","get","get","addAtHead","get","addAtIndex","addAtTail","addAtIndex","addAtHead","addAtHead","addAtHead","get","addAtHead","addAtIndex","addAtTail","addAtHead","addAtIndex","get","addAtTail","addAtTail","addAtIndex","addAtIndex","addAtHead","addAtHead","get","addAtTail","addAtIndex","addAtIndex","addAtHead","deleteAtIndex","addAtIndex","addAtHead","deleteAtIndex","addAtTail","deleteAtIndex","addAtTail","addAtHead","addAtTail","addAtTail","addAtHead","addAtTail","addAtIndex","deleteAtIndex","addAtHead","addAtHead","addAtHead","addAtTail","get","addAtIndex","addAtTail","addAtTail","addAtTail","deleteAtIndex","get","addAtHead","get","get","addAtTail","deleteAtIndex","addAtTail","addAtIndex","addAtHead","addAtIndex","addAtTail","get","addAtIndex","addAtIndex","addAtHead","addAtHead","get","get","get","addAtIndex","addAtHead","addAtIndex","addAtHead","addAtTail","addAtIndex","get"];
//     const params = [[38],[45],[2],[1,24],[36],[3,72],[76],[7],[36],[34],[91],[69],[37],[38],[4],[66],[38],[14],[12],[32],[5],[7,5],[74],[7],[13],[11],[8],[10,9],[19],[3,76],[7],[37],[99],[10],[12],[1,20],[29],[42],[21,52],[11],[44],[47],[6,27],[31,85],[59],[57],[4],[99],[13,83],[10,34],[48],[9],[22,64],[69],[33],[5],[18],[87],[42],[1],[35],[31],[67],[36,46],[23],[64],[81],[29],[50],[23],[36,63],[8],[19],[98],[22],[28],[42],[24],[34],[32],[25],[53],[55,76],[38],[23,98],[27],[18],[44,27],[16,8],[70],[15],[9],[27],[59],[40,50],[15],[11,57],[80],[50],[23,37],[12]];
//     const expected = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,45,undefined,undefined,24,91,undefined,24,undefined,undefined,undefined,undefined,undefined,undefined,7,undefined,undefined,undefined,undefined,undefined,34,undefined,undefined,undefined,undefined,undefined,undefined,20,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,7,undefined,undefined,undefined,undefined,undefined,72,undefined,45,69,undefined,undefined,undefined,undefined,undefined,undefined,undefined,34,undefined,undefined,undefined,undefined,69,37,98,undefined,undefined,undefined,undefined,undefined,undefined,57];
//
//     for (let i = 0; i < methods.length; i++) {
//         t.is(list[methods[i]].apply(list, params[i]), expected[i], `${methods[i]} ${params[i]} ${expected[i]}`);
//         console.log('---///---');
//         console.log(list.toString());
//     }
// });

module.exports.ListNode = ListNode;
module.exports.PrintList = PrintList;
module.exports.createLinkedList = createLinkedList;