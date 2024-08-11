/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = {}
  for (let str of strs) {
    const s = str.split('').sort().join('')
    if (!map[s]) map[s] = []
    map[s].push(str)
  }
  return Object.values(map)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))