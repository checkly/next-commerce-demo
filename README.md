[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fcommerce&project-name=commerce&repo-name=commerce&demo-title=Next.js%20Commerce&demo-description=An%20all-in-one%20starter%20kit%20for%20high-performance%20e-commerce%20sites.&demo-url=https%3A%2F%2Fdemo.vercel.store&demo-image=https%3A%2F%2Fbigcommerce-demo-asset-ksvtgfvnd.vercel.app%2Fbigcommerce.png&integration-ids=oac_MuWZiE4jtmQ2ejZQaQ7ncuDT,oac_9HSKtXld74NG0srzdxSiBGty&skippable-integrations=1&root-directory=site&build-command=cd%20..%20%26%26%20yarn%20build)

# Checkly Next.js Commerce

This a repo used to demo some new features in development over at [Checkly](https://checklyhq.com) using the [Vercel Commerce Template](https://nextjs.org/commerce)

1. A `checkly.config.js` file in the root for shared config and defaults.
2. Some `.check.js` files and in the `__checks__` with a `helpers.js` to DRY up some common boilerplate

You can run each check by simply running:

```shell
$ NODE_ENV=development node __checks__/home.check.js
```

## Caveats

Checkly doesn't support `@playwright/test` yet, so we use the Jest `expect` package. [This is coming](https://github.com/checkly/public-roadmap/issues/167)
and added our own boilerplate for spinning up a Chrome browser with common settings.

## Run minimal version locally

```bash
yarn # run this command in root folder of the mono repo
yarn dev
```

