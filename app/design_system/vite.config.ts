import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import {
  cssTokenPlugin,
  bgColorPlugin,
  textColorPlugin,
  fontPlugin,
} from "./scripts/css-token-plugin";
import {
  baseColorTypesTokenPlugin,
  backgroundColorTypesTokenPlugin,
  textColorTypesTokenPlugin,
  iconColorTypesTokenPlugin,
  buttonColorTypesTokenPlugin,
  chartColorTypesTokenPlugin,
  borderTypeTokenPlugin,
  statusColorTypesTokenPlugin,
  fontSizeTypeTokenPlugin,
  fontWeightTypeTokenPlugin,
  lineHeightTypeTokenPlugin,
  letterSpacingTypeTokenPlugin,
  fontTypeTokenPlugin,
  // themeColorTypesTokenPlugin,
} from "./scripts/types-token-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // CSS
    cssTokenPlugin(),
    bgColorPlugin(),
    textColorPlugin(),
    fontPlugin(),
    //type
    baseColorTypesTokenPlugin(),
    backgroundColorTypesTokenPlugin(),
    textColorTypesTokenPlugin(),
    iconColorTypesTokenPlugin(),
    buttonColorTypesTokenPlugin(),
    chartColorTypesTokenPlugin(),
    statusColorTypesTokenPlugin(),
    fontSizeTypeTokenPlugin(),
    fontWeightTypeTokenPlugin(),
    lineHeightTypeTokenPlugin(),
    letterSpacingTypeTokenPlugin(),
    fontTypeTokenPlugin(),
    borderTypeTokenPlugin(),

    // themeColorTypesTokenPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/*": path.resolve(__dirname, "src/*"),
    },
  },
  base: "./",
});
