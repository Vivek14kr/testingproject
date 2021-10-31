function summatrix(matrix, column, row) {
  var sum = 0;
  for (var i = 0; i < row; i++){
      for (var j = 0; j < column; j++){
          sum += matrix[i][j]
      }
     
  }
  return sum
}
var p = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
var column = 4;
var row = 3;
console.log(summatrix(p, column, row))


module.exports = {
    summatrix
}