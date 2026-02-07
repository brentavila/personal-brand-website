# React + shadcn + Tailwind + TypeScript setup (for Background Beams component)

This site currently uses **plain HTML, CSS, and JavaScript**. The Background Beams effect is implemented as a **vanilla JS + SVG** version in `js/background-beams.js` so it works without React.

If you want to use the **original React/shadcn component** (e.g. for a separate app or a future migration), follow the steps below.

---

## 1. Create a React project with TypeScript and Tailwind

Using Vite (recommended):

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

Add Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure `tailwind.config.js` with content paths and theme if needed. In `src/index.css` add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 2. Install shadcn/ui

The shadcn CLI expects a project that already has Tailwind and a `components.json` config. From the project root:

```bash
npx shadcn@latest init
```

Follow the prompts (style: default, base color: slate, CSS variables: yes, etc.). This will:

- Create or update `components.json`
- Add a `lib/utils.ts` with the `cn()` helper
- Set up Tailwind for the shadcn theme

**Default paths after init:**

- **Components:** `src/components/ui` (or `components/ui` depending on your choice during init)
- **Styles:** Tailwind + `src/index.css` (or `src/app/globals.css` in Next.js)

### Why `/components/ui` matters

shadcn puts all its primitives in `components/ui` (or `src/components/ui`). The CLI and docs assume this path for:

- Adding new components: `npx shadcn@latest add button`
- Imports like `import { Button } from "@/components/ui/button"`

If your default path is different (e.g. `src/components` only), either:

- Configure `components.json` so `"components": "src/components/ui"`, or  
- Create the `ui` folder and use it for shadcn components so imports and future `shadcn add` commands work as in the docs.

---

## 3. Add the Background Beams component

Create the UI component file:

**Path:** `src/components/ui/background-beams.tsx` (or `components/ui/background-beams.tsx`)

Paste the full `background-beams.tsx` code you were given (the one that uses `"use client"`, `motion` from `framer-motion`, and `cn` from `@/lib/utils`).

Install dependencies:

```bash
npm install framer-motion
```

If you use the **Input** in a demo:

```bash
npx shadcn@latest add input
```

That will create `src/components/ui/input.tsx` and ensure `cn` and Tailwind classes (e.g. `border-input`, `ring-ring`) work.

---

## 4. Ensure path aliases

In `vite.config.ts` (or `tsconfig.json`), ensure `@` points to `src`:

```ts
// vite.config.ts
import path from "path"
export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
})
```

```json
// tsconfig.json
"compilerOptions": {
  "baseUrl": ".",
  "paths": { "@/*": ["./src/*"] }
}
```

So `@/components/ui/background-beams` and `@/lib/utils` resolve correctly.

---

## 5. Use the component in a page

Example (e.g. in `App.tsx` or a demo page):

```tsx
import { BackgroundBeams } from "@/components/ui/background-beams";

function App() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center bg-background">
      <h1 className="relative z-10 text-4xl font-bold">Your content</h1>
      <BackgroundBeams className="absolute inset-0 -z-10" />
    </div>
  );
}
```

For the full **BackgroundBeamsDemo** (with Input and waitlist copy), create a component that imports `BackgroundBeams` and `Input` from `@/components/ui/...` and paste the demo JSX.

---

## Summary

| Item            | Purpose |
|-----------------|--------|
| **React + TypeScript** | Required for the `.tsx` component and type safety. |
| **Tailwind CSS**       | Required for utility classes used by shadcn and the beams. |
| **shadcn init**        | Sets up `lib/utils.ts`, theme, and `components/ui`. |
| **`components/ui`**    | Default location for shadcn components; keeps imports and CLI consistent. |
| **framer-motion**      | Used by Background Beams for gradient animation. |
| **path alias `@`**     | So `@/components/ui` and `@/lib/utils` resolve. |

This site’s **current implementation** does not use React: the same visual effect is provided by `js/background-beams.js` and the `.background-beams` block in the HTML, so no extra setup is needed for the existing pages.
