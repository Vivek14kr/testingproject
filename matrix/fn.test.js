const {
    summatrix
} = require("./fn")

var p = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
var column = 4;
var row = 3;

test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p, column, row)).toBe(78);
})

test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p, column, row)).not.toBe(88);
})
var q = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [9, 10, 11, 12]
]
var col = 4;
var ro = 4;

test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(q, col, ro)).toBe(120);
})
test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(q, col, ro)).not.toBe(10);
})
var p1 = [
    [1, 2],
    [5, 6],
    [9, 10],
    [9, 10]
]
var column1 = 2;
var row1 = 4;
test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p1, column1, row1)).toBe(52);
})
test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p1, column1, row1)).not.toBe(43);
})
var p2 = [
    [1, 2],
    [5, 6],
 
    
]
var column2 = 2;
var row2 = 2;
test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p2, column2, row2)).toBe(14);
})
test("finding sum of matrix is equal to desired output or not", () => {
    expect(summatrix(p2, column2, row2)).not.toBe(25);
})

