
import {test, expect} from '@playwright/test';

test("verify page title", async({page}) => {

     await page.goto("https://www.automationpractice.pl/index.php")
     let URL:string = await page.url()

     console.log("URL of page: ", URL)
     expect(page).toHaveURL(/automationpractice/)

})