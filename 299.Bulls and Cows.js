/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  let bull = 0;
  let cow = 0;
  const lookup = {};
  for (let i = 0; i < secret.length; i++) {
    const s = secret.charAt(i);
    const g = guess.charAt(i);
    if (s === g) {
      bull++;
    } else {
      if (lookup[s] < 0) cow++;
      if (lookup[g] > 0) cow++;
      lookup[s] = parseInt(lookup[s] || '0') + 1;
      lookup[g] = parseInt(lookup[g] || '0') - 1;
    }
  }
  return `${bull}A${cow}B`;
};


console.log(getHint("11", "10"))