function curry(fn) {
  return function wrapper(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return wrapper.apply(this, args.concat(args2));
      };
    }
  };
}
