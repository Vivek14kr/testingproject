const {
    password
} = require("./fn")

test("finding Is password valid or not", () => {
    expect(password("Vivek@13kr")).toBe("Valid Password");
})
test("finding Is password valid or not", () => {
    expect(password("vicky@15kr")).toBe("Invalid Password. Uppercase missing");
})
test("finding Is password valid or not", () => {
    expect(password("V13kr")).toBe("Small password");
})
test("finding Is password valid or not", () => {
    expect(password("VIVEK@13")).toBe("Invalid Password. Lowercase missing");
})
test("finding Is password valid or not", () => {
    expect(password("Sonfokfeof>13kr")).toBe("Valid Password");
})
test("finding Is password valid or not", () => {
    expect(password("Vivek13kr")).toBe("Invalid Password. Symbol missing");
})
test("finding Is password valid or not", () => {
    expect(password("Vivek@kr")).toBe("Invalid Password. Number missing");
})
test("finding Is password valid or not", () => {
    expect(password("@3kr")).toBe("Small password");
})
test("finding Is password valid or not", () => {
    expect(password("Vidsofdo,3kr")).toBe("Valid Password");
})
test("finding Is password valid or not", () => {
    expect(password("Viidhds!oidf1kr")).toBe("Valid Password");
})
