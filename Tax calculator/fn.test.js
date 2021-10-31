const {taxcalculator} = require("./fn")

test("finding tax and final income on given amount, result should be Tax: 24000 Income: 441200", () => {
    expect(taxcalculator(620000)).toBe("Tax: 24000 Income: 441200");
})
test("finding tax and final income on given amount, result should be Tax: 0 Income: 200000", () => {
    expect(taxcalculator(200000)).toBe("Tax: 0 Income: 200000");
})
test("finding tax and final income on given amount, result should be Tax: 60000 Income: 858000", () => {
    expect(taxcalculator(1200000)).toBe("Tax: 60000 Income: 858000");
})
test("finding tax and final income on given amount, result should be Tax: 1000 Income: 130500", () => {
    expect(taxcalculator(260000)).toBe("Tax: 1000 Income: 130500");
})
test("finding tax and final income on given amount, result should be Tax: 0 Income: 80000", () => {
    expect(taxcalculator(80000)).toBe("Tax: 0 Income: 80000");
})
test("finding tax and final income on given amount, result should be Tax: 33000 Income: 786900", () => {
    expect(taxcalculator(1110000)).toBe("Tax: 33000 Income: 786900");
})

test("finding tax and final income on given amount, result should be Tax: 57400 Income: 568120", () => {
    expect(taxcalculator(787000)).toBe("Tax: 57400 Income: 568120");
})

test("finding tax and final income on given amount, result should be Tax: 1266000 Income: 4033800", () => {
    expect(taxcalculator(5220000)).toBe("Tax: 1266000 Income: 4033800");
})
