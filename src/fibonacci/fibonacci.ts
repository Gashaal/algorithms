const mem: { [key: number]: number } = {};

export function fib(N: number): number {
  if (N < 0) {
    return 0;
  }

  if (N < 2) {
    return N;
  }

  let prev: number;
  if (mem[N - 1]) {
    prev = mem[N - 1];
  } else {
    prev = fib(N - 1);
    mem[N - 1] = prev;
  }

  let prevPrev: number;
  if (mem[N - 2]) {
    prevPrev = mem[N - 2];
  } else {
    prevPrev = fib(N - 2);
    mem[N - 2] = prevPrev;
  }

  return prev + prevPrev;
}

export function memoize(N: number): number {
  if (N < 0) {
    return 0;
  }

  const cache: { [key: number]: number } = {
    0: 0,
    1: 1,
  };

  for (let i = 2; i <= N; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[N];
}
