// Vite プラグインとして CSS トークンを生成する
// このプラグインは、ビルド時に一度だけ CSS トークンを生成し、
// 各トークンファイルの変更を監視し、変更があった場合に再生成します。

import { Plugin } from "vite";
import path from "path";
import { flattenTokensToKebabCase } from "../src/utils/flatten-tokens-to-kebab-case";
import { flattenTokensToSnakeCase } from "../src/utils/flatten-tokens-to-snake-case";
import { tokens } from "../src/tokens/index";
import { space, baseSizePx, baseSizeRem } from "../src/tokens/size";
import { baseColor, background, status, text } from "../src/tokens/color";
import { border } from "../src/tokens/border";
import {
  font,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
} from "../src/tokens/font";
import { elevation } from "../src/tokens/elevation";
import { mq } from "../src/tokens/mq";
import { writeIfChanged } from "../src/utils/write-if-changed";
import { radius } from "../src/tokens/size";

// CSS生成の設定
type CssConfig = {
  name: string;
  generateFunction: () => string;
  outputPath: string;
  watchPath: string;
};

// トークンをケバブケースフラット化し、CSS 変数として出力する
const generateVariableCss = () => {
  const flatTokens = flattenTokensToKebabCase(tokens);
  const customProperty = Object.entries(flatTokens)
    .map(([key, val]) => `  --${key}: ${val};`)
    .join("\n");
  return `:root {\n${customProperty}\n}`;
};

// 背景色のCSSを生成
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
@media ${mq.viewport.mobile}{\n
\n\n${bgColorSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${bgColorTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${bgColorPc}\n
}`;
};

// ボーダーのCSSを生成
const generateBorderCss = () => {
  const flatTokens = flattenTokensToSnakeCase(border);
  const borderCss = Object.entries(flatTokens)
    .map(
      ([key, val]) =>
        `.border_${key} { border: ${val}; }\n.border_top_${key} { border-top: ${val}; }\n.border_right_${key} { border-right: ${val}; }\n.border_bottom_${key} { border-bottom: ${val}; }\n.border_left_${key} { border-left: ${val}; }`,
    )
    .join("\n");
  const borderCssSp = Object.entries(flatTokens)
    .map(
      ([key, val]) =>
        `.border_sp_${key} { border: ${val}; }\n.border_top_sp_${key} { border-top: ${val}; }\n.border_right_sp_${key} { border-right: ${val}; }\n.border_bottom_sp_${key} { border-bottom: ${val}; }\n.border_left_sp_${key} { border-left: ${val}; }`,
    )
    .join("\n");
  const borderCssTb = Object.entries(flatTokens)
    .map(
      ([key, val]) =>
        `.border_tb_${key} { border: ${val}; }\n.border_top_tb_${key} { border-top: ${val}; }\n.border_right_tb_${key} { border-right: ${val}; }\n.border_bottom_tb_${key} { border-bottom: ${val}; }\n.border_left_tb_${key} { border-left: ${val}; }`,
    )
    .join("\n");
  const borderCssPc = Object.entries(flatTokens)
    .map(
      ([key, val]) =>
        `.border_pc_${key} { border: ${val}; }\n.border_top_pc_${key} { border-top: ${val}; }\n.border_right_pc_${key} { border-right: ${val}; }\n.border_bottom_pc_${key} { border-bottom: ${val}; }\n.border_left_pc_${key} { border-left: ${val}; }`,
    )
    .join("\n");

  return `/* border.css */
\n\n${borderCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${borderCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${borderCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${borderCssPc}\n
}`;
};

// 角丸のCSSを生成
const generateRadiusCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...radius,
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const borderRadiusCss = Object.entries(flatTokens)
    .map(([key, val]) => `.border_radius_${key} { border-radius: ${val}; }`)
    .join("\n");
  const borderRadiusCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.border_radius_sp_${key} { border-radius: ${val}; }`)
    .join("\n");
  const borderRadiusCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.border_radius_tb_${key} { border-radius: ${val}; }`)
    .join("\n");
  const borderRadiusCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.border_radius_pc_${key} { border-radius: ${val}; }`)
    .join("\n");

  return `/* radius.css */
\n\n${borderRadiusCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${borderRadiusCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${borderRadiusCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${borderRadiusCssPc}\n
}`;
};

// 文字色のCSSを生成
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
@media ${mq.viewport.mobile}{\n
\n\n${textColorSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${textColorTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${textColorPc}\n
}`;
};

// エレベーションのCSSを生成
const generateElevationCss = () => {
  const flatTokens = flattenTokensToSnakeCase(elevation);
  const elevationCss = Object.entries(flatTokens)
    .map(([key, val]) => `.elevation_${key} { box-shadow: ${val}; }`)
    .join("\n");
  const elevationCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.elevation_sp_${key} { box-shadow: ${val}; }`)
    .join("\n");
  const elevationCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.elevation_sp_${key} { box-shadow: ${val}; }`)
    .join("\n");
  const elevationCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.elevation_sp_${key} { box-shadow: ${val}; }`)
    .join("\n");

  return `/* elevation.css */
\n\n${elevationCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${elevationCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${elevationCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${elevationCssPc}\n
}`;
};

