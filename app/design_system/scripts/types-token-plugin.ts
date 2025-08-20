// Vite プラグインとして CSS トークンを生成する
// このプラグインは、ビルド時に一度だけ CSS トークンを生成し、
// `src/assets/styles/variable.css` に書き込みます。
// また、`src/tokens/index.ts` の変更を監視し、
// 変更があった場合に再生成します。

import { Plugin } from "vite";
import path from "path";
import { flattenTokensKeyToCamelCase } from "../src/utils/flatten-tokens-key-to-camel-case";
import { baseSizePx, baseSizeRem } from "../src/tokens/size";
import {
  baseColor,
  background,
  text,
  icon,
  button,
  chart,
  status,
  // theme,
} from "../src/tokens/color";
import { space, radius } from "../src/tokens/size";
import {
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  font,
} from "../src/tokens/font";
import { elevation } from "../src/tokens/elevation";
import { border } from "../src/tokens/border";
import { writeIfChanged } from "../src/utils/write-if-changed";

type generateTypesProps = {
  name: string;
  token: Record<string, unknown>;
};
// トークンをキャメルケースでフラット化する
const generateTypes = ({ name, token }: generateTypesProps) => {
  const flatTokens = flattenTokensKeyToCamelCase(token);
  return `
  export type ${name}Type =
  | "${flatTokens.join('" | "')}"

  `;
};

// プラグインを定義
// カラー系の型定義
// base-color-type.ts
export const baseColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/base-color-type.ts",
  );

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "BaseColor",
        token: baseColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "BaseColor",
          token: baseColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// background-color-type.ts
export const backgroundColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/background-color-type.ts",
  );
  const backgroundColor = background;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "BackgroundColor",
        token: backgroundColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "BackgroundColor",
          token: backgroundColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

export const textColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/text-color-type.ts",
  );
  const textColor = text;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "TextColor",
        token: textColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "TextColor",
          token: textColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// icon-color-type.ts
export const iconColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/icon-color-type.ts",
  );
  const iconColor = icon;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "IconColor",
        token: iconColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "IconColor",
          token: iconColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// button-color-type.ts
export const buttonColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/button-color-type.ts",
  );
  const buttonColor = button;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "ButtonColor",
        token: buttonColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "ButtonColor",
          token: buttonColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// chart-color-type.ts
export const chartColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/chart-color-type.ts",
  );
  const chartColor = chart;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "ChartColor",
        token: chartColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "ChartColor",
          token: chartColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// status-color-type.ts
export const statusColorTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/colors.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/status-color-type.ts",
  );
  const statusColor = status;
  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "StatusColor",
        token: statusColor,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "StatusColor",
          token: statusColor,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// フォント系の型定義
// font-type.ts
export const fontTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(__dirname, "../src/types/font-type.ts");
  const fontValue = font;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Font",
        token: fontValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "Font",
          token: fontValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// font-size-type.ts
export const fontSizeTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/font-size-type.ts",
  );
  const fontSizeValue = fontSize;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "FontSize",
        token: fontSizeValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "FontSize",
          token: fontSizeValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// font-weight-type.ts
export const fontWeightTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/font-weight-type.ts",
  );
  const fontWeightValue = fontWeight;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "FontWeight",
        token: fontWeightValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "FontWeight",
          token: fontWeightValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// line-height-type.ts
export const lineHeightTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/line-height-type.ts",
  );
  const lineHeightValue = lineHeight;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "LineHeight",
        token: lineHeightValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "LineHeight",
          token: lineHeightValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// letter-spacing-type.ts
export const letterSpacingTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/font.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/letter-spacing-type.ts",
  );
  const letterSpacingValue = letterSpacing;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "LetterSpacing",
        token: letterSpacingValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "LetterSpacing",
          token: letterSpacingValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// ボーダー系の型定義
// border-type.ts
export const borderTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/border.ts");
  const outputFilePath = path.resolve(__dirname, "../src/types/border-type.ts");
  const borderValue = border;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Border",
        token: borderValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "Border",
          token: borderValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// サイズ系の型定義
// sizeing-type.ts
export const sizeTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/size.ts");
  const outputFilePath = path.resolve(__dirname, "../src/types/size-type.ts");
  const sizeType = { ...baseSizePx, rem: baseSizeRem };

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Size",
        token: sizeType,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },
  };
};

// radius-type.ts
export const radiusTypesTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/size.ts");
  const outputFilePath = path.resolve(__dirname, "../src/types/radius-type.ts");
  const radiusValue = { ...radius, ...baseSizePx, rem: baseSizeRem };

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Radius",
        token: radiusValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },
  };
};

// gap-type.ts
export const gapTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/gap.ts");
  const outputFilePath = path.resolve(__dirname, "../src/types/gap-type.ts");
  const gapValue = { ...space, ...baseSizePx, rem: baseSizeRem };
  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Gap",
        token: gapValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "Gap",
          token: gapValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// エレメント系の型定義
// elevation-type.ts
export const elevationTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/elevation.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/elevation-type.ts",
  );
  const elevationValue = elevation;

  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Elevation",
        token: elevationValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "Elevation",
          token: elevationValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};

// spacing-type.ts
export const spacingTypeTokenPlugin = (): Plugin => {
  const tokenFilePath = path.resolve(__dirname, "../src/tokens/spacing.ts");
  const outputFilePath = path.resolve(
    __dirname,
    "../src/types/spacing-type.ts",
  );
  const spacingValue = { ...space, ...baseSizePx, rem: baseSizeRem };
  return {
    name: "generate-types-tokens",

    buildStart() {
      // ビルド開始時に一度生成
      const types = generateTypes({
        name: "Spacing",
        token: spacingValue,
      });
      writeIfChanged(outputFilePath, types);

      // tokens.ts を監視対象に追加
      this.addWatchFile(tokenFilePath);
    },

    watchChange(id) {
      if (id === tokenFilePath) {
        console.log(`🔄 tokens.ts changed → regenerate CSS tokens`);
        const types = generateTypes({
          name: "Spacing",
          token: spacingValue,
        });
        writeIfChanged(outputFilePath, types);
      }
    },
  };
};
