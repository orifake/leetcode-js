/**
 * @param {number[]} nums
 * @return {number}
 */
const radixSort = (nums) => {
  let bucket = Array(10).fill().map(subArr => subArr = Array())
  let max = Math.max(...nums) //find max digit

  let digit = String(max).length;
  for (let i = digit; i != -1; i--) {
    nums.forEach(num => {
      let temp = ''
      const size = String(num).length // check if number lenght is less than digit
      if (size <= digit) {
        temp = '0'.repeat(digit - size + 1) + String(num); //if numbers digit count is less than digit to avoid out of index err adding 0 to first
      } else {                                          // like 00041
        temp = String(num)  // if not just parse to string
      }
      bucket[parseInt(temp.charAt(i))].push(num)  // parseInt(temp.charAt(i)) // Checking i'th digit of number
    })                                              // parsing string then checking is more easy than checking on numbers
    nums = [] //reseting nums
    for (let arr of bucket) {
      if (arr.length != 0) nums.push(...arr) //inserting sorted numbers to nums
    }
    bucket = Array(10).fill().map(subArr => subArr = Array(0)) //reseting bucket
  }
  return nums //it doesnt affect nums in parameter so we are returning other one
}

const maximumGap = (nums) => {
  const array = radixSort(nums)
  //here radix sort is completed and array is sorted nums
  //console.log(array) //controls
  let maxDiff = 0
  for (let i = 1; i < array.length; i++) { //find maxDiff
    maxDiff = Math.max(maxDiff, array[i] - array[i - 1])
  }
  //console.log(maxDiff) //controls
  return maxDiff
};

console.log(maximumGap([3, 6, 9, 1]))