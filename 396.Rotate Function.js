/**
 * @param {number[]} nums
 * @return {number}
 */
const maxRotateFunction = function (nums) {
	const n = nums.length
	let totalSum = 0
	let perRoundSum = 0

	for (let i = 0; i < n; i++) {
		totalSum += nums[i]
		perRoundSum += i * nums[i]
	}

	let result = perRoundSum
	for (let i = 1; i < n; i++) {
		const rotatedNum = nums[n - i];
		perRoundSum = perRoundSum - (rotatedNum * (n - 1)) + (totalSum - rotatedNum)
		result = Math.max(result, perRoundSum)
	}

	return result
};