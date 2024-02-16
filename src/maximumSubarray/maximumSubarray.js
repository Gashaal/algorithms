// https://en.wikipedia.org/wiki/Maximum_subarray_problem

function maximumSubarray(nums) {
    let best = Number.NEGATIVE_INFINITY;
    let curr = 0;

    nums.forEach(n => {
        curr = Math.max(n, curr + n);
        best = Math.max(best, curr);
    });

    return best;
}

module.exports = maximumSubarray;