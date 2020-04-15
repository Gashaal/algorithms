const test = require("ava");
const moveZeroes = require("./moveZeroes");

test("moveZeroes", t => {
    let nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);

    t.deepEqual(nums, [1, 3, 12, 0, 0]);

    nums = [0, 0, 1];
    moveZeroes(nums);

    t.deepEqual(nums, [1, 0, 0]);
});
