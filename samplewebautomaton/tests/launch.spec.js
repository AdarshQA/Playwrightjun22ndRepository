const{test,expect} = require ("@playwright/test")

test("Launch browser and navigate URL", async ({page}) => {
    await page.goto("https://sgtestinginstitute.onrender.com/swagger-ui/index.html")
    await page.waitForTimeout(3000)
})