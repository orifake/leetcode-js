/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
	const nonZeroCount = removeElement(nums, 0)
	for (let p = nonZeroCount; p < nums.length; p++) {
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

const nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
console.log(nums) // Output: [1, 3, 12, 0, 0]