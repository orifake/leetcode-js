/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = function (houses, heaters) {
  heaters.sort((a, b) => a - b);
  return Math.max(...houses.map(h => findMinDistance(h, heaters)));
};

const findMinDistance = (house, heaters) => {
  let low = 0;
  let high = heaters.length - 1;
  while (low <= high) {
    const mid = low + parseInt((high - low) / 2);
    if (heaters[mid] <= house && house <= heaters[mid + 1]) {
      return Math.min(house - heaters[mid], heaters[mid + 1] - house);
    } else if (heaters[mid] <= house) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (low === 0) return heaters[0] - house;
  if (low === heaters.length) return house - heaters[heaters.length - 1];
};