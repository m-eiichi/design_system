import { toCamelCase, isCamelCase } from "./camel-case";

// トークンオブジェクトをフラット化し、キーをキャメルに変換して配列として返す
// 例: { "primary-color": "#fff","secondary-color":#eee } → ["primaryColor", "secondaryColor"]
export const flattenTokensKeyToCamelCase = (
  obj: Record<string, unknown>,
  prefix = "",
): string[] => {
  const result: string[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    const camelKey = isCamelCase(key) ? key : toCamelCase(key);
    const newKey = prefix
      ? `${prefix}${camelKey.charAt(0).toUpperCase()}${camelKey.slice(1)}`
      : camelKey;

    if ((typeof value === "string" || typeof value === "number") && value) {
      result.push(newKey);
    } else if (typeof value === "object" && value !== null) {
      // 配列の要素として追加
      result.push(
        ...flattenTokensKeyToCamelCase(
          value as Record<string, unknown>,
          newKey,
        ),
      );
    }
  });

  return result;
};
