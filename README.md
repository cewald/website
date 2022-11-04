# christianewald.de [![Netlify Status](https://api.netlify.com/api/v1/badges/1cd6e1c0-1981-47a1-b63e-471bb6814c41/deploy-status)](https://app.netlify.com/sites/christianewald/deploys)

This is the repository for www.christianewald.de

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
