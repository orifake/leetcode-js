/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
  const a = (s.match(/A/g) ?? []).length
  const l = (s.match(/LLL/g) ?? []).length
  if (a > 1 || l > 0) {
    return false
  }
  return true
};