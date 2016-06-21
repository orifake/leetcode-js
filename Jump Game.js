/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	 var len = nums.length,
        cover = 0,
        i;
    
    for(i = 0; i < len; i++) {
        if (cover >= i) {
            cover = Math.max(cover, nums[i] + i);
            if (cover >= len - 1) {
                return true;
            }
        } else {
            return false;
        }
    }
};