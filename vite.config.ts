import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Base only for production build on GitHub Pages project site.
  // Dev server uses "/" so preview works at root.
  base: mode === "production" ? "/XOXO.COM/" : "/",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    headers: {
      "X-Frame-Options": "ALLOWALL",
    },
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
}));
