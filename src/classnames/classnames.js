function classNames(...args) {
  if (!args) {
    return '';
  }

  const result = args
    .map((a) => {
      if (!a) {
        return;
      }

      if (typeof a === 'string') {
        return a;
      }

      if (typeof a === 'number') {
        return String(a);
      }

      if (typeof a === 'object') {
        if (Array.isArray(a)) {
          return classNames(...a);
        } else {
          const arr = [];

          for (const [key, value] of Object.entries(a)) {
            if (value) {
              arr.push(key);
            }
          }

          return arr.length ? arr.join(' ') : undefined;
        }
      }
    })
    .filter(Boolean);

  return result.length ? result.join(' ') : '';
}

module.exports = classNames;