// フォントのCSSを生成
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

  return `/* font.css */
\n\n${fontCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${fontCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${fontCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${fontCssPc}\n
}`;
};

// フォントの太さのCSSを生成
const generateFontWeightCss = () => {
  const flatTokens = flattenTokensToSnakeCase(fontWeight);
  const fontWeightCss = Object.entries(flatTokens)
    .map(([key, val]) => `.font_weight_${key} { font-weight: ${val}; }`)
    .join("\n");
  const fontWeightCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.font_weight_sp_${key} { font-weight: ${val}; }`)
    .join("\n");
  const fontWeightCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.font_weight_tb_${key} { font-weight: ${val}; }`)
    .join("\n");
  const fontWeightCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.font_weight_pc_${key} { font-weight: ${val}; }`)
    .join("\n");

  return `/* font.css */
\n\n${fontWeightCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${fontWeightCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${fontWeightCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${fontWeightCssPc}\n
}`;
};

// フォントの太さのCSSを生成
const generateFontSizeCss = () => {
  const flatTokens = flattenTokensToSnakeCase(fontSize);
  const fontSizeCss = Object.entries(flatTokens)
    .map(([key, val]) => `.font_size_${key} { font-size: ${val}; }`)
    .join("\n");
  const fontSizeCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.font_size_sp_${key} { font-size: ${val}; }`)
    .join("\n");
  const fontSizeCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.font_size_tb_${key} { font-size: ${val}; }`)
    .join("\n");
  const fontSizeCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.font_size_pc_${key} { font-size: ${val}; }`)
    .join("\n");

  return `/* font.css */
\n\n${fontSizeCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${fontSizeCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${fontSizeCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${fontSizeCssPc}\n
}`;
};

// 幅のCSSを生成
const generateWidthCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const widthCss = Object.entries(flatTokens)
    .map(([key, val]) => `.w_${key} { width: ${val}; }`)
    .join("\n");
  const widthCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.w_sp_${key} { width: ${val}; }`)
    .join("\n");
  const widthCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.w_tb_${key} { width: ${val}; }`)
    .join("\n");
  const widthCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.w_pc_${key} { width: ${val}; }`)
    .join("\n");

  return `/* width.css */
\n\n${widthCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${widthCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${widthCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${widthCssPc}\n
}`;
};

// 高さのCSSを生成
const generateHeightCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const heightCss = Object.entries(flatTokens)
    .map(([key, val]) => `.h_${key} { height: ${val}; }`)
    .join("\n");
  const heightCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.h_sp_${key} { height: ${val}; }`)
    .join("\n");
  const heightCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.h_tb_${key} { height: ${val}; }`)
    .join("\n");
  const heightCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.h_pc_${key} { height: ${val}; }`)
    .join("\n");

  return `/* height.css */
\n\n${heightCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${heightCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${heightCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${heightCssPc}\n
}`;
};

