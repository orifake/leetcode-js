/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var hash = {
        I: 1,
        X: 10,
        C: 100,
        M: 1000,
        V: 5,
        L: 50,
        D: 500
    };

    var sum = 0;
    var roman, nextRoman;

    for (var i = 0, len = s.length; i < len; i++) {
        roman = hash[s[i]];
        nextRoman = i + 1 === len ? 0 : hash[s[i + 1]];

        if (nextRoman > roman) {
            sum += nextRoman - roman;
            i++;
        } else
            sum += roman;
    }

    return sum;
};
