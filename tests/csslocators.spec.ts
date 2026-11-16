

import {test, expect, Locator} from '@playwright/test'


test('CSS locators', async({page}) => {


    await page.goto("https://demowebshop.tricentis.com/")

    //tag#id

    // await expect(page.locator("input#small-searchterms")).toBeVisible()
    // const searcchBox: Locator = page.locator("input#small-searchterms")
    // await searcchBox.fill("T-Shirts")


    //tag.class

    //await page.locator("input.search-box-text").fill("T-Shirts")
    // await page.locator(".search-box-text").fill("T-Shirts")


    //tag[attribute=value]

    //await page.locator("input[name='q']").fill("T-Shirts")
    //await page.locator("[name='q']").fill("T-Shirts")

    //tag.class[attribute=value]

    //await page.locator("input.search-box-text[name='q']").fill('T-Shirts')
    await page.locator(".search-box-text[name='q']").fill('T-Shirts')

    await page.waitForTimeout(5000)


})