// 最小幅のCSSを生成
const generateMinWidthCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const minWidthCss = Object.entries(flatTokens)
    .map(([key, val]) => `.min_w_${key} { min-width: ${val}; }`)
    .join("\n");
  const minWidthCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.min_w_sp_${key} { min-width: ${val}; }`)
    .join("\n");
  const minWidthCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.min_w_tb_${key} { min-width: ${val}; }`)
    .join("\n");
  const minWidthCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.min_w_pc_${key} { min-width: ${val}; }`)
    .join("\n");

  return `/* min-width.css */
\n\n${minWidthCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${minWidthCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${minWidthCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${minWidthCssPc}\n
}`;
};

// 最大幅のCSSを生成
const generateMaxWidthCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const maxWidthCss = Object.entries(flatTokens)
    .map(([key, val]) => `.max_w_${key} { max-width: ${val}; }`)
    .join("\n");
  const maxWidthCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.max_w_sp_${key} { max-width: ${val}; }`)
    .join("\n");
  const maxWidthCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.max_w_tb_${key} { max-width: ${val}; }`)
    .join("\n");
  const maxWidthCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.max_w_pc_${key} { max-width: ${val}; }`)
    .join("\n");

  return `/* max-width.css */
\n\n${maxWidthCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${maxWidthCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${maxWidthCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${maxWidthCssPc}\n
}`;
};

// 最大高さのCSSを生成
const generateMaxHeightCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const maxHeightCss = Object.entries(flatTokens)
    .map(([key, val]) => `.max_h_${key} { max-height: ${val}; }`)
    .join("\n");
  const maxHeightCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.max_h_sp_${key} { max-height: ${val}; }`)
    .join("\n");
  const maxHeightCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.max_h_tb_${key} { max-height: ${val}; }`)
    .join("\n");
  const maxHeightCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.max_h_pc_${key} { max-height: ${val}; }`)
    .join("\n");

  return `/* max-height.css */
\n\n${maxHeightCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${maxHeightCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${maxHeightCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${maxHeightCssPc}\n
}`;
};

// 最小幅のCSSを生成
const generateMinHeightCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const minHeightCss = Object.entries(flatTokens)
    .map(([key, val]) => `.min_h_${key} { min-height: ${val}; }`)
    .join("\n");
  const minHeightCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.min_h_sp_${key} { min-height: ${val}; }`)
    .join("\n");
  const minHeightCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.min_h_tb_${key} { min-height: ${val}; }`)
    .join("\n");
  const minHeightCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.min_h_pc_${key} { min-height: ${val}; }`)
    .join("\n");

  return `/* min-height.css */
\n\n${minHeightCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${minHeightCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${minHeightCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${minHeightCssPc}\n
}`;
};

// ギャップのCSSを生成
const generateGapCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...space,
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const gapCss = Object.entries(flatTokens)
    .map(([key, val]) => `.gap_${key} { gap: ${val}; }`)
    .join("\n");
  const gapCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.gap_sp_${key} { gap: ${val}; }`)
    .join("\n");
  const gapCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.gap_tb_${key} { gap: ${val}; }`)
    .join("\n");
  const gapCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.gap_pc_${key} { gap: ${val}; }`)
    .join("\n");

  return `/* gap.css */
\n\n${gapCss}\n
@media ${mq.viewport.mobile}{\n
\n\n${gapCssSp}\n
}\n
@media ${mq.viewport.tablet}{\n
${gapCssTb}\n
}\n
@media ${mq.viewport.overDesktop} {\n
${gapCssPc}\n
}`;
};

// マージンのCSSを生成
const generateMarginCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...space,
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const marginCss = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.m_${key} { margin: ${val}; } 
.mx_${key} { margin-left: ${val}; margin-right: ${val}; }
.my_${key} { margin-top: ${val}; margin-bottom: ${val}; }
.mt_${key} { margin-top: ${val}; }
.mr_${key} { margin-right: ${val}; }  
.mb_${key} { margin-bottom: ${val}; }
.ml_${key} { margin-left: ${val}; }`,
    )
    .join("\n");
  const marginCssSp = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.m_sp_${key} { margin: ${val}; } 
