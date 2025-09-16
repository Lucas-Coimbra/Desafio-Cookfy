import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/Desafio-Cookfy/",
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
});
