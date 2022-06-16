/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  let seq = "1"
  for (let i = 0; i < n - 1; i++) {
    seq = getNext(seq)
  }
  return seq;
};

const getNext = function (seq) {
  let i = 0
  let next_seq = ""
  while (i < seq.length) {
    cnt = 1
    while (i < seq.length - 1 && seq[i] == seq[i + 1]) {
      cnt += 1
      i += 1
    }
    next_seq += String(cnt) + seq[i]
    i += 1
  }
  return next_seq
}

console.log(countAndSay(4))