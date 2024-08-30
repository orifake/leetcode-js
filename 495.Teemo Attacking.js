/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}let totalTime=duration
 */
const findPoisonedDuration = function (timeSeries, duration) {
  let result = duration
  for (let i = 0; i < timeSeries.length - 1; i++) {
    let diff = timeSeries[i + 1] - timeSeries[i]
    result += diff > duration ? duration : diff
  }

  return result
};

console.log(findPoisonedDuration([1, 4], 2))