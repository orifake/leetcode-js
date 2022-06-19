/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
	const map = {};
	for (let i = 0; i < magazine.length; i++) {
		const word = magazine[i];
		if (map[word]) {
			map[word] += 1
		} else {
			map[word] = 1
		}
	}
	for (let j = 0; j < ransomNote.length; j++) {
		const word = ransomNote[j];
		if (!map[word] || map[word] < 1) {
			return false
		} else {
			map[word] -= 1
		}
	}
	return true;
};

console.log(canConstruct("aa", "aab"))