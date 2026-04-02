import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Safe Paws|Animal Rescue/)
    await expect(page.locator('h1, h2').first()).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    const animalsLink = page.getByRole('navigation').getByRole('link', { name: 'Animals' }).first()
    await expect(animalsLink).toBeVisible()
    await animalsLink.click()
    await expect(page).toHaveURL('/animals')
  })
})

test.describe('Animals Page', () => {
  test('displays animals from Drupal', async ({ page }) => {
    await page.goto('/animals')
    await expect(page).toHaveTitle(/Animals/)
    await expect(page.getByText('Bella').first()).toBeVisible()
  })
})

test.describe('Events Page', () => {
  test('displays events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page).toHaveTitle(/Events/)
    await expect(page.getByText('Spring Adoption Day').first()).toBeVisible()
  })
})

test.describe('News Page', () => {
  test('displays news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News/)
    await expect(page.getByText('Record-Breaking', { exact: false }).first()).toBeVisible()
  })
})

test.describe('Volunteer Page', () => {
  test('displays volunteer opportunities from Drupal', async ({ page }) => {
    await page.goto('/volunteer')
    await expect(page).toHaveTitle(/Volunteer/)
    await expect(page.getByText('Dog Walker').first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header is present on all pages', async ({ page }) => {
    for (const path of ['/', '/animals', '/events', '/news', '/volunteer']) {
      await page.goto(path)
      await expect(page.getByText('Safe Paws', { exact: false }).first()).toBeVisible()
    }
  })
})
