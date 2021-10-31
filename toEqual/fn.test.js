//accepted

test("Is it equal", () => {
    expect([1, 2]).toEqual([1, 2]);
})
test("Is it equal", () => {
    expect([]).toEqual([]);
})
test("Is it equal", () => {
    expect({
        a: 1,
        b: 2
    }).toEqual({
        a: 1,
        b: 2
    });
})
test("Is it equal", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
})
test("Is it equal", () => {
    expect({
        a: 1,
        b: {
            c: 1,
            d: 2
        }
    }).toEqual({
        a: 1,
        b: {
            c: 1,
            d: 2
        }
    });
})
test("Is it equal", () => {
    expect([1, 2, [1, 2]]).toEqual([1, 2, [1, 2]]);

})

//not accepted
test("Is it equal", () => {
    expect({ a: 1, b: {c: 1,d: 2}}).toEqual({a: 1,b: {e: 1,d: 2}})

})
test("Is it equal", () => {
    expect([1, 2, [1, 3]]).toEqual([1, 2, [1, 2]]);

})


