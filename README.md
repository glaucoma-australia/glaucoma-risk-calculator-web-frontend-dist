# Glaucoma risk calculator web-frontend (dist)

Ready to deploy files. Just put the 'dist' directory in your static files directory. See [glaucoma-risk-calc-web-frontend](https://github.com/glaucoma-australia/glaucoma-risk-calc-web-frontend) repo for precompiled development source-code.

## Technical details
Built in TypeScript with Angular 2.4.7, following latest official standards for scaffolding.

## Deploy

Requires a server with HTTPS—for Office 365 / Microsoft Graph auth—and the API: [glaucoma-risk-calc-rest-api](https://github.com/glaucoma-australia/glaucoma-risk-calc-rest-api); be colocated so relative paths work, like `.get('/api')`. With nginx and other servers you can fake this with `proxy_pass`. Alternatively many servers allow you to actually run both side-by-side, e.g.: IIS.
