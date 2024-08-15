/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const set = new Set()
  let result = new Set()
  for (let i = 0; i <= s.length - 10; i++) {
    let str = s.substring(i, i + 10)
    set.has(str) ? result.add(str) : set.add(str)
  }
  return [...result]
};