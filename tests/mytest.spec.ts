
import {test, expect} from '@playwright/test';

test("verify page title", async({page}) => {

     await page.goto("https://www.automationpractice.pl/index.php")
     let title:string = await page.title()

     console.log("Title of page: ", title)
     expect(page).toHaveTitle("My Shop")

})