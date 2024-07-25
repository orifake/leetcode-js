/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            stack.push(s[i])
        } else {
            if (s[i] === pairs[stack[stack.length - 1]]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    return !stack.length;
};
