function isPalindrome(s) {
    return s.toLowerCase().replace(/[^a-z0-9]/g, '') === s.toLowerCase().replace(/[^a-z0-9]/g,
    '').split('').reverse().join('');
}

module.exports = isPalindrome;