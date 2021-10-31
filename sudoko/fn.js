var output = []



function runProgram(arr) {

    
  
    var N = arr.length
     main(arr, N)
     for (let i = 0; i < output.length; i++){
         console.log(output[i])
     }
     output = []
}

function main(board, N) {


    if (solveSudoku(board, N)) {
        print(board, N);
    } else {
        console.log(-1);
    }
}

function solveSudoku(board, n) {
    var row = -1;
    var col = -1;
    var isEmpty = true;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    if (isEmpty) {
        return true;
    }

    for (var num = 1; num <= n; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board, n)) {
                // print(board, n); 
                return true;
            } else {
                // replace it 
                board[row][col] = 0;
            }
        }
    }
    return false;
}

function isSafe(board, row, col, num) {

    for (var d = 0; d < board.length; d++) {

        if (board[row][d] == num) {
            return false;
        }
    }

    for (var r = 0; r < board.length; r++) {

        if (board[r][col] == num) {
            return false;
        }
    }
    var sqrt = Math.sqrt(board.length);
    var boxRowStart = row - row % sqrt;
    var boxColStart = col - col % sqrt;

    for (var r = boxRowStart; r < boxRowStart + sqrt; r++) {
        for (var d = boxColStart; d < boxColStart + sqrt; d++) {
            if (board[r][d] == num) {
                return false;
            }
        }
    }

    return true;
}



function print(board, N) {
    for (var r = 0; r < N; r++) {
        var k = []
        for (var d = 0; d < N; d++) {
            var p = board[r][d];
            k.push(p)

        }



        output.push(k);
    }
}
var element = [
    [0, 4, 0, 0, 0, 0, 1, 7, 9],
    [0, 0, 2, 0, 0, 8, 0, 5, 4],
    [0, 0, 6, 0, 0, 5, 0, 0, 8],
    [0, 8, 0, 0, 7, 0, 9, 1, 0],
    [0, 5, 0, 0, 9, 0, 0, 3, 0],
    [0, 1, 9, 0, 6, 0, 0, 4, 0],
    [3, 0, 0, 4, 0, 0, 7, 0, 0],
    [5, 7, 0, 1, 0, 0, 2, 0, 0],
    [9, 2, 8, 0, 0, 0, 0, 6, 0]
]
 
runProgram(element)
module.exports = {
    runProgram
}
