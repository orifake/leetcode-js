/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var duplicate = false,
        len = nums.length,
        index = 1,
        i;

    for (i = 1; i < len; i++) {
        if (duplicate && nums[i] === nums[i - 1]) {
            continue;
        }

        if (nums[i] === nums[i - 1]) {
            duplicate = true;
        } else {
            duplicate = false;
        }

        nums[index] = nums[i];
        index++;
    }

    return index;
};