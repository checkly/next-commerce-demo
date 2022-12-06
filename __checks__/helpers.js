const { chromium } = require('playwright')
const { expect } = require('expect')
const checklyConfig = require('../checkly.config.js')

async function goToPage(path) {
  const browser = await chromium.launch({ headless: checklyConfig.headless });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.setViewportSize(checklyConfig.defaultViewPortSize);

  const response = await page.goto(checklyConfig.baseURL + path);
  expect(response.status()).toEqual(200)

  return { page, browser }
}

async function cleanUp (page, browser) {
  await page.close();
  await browser.close();
}

module.exports = {
  goToPage,
  cleanUp
}
