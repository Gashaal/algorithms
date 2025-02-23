const mem = {};

function fib(N) {
    if (N < 2) {
        return N;
    }

    let prev;
    if (mem[N - 1]) {
        prev = mem[N - 1];
    } else {
        prev = fib(N - 1);
        mem[N - 1] = prev;
    }

    let prevPrev;
    if (mem[N - 2]) {
        prevPrev = mem[N - 2];
    } else {
        prevPrev = fib(N - 2);
        mem[N - 2] = prevPrev;
    }

    return prev + prevPrev;
}

function memoize(N) {
    const cache = {
        0: 0,
        1: 1
    };

    for (let i = 2; i <= N; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[N];
}

module.exports = { fib, memoize };