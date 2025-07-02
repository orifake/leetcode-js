/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
  if (height.length === 0) return 0;
  const n = height.length;
  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);
  let result = 0;
  // Fill leftMax array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // Fill rightMax array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  // Calculate trapped water
  for (let i = 0; i < n; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6