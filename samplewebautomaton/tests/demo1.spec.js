const {test, expect} = require ('@playwright/test')
 
test("First Playwright Testcase", function display(){
    console.log("It is a first playwright testcase!!");
})

test ("second playwright Testcase", function(){
    console.log("It is a second playwright testcase!!")
})

test ("Third playwright Testcase", () => {
    console.log("It is a Third playwright testcase!!")
})
