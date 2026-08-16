import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this project from https://devara46.github.io/portofolio/,
// not the domain root, so the production build needs the subpath as its base
// while the local dev server keeps using "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/portofolio/" : "/",
  plugins: [react()],
}));
