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

module.exports = PrintList;
