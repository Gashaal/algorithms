function strOddNumber(n) {
  function getRandomLetter() {
    const a_z = "abcdefghijklmnopqrstuvwxyz";
    return a_z.charAt(Math.floor(Math.random() * a_z.length));
  }


  if (n % 2 === 0) {
    const even = getRandomLetter();
    let odd = getRandomLetter();

    while (odd === even) {
      odd = getRandomLetter();
    }

    return even.repeat(n - 1) + odd;
  } else {
    return getRandomLetter().repeat(n);
  }
}
