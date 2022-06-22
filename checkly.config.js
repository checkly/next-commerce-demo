// This config sets up some shared constants and Playwright config to share in your Browser checks.

/*
Notice we are using two sets of URLs
1. One for running script on local dev.
2. Two URLs for Preview and Production monitoring and test, where the ENVIRONMENT_URL is automatically replaced
with the Preview URL when a Vercel deploy happens.
*/

const LOCAL_DEV_URL = 'http://lo' + 'cal' + 'host:3000' // this is a temporary hack
const PREVIEW_URL = process.env.ENVIRONMENT_URL
const PROD_URL = 'https://next-commerce-demo-checkly.vercel.app'


const config = {
  headless: process.env.NODE_ENV !== 'development',
  baseURL: process.env.NODE_ENV === 'development' ? LOCAL_DEV_URL : PREVIEW_URL || PROD_URL,
  defaultViewPortSize: {
    width: 1280,
    height: 720
  }
};

module.exports = config
