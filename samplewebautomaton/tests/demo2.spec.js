const {test, expect} = require ("playwright/test")

test("first Assertion on testcase", () => {
    expect(100).toBe(100)
})

test("second Assertion on testcase", () => {
    expect(12.75).toBe(12.75)
})

test("third Assertion on testcase", () => {
    expect(45).toBeGreaterThan(25)
})

test("fourth Assertion on test case", () => {
    expect('SG software Testing Institute').toContain("Testing")
})

test("fifth Assertion on testcase", () => {
    expect('SG Software testing institute').toContain('SG')
})

test("Sixth Assertion on testcase", () => {
    expect('SG Software testing institute' .includes('Software')).tobetruthy()
})

test("Seventh Assertion on testcase", () => {
    expect('SG Test' == 'SG Test').toBeTruthy()
})