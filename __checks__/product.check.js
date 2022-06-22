const expect = require('expect')
const { goToPage, cleanUp} = require('./helpers')

// this script is synced to Checkly together with its local dependencies
async function run() {
  const { page, browser } = await goToPage('/product/new-short-sleeve-t-shirt')

  await page.locator('text=Care').click();
  await page.screenshot({ path: 'product_page.jpg' })

  await cleanUp(page, browser)
}

run();
