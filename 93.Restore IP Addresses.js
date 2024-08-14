/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const result = []
  const backtrack = (index, temp) => {
    if (index === s.length && temp.length == 4) {
      result.push(temp.join('.'))
      return
    }
    if (index === s.length || temp.length === 4) {
      return
    }
    let num = ''
    for (let i = index; i < s.length && num + s[i] <= 255; i++) {
      if (s[index] === '0' && i !== index) break
      num += s[i]
      temp.push(num)
      backtrack(i + 1, temp)
      temp.pop()
    }
  }
  backtrack(0, [])
  return result
};

console.log(restoreIpAddresses("101023"))