# christianewald.de / cewald.de

This is the repository for www.christianewald.de and www.cewald.de
[![Netlify Status](https://api.netlify.com/api/v1/badges/a89881d0-44a2-402a-a08c-b187ced74559/deploy-status)](https://app.netlify.com/sites/cewald/deploys)

## Setup

Make sure to install the dependencies

```bash
npm i
```

## Development

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application with SSR using nitro:

```bash
npm run build
```

Build the application as SPR – you can server it for testing using `npm run preview` or `serve -s ./.output/public`:

```bash
npm run generate
```
