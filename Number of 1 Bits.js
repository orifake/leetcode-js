/**
 *  Time: O(1)
 *  Space: O(1)
 */


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
    let ans = 0;
    while (n) {
        if (n & 1) ans++;
        n /= 2;
    }
    return ans;
};
