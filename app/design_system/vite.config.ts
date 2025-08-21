import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {
  cssTokenPlugin,
  bgColorPlugin,
  textColorPlugin,
  fontPlugin,
  elevationPlugin,
  borderPlugin,
  radiusPlugin,
  gapPlugin,
  marginPlugin,
  paddingPlugin,
  widthPlugin,
} from "./scripts/css-token-plugin";
import { typesTokenPlugin } from "./scripts/types-token-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // CSS
    cssTokenPlugin(),
    bgColorPlugin(),
    textColorPlugin(),
    fontPlugin(),
    elevationPlugin(),
    borderPlugin(),
    radiusPlugin(),
    gapPlugin(),
    marginPlugin(),
    paddingPlugin(),
    widthPlugin(),
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
