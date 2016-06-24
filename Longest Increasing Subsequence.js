/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	var i, j;
	var temp = [];
	var len = nums.length;
	var max = 1;

	if (len === 0 || len === 1) {
		return len;
	}
	for (i = 0; i < len; i++) {
		temp[i] = 1;
		for (j = 0; j < i; j++) {
			if ((nums[i] > nums[j]) && (temp[j] >= temp[i])) {
				temp[i] = temp[j] + 1;
			}
			max = Math.max(max, temp[i])
		}
	}
	return max
};