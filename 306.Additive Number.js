/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = function (num) {
  const backtrack = (start, temp) => {
    if (start === num.length && temp.length >= 3) {
      return true
    }

    for (let i = start; i < num.length; i++) {
      if (num[start] === "0" && i !== start) break

      const n = parseInt(num.slice(start, i + 1))
      if (temp[temp.length - 1] + temp[temp.length - 2] !== n && temp.length >= 2) continue

      temp.push(n)
      if (backtrack(i + 1, temp)) {
        return true
      }
      temp.pop()
    }

    return false
  }

  return backtrack(0, [])
};

console.log(isAdditiveNumber("199100199"))