/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  let bull = 0;
  let cow = 0;
  const map = {};
  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);
    if (s === g) {
      bull++;
    } else {
      if (map[s] < 0) cow++;
      if (map[g] > 0) cow++;
      map[s] = parseInt(map[s] || '0') + 1;
      map[g] = parseInt(map[g] || '0') - 1;
    }
  }
  return `${bull}A${cow}B`;
};


console.log(getHint("11", "10"))