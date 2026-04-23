
# Convert Figma to Website

This repository is a Vite + React TypeScript portfolio site generated from Figma and then adapted into a browsable multi-page app.

Original design:
[Convert Figma to Website](https://www.figma.com/design/b1bwUKg0O8BBwLOrjErGRQ/Convert-Figma-to-Website)

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Codebase structure

- `src/main.tsx`: bootstraps the React app.
- `src/app/App.tsx`: mounts the router.
- `src/app/routes.tsx`: defines homepage and case-study routes.
- `src/app/components/`: app shell components like the homepage, detail layout, locked project page, and shared footer.
- `src/app/config/site.ts`: central site metadata and shared navigation labels.
- `src/app/hooks/useWindowWidth.ts`: shared responsive viewport hook.
- `src/imports/`: Figma-exported page/component files and generated assets.
- `src/assets/`: image assets resolved through the custom `figma:asset/...` Vite plugin.
- `src/styles/`: global font, theme, and Tailwind styles.

## Notes

- The `vite.config.ts` file contains a small resolver that maps `figma:asset/...` imports into local files in `src/assets`.
- Most detailed case-study pages still render from generated Figma export files in `src/imports`, wrapped by app-level layout components for navigation and responsiveness.
  
