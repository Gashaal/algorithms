const ListNode = require('./listNode');

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

module.exports = createLinkedList;
