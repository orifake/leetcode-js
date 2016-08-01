/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var result = 0;
    for (let i = nums.length; i--;)
        if (nums[i] !== val) {
            result++;
        } else {
            nums.splice(i, 1);
        }
    return result;
};
