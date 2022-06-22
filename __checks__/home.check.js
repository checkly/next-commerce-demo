const expect = require('expect')
const { goToPage, cleanUp} = require('./helpers')

// this script is synced to Checkly together with its local dependencies
async function run() {
  const { page, browser } = await goToPage('/')

  const title = await page.title()
  expect(title).toEqual("ACME Storefront | Powered by Next.js Commerce")

  await cleanUp(page, browser)
}

run();
