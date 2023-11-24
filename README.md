# christianewald.de / cewald.de

This is the repository for www.christianewald.de and www.cewald.de

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
