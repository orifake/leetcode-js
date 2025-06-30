const rotate = function (matrix) {
  let n = matrix.length;
  // 先沿对角线反转二维矩阵
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // swap(matrix[i][j], matrix[j][i]);
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  console.log(matrix);
  // 然后反转二维矩阵的每一行
  for (let row of matrix) {
    reverse(row);
  }

  // 反转一维数组
  function reverse(arr) {
    let i = 0, j = arr.length - 1;
    while (j > i) {
      // swap(arr[i], arr[j]);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  }
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));