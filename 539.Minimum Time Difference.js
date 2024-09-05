/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
  const minutes = timePoints.map(time => {
    const [hours, minut] = time.split(':').map(Number)
    return hours * 60 + minut
  }).sort((a, b) => a - b)

  let minDiff = Infinity

  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1])
  }

  return minDiff = Math.min(minDiff, 1440 - (minutes.at(-1) - minutes.at(0)))
};

console.log(findMinDifference(["23:59", "00:00"]))