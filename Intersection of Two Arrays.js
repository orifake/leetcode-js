/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
	var i, len = nums2.length;
	var result = [];
	if (nums1.length === 0 || nums2.length === 0) {
		return []
	}

	for (i = 0; i < len; i++) {
		if (nums1.indexOf(nums2[i]) > -1 && result.indexOf(nums2[i]) === -1) {
			result.push(nums2[i])
		}
	}
	return result
};