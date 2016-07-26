/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var size = 2 * numRows - 2,
        length = s.length,
        result = '',
        mid,
        i,
        j;

    if (numRows === 1) {
        return s;
    }

    for (i = 0; i < numRows; i++) {
        for (j = i; j < length; j += size) {
            result += s.charAt(j);

            if (i !== 0 && i !== numRows - 1) {
                mid = j + size - 2 * i;

                if (mid < length) {
                    result += s.charAt(mid);
                }
            }
        }
    }

    return result;
};
