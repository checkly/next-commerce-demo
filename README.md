![https://app.checklyhq.com/checks/336e62ca-45f1-449e-bc98-f1691d53689d/edit](https://api.checklyhq.com/v1/badges/checks/336e62ca-45f1-449e-bc98-f1691d53689d) ![https://app.checklyhq.com/checks/1bfb3448-1dc3-4fa5-b636-3cae9fb8db02/edit](https://api.checklyhq.com/v1/badges/checks/1bfb3448-1dc3-4fa5-b636-3cae9fb8db02)

# Checkly Next.js Commerce

This a repo used to demo some new features in development over at [Checkly](https://checklyhq.com) using the [Vercel Commerce Template](https://nextjs.org/commerce)

1. A `checkly.config.js` file in the root for shared config and defaults.
2. Some `.check.js` files and in the `__checks__` with a `helpers.js` to DRY up some common boilerplate

You can run each check by simply running:

```shell
$ NODE_ENV=development node __checks__/home.check.js
```

## Caveats

Checkly doesn't support `@playwright/test` yet, so we use the Jest `expect` package and added our own boilerplate for spinning up a Chrome browser with common settings.
[Support for PW test is coming soon](https://github.com/checkly/public-roadmap/issues/167)

