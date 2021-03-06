const test = require("ava");
const oddEvenList = require("./oddEvenList");
const PrintList = require("../singleLinkedList/PrintList");
const createLinkedList = require("../singleLinkedList/createLinkedList");


test('odd', t => {
    const list = createLinkedList([2,1,3,5,6,4,7]);
    t.is(PrintList(oddEvenList(list)), '2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4');

    // [1,2,3,4,5,6,7,8]
    const list1 = createLinkedList([1,2,3,4,5,6,7]);
    t.is(PrintList(oddEvenList(list1)), '1 -> 3 -> 5 -> 7 -> 2 -> 4 -> 6');
});

