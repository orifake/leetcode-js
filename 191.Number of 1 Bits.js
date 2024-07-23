/**
 *  Time: O(1)
 *  Space: O(1)
 */


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let result = 0;
    while (n) {
        if (n & 1) result++;
        n /= 2;
    }
    return result;
};
