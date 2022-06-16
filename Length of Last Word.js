/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    return s ? s.trim().split(' ').pop().length : 0;
};
