/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    'use strict'
    let result = 0;
    for (let i = nums.length; i--;) {
        if (i === nums.length - 1) {
            result++
        } else if ((nums[i] === nums[i + 1])) {
            nums.splice(i, 1);
        } else {
            result++
        }
    }
    return result;
};
