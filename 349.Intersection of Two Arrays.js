/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
	let setNum1 = new Set(nums1);
	let setNum2 = new Set(nums2);

	return Array.from(new Set([...setNum1].filter(num => setNum2.has(num))));
};