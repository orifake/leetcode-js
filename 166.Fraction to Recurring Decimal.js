/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function (numerator, denominator) {
  if (!numerator) return '0'
  let result = ''

  if (Math.sign(numerator) !== Math.sign(denominator)) result += '-'

  const numer = Math.abs(numerator)
  const denom = Math.abs(denominator)

  result += Math.floor(numer / denom)
  let rem = numer % denom
  if (!rem) return result

  result += '.'
  const map = new Map()

  while (rem !== 0) {
    map.set(rem, result.length)

    rem *= 10
    result += Math.floor(rem / denom)
    rem %= denom

    if (map.has(rem)) {
      const idx = map.get(rem)
      return result.slice(0, idx) + `(${result.slice(idx)})`
    }
  }
  return result
};

console.log(fractionToDecimal(4, 333))