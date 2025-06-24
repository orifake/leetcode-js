/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
	const dp = [];
	for (let i = 0; i < nums.length; i++) {
		dp.push(1);
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j] + 1);
			}
		}
	}
	return nums.length ? Math.max.apply(null, dp) : 0;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4