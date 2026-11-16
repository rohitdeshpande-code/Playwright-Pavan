
import {test, expect, Locator} from '@playwright/test'




//Text Box/ Input Box/ Text Input

test('Text Input Actions', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const textBox: Locator = page.locator("#name")

    await expect(textBox).toBeVisible()
    await expect(textBox).toBeEnabled()

    const maxLength: string | null = await textBox.getAttribute("maxlength") //Returns value of maxlength attribute of element

    expect(maxLength).toBe("15")

    await textBox.fill("Rohit Deshpande")

    console.log("Text Content of First Name:  ", await textBox.textContent()) //returns empty value

    console.log("Input value of first name: ", await textBox.inputValue())

    const enteredValue: string = await textBox.inputValue()

    expect(enteredValue).toBe("Rohit Deshpande")

    await page.waitForTimeout(5000)


})

//Radio button

test('Radio button actions', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const maleRadio: Locator = page.locator("#male") //Male radio 
    
    await expect(maleRadio).toBeVisible()
    await expect(maleRadio).toBeEnabled()

    expect(await maleRadio.isChecked()).toBeFalsy()

    await maleRadio.check()

    expect(await maleRadio.isChecked()).toBeTruthy()

    await expect(maleRadio).toBeChecked() //Preferable 

    await page.waitForTimeout(5000)


})

//Check box

test.only('Check box actions', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const sundayCheckbox:Locator = page.getByLabel("Sunday")
    await sundayCheckbox.check()

    await expect(sundayCheckbox).toBeChecked()

    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const checkboxes: Locator[] = days.map(index => page.getByLabel(index))

    expect(checkboxes.length).toBe(7)

    await page.waitForTimeout(5000)


})