.mx_sp_${key} { margin-left: ${val}; margin-right: ${val}; }
.my_sp_${key} { margin-top: ${val}; margin-bottom: ${val}; }
.mt_sp_${key} { margin-top: ${val}; }
.mr_sp_${key} { margin-right: ${val}; }  
.mb_sp_${key} { margin-bottom: ${val}; }
.ml_sp_${key} { margin-left: ${val}; }`,
    )
    .join("\n");
  const marginCssTb = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.m_tb_${key} { margin: ${val}; }
.mx_tb_${key} { margin-left: ${val}; margin-right: ${val}; }
.my_tb_${key} { margin-top: ${val}; margin-bottom: ${val}; } 
.mt_tb_${key} { margin-top: ${val}; }
.mr_tb_${key} { margin-right: ${val}; }  
.mb_tb_${key} { margin-bottom: ${val}; }
.ml_tb_${key} { margin-left: ${val}; }`,
    )
    .join("\n");
  const marginCssPc = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.m_pc_${key} { margin: ${val}; }
.mx_pc_${key} { margin-left: ${val}; margin-right: ${val}; }
.my_pc_${key} { margin-top: ${val}; margin-bottom: ${val}; } 
.mt_pc_${key} { margin-top: ${val}; }
.mr_pc_${key} { margin-right: ${val}; }  
.mb_pc_${key} { margin-bottom: ${val}; }
.ml_pc_${key} { margin-left: ${val}; }`,
    )
    .join("\n");

  return `/* margin.css */
  \n\n${marginCss}\n
  @media ${mq.viewport.mobile}{\n
  \n\n${marginCssSp}\n
  }\n
  @media ${mq.viewport.tablet}{\n
  ${marginCssTb}\n
  }\n
  @media ${mq.viewport.overDesktop} {\n
  ${marginCssPc}\n
  }
  `;
};

// パディングのCSSを生成
const generatePaddingCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...space,
    ...baseSizePx,
    rem: baseSizeRem,
  });
  const paddingCss = Object.entries(flatTokens)
    .map(
      ([key, val]) =>
        `.p_${key} { padding: ${val}; } 
.px_${key} { padding-left: ${val}; padding-right: ${val}; }
.py_${key} { padding-top: ${val}; padding-bottom: ${val}; }
.pt_${key} { padding-top: ${val}; }
.pr_${key} { padding-right: ${val}; }  
.pb_${key} { padding-bottom: ${val}; }
.pl_${key} { padding-left: ${val}; }`,
    )
    .join("\n");
  const paddingCssSp = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.p_sp_${key} { padding: ${val}; } 
.px_sp_${key} { padding-left: ${val}; padding-right: ${val}; }
.py_sp_${key} { padding-top: ${val}; padding-bottom: ${val}; }
.pt_sp_${key} { padding-top: ${val}; }
.pr_sp_${key} { padding-right: ${val}; }  
.pb_sp_${key} { padding-bottom: ${val}; }
.pl_sp_${key} { padding-left: ${val}; }`,
    )
    .join("\n");
  const paddingCssTb = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.p_tb_${key} { padding: ${val}; } 
