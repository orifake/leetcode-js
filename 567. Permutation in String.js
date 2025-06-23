/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let need = new Map();
    let window = new Map();
    for (let c of s1) {
        need.set(c, (need.get(c) || 0) + 1);
    }
    let left = 0, right = 0, valid = 0;
    while (right < s2.length) {
      let c = s2[right];
      right++;
      // 进行窗口内数据的一系列更新
      if (need.has(c)) {
        window.set(c, (window.get(c) || 0) + 1);
        if (window.get(c) === need.get(c)) {
          valid++;
        }
      }
      while (right - left >= s1.length) {
        // 判断是否满足条件
        if (valid === need.size) {
          return true;
        }
        let d = s2[left];
        left++;
        // 进行窗口内数据的一系列更新
        if (need.has(d)) {
          if (window.get(d) === need.get(d)) {
            valid--;
          }
          window.set(d, window.get(d) - 1);
        }
      }
    }
    return false;
};

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false