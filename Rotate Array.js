/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	var len = nums.length,
		i,
		temp;
	k = k % len;

	if (len === 0 || k === 0) {
		return
	}
	for (i = 0; i < k; i++) {
		temp = nums.pop();
		nums.unshift(temp);
	}
};