.px_tb_${key} { padding-left: ${val}; padding-right: ${val}; }
.py_tb_${key} { padding-top: ${val}; padding-bottom: ${val}; }
.pt_tb_${key} { padding-top: ${val}; }
.pr_tb_${key} { padding-right: ${val}; }  
.pb_tb_${key} { padding-bottom: ${val}; }
.pl_tb_${key} { padding-left: ${val}; }`,
    )
    .join("\n");
  const paddingCssPc = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.p_pc_${key} { padding: ${val}; } 
.px_pc_${key} { padding-left: ${val}; padding-right: ${val}; }
.py_pc_${key} { padding-top: ${val}; padding-bottom: ${val}; }
.pt_pc_${key} { padding-top: ${val}; }
.pr_pc_${key} { padding-right: ${val}; }  
.pb_pc_${key} { padding-bottom: ${val}; }
.pl_pc_${key} { padding-left: ${val}; }`,
    )
    .join("\n");

  return `/* padding.css */
  \n\n${paddingCss}\n
  @media ${mq.viewport.mobile}{\n
  \n\n${paddingCssSp}\n
  }\n
  @media ${mq.viewport.tablet}{\n
  ${paddingCssTb}\n
  }\n
  @media ${mq.viewport.overDesktop} {\n
  ${paddingCssPc}\n
  }
  `;
};

// 行高のCSSを生成
const generateLineHeightCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...lineHeight,
  });
  const lineHeightCss = Object.entries(flatTokens)
    .map(([key, val]) => `.line_height_${key} { line-height: ${val}; }`)
    .join("\n");
  const lineHeightCssSp = Object.entries(flatTokens)
    .map(([key, val]) => `.line_height_sp_${key} { line-height: ${val}; }`)
    .join("\n");
  const lineHeightCssTb = Object.entries(flatTokens)
    .map(([key, val]) => `.line_height_tb_${key} { line-height: ${val}; }`)
    .join("\n");
  const lineHeightCssPc = Object.entries(flatTokens)
    .map(([key, val]) => `.line_height_pc_${key} { line-height: ${val}; }`)
    .join("\n");

  return `/* line-height.css */
  \n\n${lineHeightCss}\n
  @media ${mq.viewport.mobile}{\n
  \n\n${lineHeightCssSp}\n
  }\n
  @media ${mq.viewport.tablet}{\n
  ${lineHeightCssTb}\n
  }\n
  @media ${mq.viewport.overDesktop} {\n
  ${lineHeightCssPc}\n
  }
  `;
};

// 文字間隔のCSSを生成
const generateLetterSpacingCss = () => {
  const flatTokens = flattenTokensToSnakeCase({
    ...letterSpacing,
  });
  const letterSpacingCss = Object.entries(flatTokens)
    .map(([key, val]) => `.letter_spacing_${key} { letter-spacing: ${val}; }`)
    .join("\n");
  const letterSpacingCssSp = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.letter_spacing_sp_${key} { letter-spacing: ${val}; }`,
    )
    .join("\n");
  const letterSpacingCssTb = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.letter_spacing_tb_${key} { letter-spacing: ${val}; }`,
    )
    .join("\n");
  const letterSpacingCssPc = Object.entries(flatTokens)
    .map(
      ([key, val]) => `.letter_spacing_pc_${key} { letter-spacing: ${val}; }`,
    )
    .join("\n");

  return `/* letter-spacing.css */
  \n\n${letterSpacingCss}\n
  @media ${mq.viewport.mobile}{\n
  \n\n${letterSpacingCssSp}\n
  }\n
  @media ${mq.viewport.tablet}{\n
  ${letterSpacingCssTb}\n
  }\n
  @media ${mq.viewport.overDesktop} {\n
  ${letterSpacingCssPc}\n
  }
  `;
};

