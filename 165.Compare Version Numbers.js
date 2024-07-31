/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
	const verArray1 = version1.split('.')
	const verArray2 = version2.split('.')
	const len1 = verArray1.length
	const len2 = verArray2.length

	let len = Math.max(len1, len2)
	for (let i = 0; i < len; i++) {
		let item1 = i < len1 ? +verArray1[i] : 0
		let item2 = i < len2 ? +verArray2[i] : 0

		if (item1 > item2) {
			return 1
		}

		if (item1 < item2) {
			return -1
		}

		if ((item1 * 1 === item2 * 1) && i === len - 1) {
			return 0
		}
	}

	return 0
};