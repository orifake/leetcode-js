/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
    var len = str.length,
        isNegative = null,
        result = 0,
        numberStarted = false,
        cur,
        i;

    for (i = 0; i < len; i++) {
        if (str.charAt(i) === ' ') {
            if (!numberStarted) {
                continue;
            } else {
                return getResult(isNegative, result);
            }
        }

        if (isNegative === null) {
            if (str.charAt(i) === '-') {
                isNegative = true;
                numberStarted = true;
                continue;
            } else if (str.charAt(i) === '+') {
                isNegative = false;
                numberStarted = true;
                continue;
            }
        }

        cur = parseInt(str.charAt(i));

        if (!isNaN(cur)) {
            result = result * 10 + cur;

            if (!numberStarted) {
                numberStarted = true;
            }
        } else {
            return getResult(isNegative, result);
        }
    }

    return getResult(isNegative, result);
};

function getResult(isNegative, result) {
    result = isNegative ? result * (-1) : result;

    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }

    return result;
}