// 全てのCSS設定を定義
const cssConfigs: CssConfig[] = [
  {
    name: "variable",
    generateFunction: generateVariableCss,
    outputPath: "../src/assets/styles/variable.css",
    watchPath: "../src/tokens/index.ts",
  },

  // Color
  {
    name: "bg-color",
    generateFunction: generateBgColorCss,
    outputPath: "../src/assets/styles/common/color/bg-color.css",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "text-color",
    generateFunction: generateTextColorCss,
    outputPath: "../src/assets/styles/common/color/text-color.css",
    watchPath: "../src/tokens/colors.ts",
  },

  // Font
  {
    name: "font",
    generateFunction: generateFontCss,
    outputPath: "../src/assets/styles/common/font/font.css",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "fontWeight",
    generateFunction: generateFontWeightCss,
    outputPath: "../src/assets/styles/common/font/font-weight.css",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "fontSize",
    generateFunction: generateFontSizeCss,
    outputPath: "../src/assets/styles/common/font/font-size.css",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "lineHeight",
    generateFunction: generateLineHeightCss,
    outputPath: "../src/assets/styles/common/font/line-height.css",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "letterSpacing",
    generateFunction: generateLetterSpacingCss,
    outputPath: "../src/assets/styles/common/font/letter-spacing.css",
    watchPath: "../src/tokens/font.ts",
  },

  {
    name: "border",
    generateFunction: generateBorderCss,
    outputPath: "../src/assets/styles/common/border.css",
    watchPath: "../src/tokens/border.ts",
  },
  {
    name: "radius",
    generateFunction: generateRadiusCss,
    outputPath: "../src/assets/styles/common/radius.css",
    watchPath: "../src/tokens/size.ts",
  },

  {
    name: "elevation",
    generateFunction: generateElevationCss,
    outputPath: "../src/assets/styles/common/elevation.css",
    watchPath: "../src/tokens/elevation.ts",
  },
  {
    name: "gap",
    generateFunction: generateGapCss,
    outputPath: "../src/assets/styles/common/flex-grid/gap.css",
    watchPath: "../src/tokens/gap.ts",
  },
  {
    name: "margin",
    generateFunction: generateMarginCss,
    outputPath: "../src/assets/styles/common/margin.css",
    watchPath: "../src/tokens/margin.ts",
  },
  {
    name: "padding",
    generateFunction: generatePaddingCss,
    outputPath: "../src/assets/styles/common/padding.css",
    watchPath: "../src/tokens/padding.ts",
  },
  {
    name: "width",
    generateFunction: generateWidthCss,
    outputPath: "../src/assets/styles/common/width/width.css",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "min-width",
    generateFunction: generateMinWidthCss,
    outputPath: "../src/assets/styles/common/width/min-width.css",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "max-width",
    generateFunction: generateMaxWidthCss,
    outputPath: "../src/assets/styles/common/width/max-width.css",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "height",
    generateFunction: generateHeightCss,
    outputPath: "../src/assets/styles/common/height/height.css",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "min-height",
    generateFunction: generateMinHeightCss,
    outputPath: "../src/assets/styles/common/height/min-height.css",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "max-height",
    generateFunction: generateMaxHeightCss,
    outputPath: "../src/assets/styles/common/height/max-height.css",
    watchPath: "../src/tokens/size.ts",
  },
];

// 統合プラグイン
export const cssTokenPlugin = (): Plugin => {
  // 監視対象のファイルパスを重複除去して取得
  const watchPaths = cssConfigs
    .map((config) => config.watchPath)
    .filter((path, index, array) => array.indexOf(path) === index);

  return {
    name: "generate-css-tokens",

    buildStart() {
      // ビルド開始時に全てのCSSファイルを生成
      cssConfigs.forEach((config) => {
        const outputFilePath = path.resolve(__dirname, config.outputPath);
        const css = config.generateFunction();
        writeIfChanged(outputFilePath, css);
      });

      // 監視対象のファイルを追加
      watchPaths.forEach((watchPath) => {
        const tokenFilePath = path.resolve(__dirname, watchPath);
        this.addWatchFile(tokenFilePath);
      });
    },

    watchChange(id) {
      // 変更されたファイルに対応する設定を取得
      const changedConfigs = cssConfigs.filter((config) => {
        const tokenFilePath = path.resolve(__dirname, config.watchPath);
        return id === tokenFilePath;
      });

      // 対応するCSSファイルを再生成
      changedConfigs.forEach((config) => {
        console.log(
          `🔄 ${config.watchPath} changed → regenerate ${config.name}.css`,
        );
        const outputFilePath = path.resolve(__dirname, config.outputPath);
        const css = config.generateFunction();
        writeIfChanged(outputFilePath, css);
      });
    },
  };
};
