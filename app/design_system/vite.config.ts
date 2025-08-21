import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { cssTokenPlugin } from "./scripts/css-token-plugin";
import { typesTokenPlugin } from "./scripts/types-token-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // CSS
    cssTokenPlugin(),
    // Type definitions
    typesTokenPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/*": path.resolve(__dirname, "src/*"),
    },
  },
  base: "./",
});
