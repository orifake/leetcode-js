/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = function (s, k) {
  const result = []
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '-') continue
    if ((result.length) % (k + 1) == k) {
      result.push('-')
    }
    result.push(s[i].toUpperCase())
  }
  return result.reverse().join('')
};

console.log(licenseKeyFormatting("2-5g-3-J", 2))
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4))