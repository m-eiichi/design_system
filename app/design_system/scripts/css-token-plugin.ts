// Vite プラグインとして CSS トークンを生成する
// このプラグインは、ビルド時に一度だけ CSS トークンを生成し、
// `src/assets/styles/variable.css` に書き込みます。
// また、`src/tokens/index.ts` の変更を監視し、
// 変更があった場合に再生成します。

import { Plugin } from "vite";
import path from "path";
import { flattenTokensToKebabCase } from "../src/utils/flatten-tokens-to-kebab-case";
import { flattenTokensToSnakeCase } from "../src/utils/flatten-tokens-to-snake-case";
import { tokens } from "../src/tokens/index";
import { baseColor, background, status, text } from "../src/tokens/color";
import { font } from "../src/tokens/font";
import { width } from "../src/tokens/width";
import { writeIfChanged } from "../src/utils/write-if-changed";

// トークンをケバブケースフラット化し、CSS 変数として出力する
// 例: { color: { primary: { base: "#000" } } } → { --color-primary-base: "#000" }
const generateCss = () => {
  const flatTokens = flattenTokensToKebabCase(tokens);

  const customProperty = Object.entries(flatTokens)
    .map(([key, val]) => `  --${key}: ${val};`)
    .join("\n");

  return `:root {\n${customProperty}\n}`;
};

// variable.cssを生成するViteプラグイン
export const cssTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/index.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/assets/styles/variable.css",
  );

  return {
    name: "generate-css-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const css = generateCss();
      writeIfChanged(outputFilePath, css);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    // tokens.ts が変更された場合に再生成
    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const css = generateCss();
        writeIfChanged(outputFilePath, css);
      }
    },
  };
};

// bg-color.css
// 背景色のトークンオブジェクトをフラット化し、CSS 変数として出力する
const generateBgColorCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseColor,
    ...background,
    ...status,
  });
  const bgColor = Object.entries(flatTokens)

    .map(([key, val]) => `.bg_${key} { background-color: ${val}; }`)
    .join("\n");

  const bgColorSp = Object.entries(flatTokens)

    .map(([key, val]) => `.bg_sp_${key} { background-color: ${val}; }`)
    .join("\n");

  const bgColorTb = Object.entries(flatTokens)

    .map(([key, val]) => `.bg_tb_${key} { background-color: ${val}; }`)
    .join("\n");

  const bgColorPc = Object.entries(flatTokens)

    .map(([key, val]) => `.bg_pc_${key} { background-color: ${val}; }`)
    .join("\n");

  return `/* bg-color.css */
\n\n${bgColor}\n
@media ${width.viewport.mobile}{\n
\n\n${bgColorSp}\n
}\n
@media ${width.viewport.tablet}{\n
${bgColorTb}\n
}\n
@media ${width.viewport.overDesktop} {\n
${bgColorPc}\n
}`;
};

// bg-color.css を生成するViteプラグイン
export const bgColorPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/assets/styles/common/bg-color.css",
  );

  return {
    name: "generate-bg-color-css",

    buildStart() {
      // ビルド開始時に一度生成
      const css = generateBgColorCss();
      writeIfChanged(outputFilePath, css);

      // colors.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 colors.ts changed → regenerate bg-color.css`);
        const css = generateBgColorCss();
        writeIfChanged(outputFilePath, css);
      }
    },
  };
};

// text-color.css
// 文字色のトークンオブジェクトをフラット化し、CSS 変数として出力する
const generateTextColorCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseColor,
    ...text,
    ...status,
  });
  const textColor = Object.entries(flatTokens)

    .map(([key, val]) => `.color_${key} { color: ${val}; }`)
    .join("\n");

  const textColorSp = Object.entries(flatTokens)

    .map(([key, val]) => `.color_sp_${key} { color: ${val}; }`)
    .join("\n");

  const textColorTb = Object.entries(flatTokens)

    .map(([key, val]) => `.color_tb_${key} { color: ${val}; }`)
    .join("\n");

  const textColorPc = Object.entries(flatTokens)

    .map(([key, val]) => `.color_pc_${key} { color: ${val}; }`)
    .join("\n");

  return `/* color.css */
\n\n${textColor}\n
@media ${width.viewport.mobile}{\n
\n\n${textColorSp}\n
}\n
@media ${width.viewport.tablet}{\n
${textColorTb}\n
}\n
@media ${width.viewport.overDesktop} {\n
${textColorPc}\n
}`;
};

// text-color.css を生成するViteプラグイン
export const textColorPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/assets/styles/common/text-color.css",
  );

  return {
    name: "generate-text-color-css",

    buildStart() {
      // ビルド開始時に一度生成
      const css = generateTextColorCss();
      writeIfChanged(outputFilePath, css);

      // colors.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 colors.ts changed → regenerate text-color.css`);
        const css = generateTextColorCss();
        writeIfChanged(outputFilePath, css);
      }
    },
  };
};

// font.css
// フォントのトークンオブジェクトをフラット化し、
// CSS 変数として出力する
const generateFontCss = () => {
  const flatTokens = flattenTokensToSnakeCase({ ...font });

  const fontCss = Object.entries(flatTokens)

    .map(([key, val]) => `.font_${key} { font: ${val}; }`)
    .join("\n");

  const fontCssSp = Object.entries(flatTokens)

    .map(([key, val]) => `.font_sp_${key} { font: ${val}; }`)
    .join("\n");

  const fontCssTb = Object.entries(flatTokens)

    .map(([key, val]) => `.font_tb_${key} { font: ${val}; }`)
    .join("\n");

  const fontCssPc = Object.entries(flatTokens)

    .map(([key, val]) => `.font_pc_${key} { font: ${val}; }`)
    .join("\n");

  return `/* bg-color.css */
\n\n${fontCss}\n
@media ${width.viewport.mobile}{\n
\n\n${fontCssSp}\n
}\n
@media ${width.viewport.tablet}{\n
${fontCssTb}\n
}\n
@media ${width.viewport.overDesktop} {\n
${fontCssPc}\n
}`;
};

// font.css を生成するViteプラグイン
export const fontPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/assets/styles/common/font.css",
  );

  return {
    name: "generate-font-css",

    buildStart() {
      // ビルド開始時に一度生成
      const css = generateFontCss();
      writeIfChanged(outputFilePath, css);

      // font.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 font.ts changed → regenerate font.css`);
        const css = generateFontCss();
        writeIfChanged(outputFilePath, css);
      }
    },
  };
};
