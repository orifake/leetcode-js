/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
	if (num === 0) {
		return false;
	} else if (num === 1) {
		return true;
	} else if (num % 4 === 0) {
		return isPowerOfFour(num / 4);
	}

	return false
};

/**
 * @param {number} num
 * @return {boolean}
 * 在Power of Two中，我们有一个解法是通过判断n & (n - 1)是否为0来判断是否为2的幂，因为4的幂肯定也是2的幂，
 * 所以这也可以用到这题来。那4的幂和2的幂有什么区别呢？根据上一个解法，我们知道4的幂的1只可能在奇数位，
 * 而2的幂的1可能在任意位，所以我们只要判断是不是奇数位是1就行了。
 * 因为根据n & (n - 1)我们已经筛出来那些只有1个1的数了，所以和010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101 
 * 也就是0x5555555555555555相与就能知道1是在奇数位还是偶数位了。
 */
var isPowerOfFour = function(num) {
    return (num > 0) && ((num & (num - 1)) === 0) && ((num & 0x5555555555555) == num);
};