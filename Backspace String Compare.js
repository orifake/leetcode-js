/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  return walk(s) === walk(t);

  function walk(str) {
    let result = '';
    let backspaces = 0;

    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (str[i] === '#') {
        backspaces += 1;
      } else if (backspaces > 0) {
        backspaces -= 1;
      } else {
        result = str[i] + result;
      }
    }

    return result;
  }
};