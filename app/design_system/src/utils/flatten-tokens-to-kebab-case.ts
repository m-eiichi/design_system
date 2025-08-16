import { toKebabCase, isKebabCase } from "./kebab-case";

// トークンオブジェクトをフラット化し、キーをケバブケースに変換する
export const flattenTokensToKebabCase = (
  obj: Record<string, unknown>,
  prefix = "",
): Record<string, string> => {
  const result: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const kebabKey = isKebabCase(key) ? key : toKebabCase(key);
    let newKey: string;
    if (prefix && /^[0-9]/.test(kebabKey)) {
      newKey = `${prefix}${kebabKey}`;
    } else {
      newKey = prefix ? `${prefix}-${kebabKey}` : kebabKey;
    }

    if (typeof value === "string" || typeof value === "number") {
      result[newKey] = String(value);
    } else if (typeof value === "object" && value !== null) {
      Object.assign(
        result,
        flattenTokensToKebabCase(value as Record<string, unknown>, newKey),
      );
    }
  });

  return result;
};
