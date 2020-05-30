function longestCommonPrefix(strs) {
  if (Array.isArray(strs) && strs.length) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
      while (!strs[i].startsWith(prefix)) {
        prefix = prefix.slice(0, prefix.length - 1);
        if (!prefix) {
          return "";
        }
      }
    }

    return prefix;
  }

  return "";
}

module.exports = longestCommonPrefix;
