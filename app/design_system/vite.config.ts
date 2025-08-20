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
  elevationTypeTokenPlugin,
  radiusTypesTokenPlugin,
  gapTypeTokenPlugin,
  spacingTypeTokenPlugin,
  sizeTypesTokenPlugin,
} from "./scripts/types-token-plugin";
import { s } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

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
    elevationTypeTokenPlugin(),
    radiusTypesTokenPlugin(),
    gapTypeTokenPlugin(),
    spacingTypeTokenPlugin(),
    sizeTypesTokenPlugin(),
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
