function happyNumber(n) {
    const set = new Set();

    while (n !== 1 && !set.has(n)) {
        set.add(n);
        n = Array.from(n.toString()).reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
    }

    return n === 1;
}

module.exports = happyNumber;