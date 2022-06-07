/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    let S = 0, T = 0
    for (let i = 0; i < s.length; i++) {
        S += s.charCodeAt(i)
        T += t.charCodeAt(i)
    }
    T += t[s.length].charCodeAt(0)
    return String.fromCharCode(T - S)
};