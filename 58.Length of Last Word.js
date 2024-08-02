/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let trimmedString = s.trim()
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};
