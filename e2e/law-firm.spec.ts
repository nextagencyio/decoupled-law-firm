import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and shows hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Hartwell.*Crane/)
    await expect(page.locator('text=Trusted Legal Counsel')).toBeVisible()
  })

  test('shows statistics section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Years of Experience')).toBeVisible()
  })

  test('shows practice highlights section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h2', { hasText: 'Practice Areas' })).toBeVisible()
  })

  test('shows CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Free Consultation').first()).toBeVisible()
  })
})

test.describe('Attorneys page', () => {
  test('lists attorneys', async ({ page }) => {
    await page.goto('/attorneys')
    await expect(page).toHaveTitle(/Attorneys/)
    await expect(page.locator('text=James A. Sterling')).toBeVisible()
    await expect(page.locator('text=Sarah L. Chen')).toBeVisible()
  })

  test('attorney detail page loads', async ({ page }) => {
    await page.goto('/attorneys/james-sterling')
    await expect(page.locator('h1', { hasText: 'James A. Sterling' })).toBeVisible()
  })
})

test.describe('Practice Areas page', () => {
  test('lists practice areas', async ({ page }) => {
    await page.goto('/practice-areas')
    await expect(page).toHaveTitle(/Practice Areas/)
    await expect(page.locator('h3', { hasText: 'Corporate Law' })).toBeVisible()
    await expect(page.locator('h3', { hasText: 'Commercial Litigation' })).toBeVisible()
  })

  test('practice area detail page loads', async ({ page }) => {
    await page.goto('/practice-areas/corporate-law')
    await expect(page.locator('h1', { hasText: 'Corporate Law' })).toBeVisible()
    await expect(page.locator('li', { hasText: 'Mergers' })).toBeVisible()
  })
})

test.describe('Case Studies page', () => {
  test('lists case studies', async ({ page }) => {
    await page.goto('/case-studies')
    await expect(page).toHaveTitle(/Case Studies/)
    await expect(page.locator('text=Tech Sector Merger Defense')).toBeVisible()
  })

  test('case study detail page loads', async ({ page }) => {
    await page.goto('/case-studies/tech-sector-merger')
    await expect(page.locator('h1', { hasText: 'Tech Sector Merger Defense' })).toBeVisible()
  })
})

test.describe('News page', () => {
  test('lists news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page).toHaveTitle(/News/)
    await expect(page.locator('text=West Coast Office').first()).toBeVisible()
  })

  test('news detail page loads', async ({ page }) => {
    await page.goto('/news/firm-expansion-announcement')
    await expect(page.locator('text=West Coast Office').first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header links work', async ({ page }) => {
    await page.goto('/')
    await page.click('a[href="/attorneys"]')
    await expect(page).toHaveURL(/\/attorneys/)
    await expect(page.locator('h1', { hasText: 'Our Attorneys' })).toBeVisible()
  })
})
