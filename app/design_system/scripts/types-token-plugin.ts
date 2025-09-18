// Vite プラグインとして TypeScript 型定義を生成する
// このプラグインは、ビルド時に一度だけ型定義を生成し、
// 各トークンファイルの変更を監視し、変更があった場合に再生成します。

import { Plugin } from "vite";
import path from "path";
import { flattenTokensKeyToCamelCase } from "../src/utils/flatten-tokens-key-to-camel-case";
import { baseSizePx, baseSizeRem } from "../src/system/tokens/size";
import {
  baseColor,
  background,
  text,
  icon,
  button,
  chart,
  status,
  // theme,
} from "../src/system/tokens/color";
import { space, radius } from "../src/system/tokens/size";
import { height } from "../src/system/tokens/height";
import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  font,
} from "../src/system/tokens/font";
import { elevation } from "../src/system/tokens/elevation";
import { border } from "../src/system/tokens/border";
import { writeIfChanged } from "../src/utils/write-if-changed";

// 型定義生成の設定
type TokenConfig = {
  name: string;
  token: Record<string, unknown>;
  outputPath: string;
  watchPath: string;
};

// トークンをキャメルケースでフラット化する
const generateTypes = ({
  name,
  token,
}: {
  name: string;
  token: Record<string, unknown>;
}) => {
  const flatTokens = flattenTokensKeyToCamelCase(token);
  return `
export type ${name}Type =
| "${flatTokens.join('" | "')}"

`;
};

// 全ての型定義設定を定義
const tokenConfigs: TokenConfig[] = [
  {
    name: "BaseColor",
    token: baseColor,
    outputPath: "../src/types/tokens/color/base-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "BackgroundColor",
    token: background,
    outputPath: "../src/types/tokens/color/background-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "TextColor",
    token: text,
    outputPath: "../src/types/tokens/color/text-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "IconColor",
    token: icon,
    outputPath: "../src/types/tokens/color/icon-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "ButtonColor",
    token: button,
    outputPath: "../src/types/tokens/color/button-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "ChartColor",
    token: chart,
    outputPath: "../src/types/tokens/color/chart-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "StatusColor",
    token: status,
    outputPath: "../src/types/tokens/color/status-color-type.ts",
    watchPath: "../src/tokens/colors.ts",
  },
  {
    name: "Font",
    token: font,
    outputPath: "../src/types/tokens/font/font-type.ts",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "FontSize",
    token: fontSize,
    outputPath: "../src/types/tokens/font/font-size-type.ts",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "FontWeight",
    token: fontWeight,
    outputPath: "../src/types/tokens/font/font-weight-type.ts",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "LineHeight",
    token: lineHeight,
    outputPath: "../src/types/tokens/font/line-height-type.ts",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "LetterSpacing",
    token: letterSpacing,
    outputPath: "../src/types/tokens/font/letter-spacing-type.ts",
    watchPath: "../src/tokens/font.ts",
  },
  {
    name: "Border",
    token: border,
    outputPath: "../src/types/tokens/border-type.ts",
    watchPath: "../src/tokens/border.ts",
  },
  {
    name: "Size",
    token: { ...baseSizePx, rem: baseSizeRem },
    outputPath: "../src/types/tokens/size-type.ts",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "Height",
    token: { ...height },
    outputPath: "../src/types/tokens/height-type.ts",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "Radius",
    token: { ...radius, ...baseSizePx, rem: baseSizeRem },
    outputPath: "../src/types/tokens/radius-type.ts",
    watchPath: "../src/tokens/size.ts",
  },
  {
    name: "Gap",
    token: { ...space, ...baseSizePx, rem: baseSizeRem },
    outputPath: "../src/types/tokens/gap-type.ts",
    watchPath: "../src/tokens/gap.ts",
  },
  {
    name: "Elevation",
    token: elevation,
    outputPath: "../src/types/tokens/elevation-type.ts",
    watchPath: "../src/tokens/elevation.ts",
  },
  {
    name: "Spacing",
    token: { ...space, ...baseSizePx, rem: baseSizeRem },
    outputPath: "../src/types/tokens/spacing-type.ts",
    watchPath: "../src/tokens/spacing.ts",
  },
];

// 統合プラグイン
export const typesTokenPlugin = (): Plugin => {
  // 監視対象のファイルパスを重複除去して取得
  const watchPaths = tokenConfigs
    .map((config) => config.watchPath)
    .filter((path, index, array) => array.indexOf(path) === index);

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に全ての型定義ファイルを生成
      tokenConfigs.forEach((config) => {
        const outputFilePath = path.resolve(__dirname, config.outputPath);
        const types = generateTypes({
          name: config.name,
          token: config.token,
        });
        writeIfChanged(outputFilePath, types);
      });

      // 監視対象のファイルを追加
      watchPaths.forEach((watchPath) => {
        const tokenFilePath = path.resolve(__dirname, watchPath);
        this.addWatchFile(tokenFilePath);
      });
    },

    watchChange(id) {
      // 変更されたファイルに対応する設定を取得
      const changedConfigs = tokenConfigs.filter((config) => {
        const tokenFilePath = path.resolve(__dirname, config.watchPath);
        return id === tokenFilePath;
      });

      // 対応する型定義ファイルを再生成
      changedConfigs.forEach((config) => {
        console.log(
          `🔄 ${config.watchPath} changed → regenerate ${config.name} types`,
        );
        const outputFilePath = path.resolve(__dirname, config.outputPath);
        const types = generateTypes({
          name: config.name,
          token: config.token,
        });
        writeIfChanged(outputFilePath, types);
      });
    },
  };
};
