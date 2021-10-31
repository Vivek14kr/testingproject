
const { msToTime } = require("./fn")

test("finding time of 3000 ms, result should be 3 second", ()=>{
    expect(msToTime(3000)).toBe("3 seconds");
})
test("finding time of 60000 ms, result should be 1 minute", () => {
    expect(msToTime(60000)).toBe("1 minute");
})
test("finding time of 180000 ms, result should be 3 minutes", () => {
    expect(msToTime(180000)).toBe("3 minutes");
})
test("finding time of 200000 ms, result should be 3 min 20 sec", () => {
    expect(msToTime(200000)).toBe("3 minutes 20 seconds");
})
test("finding time of 600000 ms, result should be 1 hour", () => {
    expect(msToTime(3600000)).toBe("1 hour");
})

