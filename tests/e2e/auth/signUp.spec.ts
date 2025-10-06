import { test, expect } from '@playwright/test';

test.describe('Sign up workflow', () => {
  test.only('TC-001', async ({ page }) => {
    const genderOption = page.locator('#id_gender1')
    //const genderOption2 = page.locator('#id_gender2')

    const birthDay = 'select#days'
    const birthMonth = 'select#months'
    const birthYear = 'select#years'

    await page.goto('/login')

    await expect(page.getByAltText('Website for automation practice')).toBeVisible()
    await expect(page.getByText('New User Signup!')).toBeVisible()

    await expect(page.getByTestId('signup-name')).toBeEnabled()
    await expect(page.getByTestId('signup-email')).toBeEnabled()

    await page.getByTestId('signup-name').fill('teste QA')
    await page.getByTestId('signup-email').fill('test-qa@email.com')

    await expect(page.getByTestId('signup-button')).toBeEnabled()
    await page.getByTestId('signup-button').click()

    await expect(page.getByText('Enter Account Information')).toBeVisible()

    // await page.locator(genderOption1.MALE).check()
    // await page.getByRole('radio', { name: genders.MALE } ).check()
    await genderOption.check()

    await expect(page.getByTestId('name')).toHaveValue('teste QA')
    await expect(page.getByTestId('email')).toHaveValue('test-qa@email.com')
    await expect(page.getByTestId('email')).toBeDisabled()

    await expect(page.getByTestId('password')).toBeEnabled()
    await page.getByTestId('password').fill('pwd12345')

    await page.selectOption(birthDay, { value: '26' })
    await page.selectOption(birthMonth, { value: '11' })
    await page.selectOption(birthYear, { value: '1998' })

  })
})