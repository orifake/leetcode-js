/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  // 用于存储结果
  const result = []
  // 用于记录回溯路径
  const track = []

  /**
   * 回溯算法的核心函数，用于遍历子集问题的回溯树
   * @param {number} start - 控制树枝的遍历，避免产生重复子集
   */
  const backtrack = (start) => {
    // 前序遍历位置，每个节点的值都是一个子集
    result.push([...track])

    // 回溯算法标准框架
    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i])
      // 回溯遍历下一层节点
      backtrack(i + 1)
      // 撤销选择
      track.pop()
    }
  }

  backtrack(0)
  return result
}

console.log(subsets([1, 2, 3]))