/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\W]/g, '');
    s = s.toLowerCase();
    return s === s.split('').reverse('').join('');
};
