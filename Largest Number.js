/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort(function(a, b) {
    return (b + '' + a) - (a + '' + b);
  });

	if(nums[0] === 0) return '0'
  
  return ans = nums.join('');
};