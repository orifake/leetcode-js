/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	var mapS = {},
		mapT = {},
		curS, curT, i;
	for (i = 0; i < s.length; i++) {
		curS = s.charAt(i);
		curT = t.charAt(i);
		if (!mapS.hasOwnProperty(curS)) {
			mapS[curS] = curT
		} else if (mapS[curS] !== curT) {
			return false
		}
		if (!mapT.hasOwnProperty(curT)) {
			mapT[curT] = curS
		} else if (mapT[curT] !== curS) {
			return false
		}
	}
	return true
};