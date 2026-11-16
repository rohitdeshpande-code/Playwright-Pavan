

import {test, expect, Locator} from '@playwright/test';

test("Verify Playwright locators", async({page}) => {

    await page.goto("https://demo.nopcommerce.com/")

    const logo: Locator = page.getByAltText("nopCommerce demo store")
    await expect(logo).toBeVisible()

    //await expect(page.getByText("Welcome to our store")).toBeVisible() full string/ full text
    //await expect(page.getByText("Welcome to")).toBeVisible() provided substring/ partial text

    await expect(page.getByText(/Welcome \s + To +\s + Our + \s + Store/i)).toBeVisible() //regular exptression

    await page.getByRole("link", {name: "Register"}).click()
    await expect(page.getByRole("heading", {name: "Register"})).toBeVisible()

    await page.getByLabel("First name:").fill("Rohit")
    await page.getByLabel("Last name:").fill("Tester")
    await page.getByLabel("Email:").fill("test@abc.com")

    await page.getByPlaceholder("Search store").fill("Apple MacBook Pro")


})