/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	for (let p = removeElement(nums, 0); p < nums.length; p++) {
		nums[p] = 0;
	}
};

const removeElement = function (nums, val) {
	let slow = 0
	let fast = 0
	while (fast < nums.length) {
		if (nums[fast] !== val) {
			nums[slow] = nums[fast]
			slow++
		}
		fast++
	}
	return slow
}