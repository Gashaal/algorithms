type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init
  
  for (let i = 0; i < nums.length; i++) {
    acc = fn.call(null, acc, nums[i])
  }
  
  return acc;
}
