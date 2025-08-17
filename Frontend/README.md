# NyayaSathi Frontend

React + Vite + TypeScript + Tailwind CSS starter.

## Scripts

- `npm run dev` - start dev server with HMR
- `npm run build` - type-check and build production assets
- `npm run preview` - preview built assets

## Included Libraries

- React 18 + React DOM
- React Router DOM (routing)
- Axios (HTTP client)
- Zustand (minimal state management)
- clsx (conditional classNames helper)
- Tailwind CSS + Autoprefixer + PostCSS

## Project Structure

```
Frontend/
  index.html
  src/
    main.tsx
    App.tsx
    routes.tsx
    styles.css
  tailwind.config.js
  postcss.config.js
  vite.config.ts
  tsconfig.json
```

## Next Steps

- Add page components under `src/pages/`
- Create shared UI components under `src/components/`
- Configure API base URL (e.g. via `import.meta.env` variables)
- Integrate authentication flow

## Environment Variables

Create a `.env` file (not committed) for custom variables:
```
VITE_API_BASE_URL=http://localhost:3000
```
Use in code:
```ts
const apiBase = import.meta.env.VITE_API_BASE_URL;
```
