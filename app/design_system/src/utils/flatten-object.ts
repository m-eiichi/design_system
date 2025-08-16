import { toCamelCase, isCamelCase } from "../utils/camel-case";
// 再帰的にオブジェクトをフラット化する関数
// 例: { "primary-color": "#fff", "secondary-color": "#eee" } → { primaryColor: "#fff", secondaryColor: "#eee" }
export const flattenObject = (
  obj: any,
  prefix = "",
): Record<string, string> => {
  const flattened: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const camelKey = isCamelCase(key) ? key : toCamelCase(key);
    const newKey = prefix
      ? `${prefix}${camelKey.charAt(0).toUpperCase()}${camelKey.slice(1)}`
      : camelKey;

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      // 再帰的にネストされたオブジェクトを処理
      Object.assign(flattened, flattenObject(value, newKey));
    } else {
      flattened[newKey] = value as string;
    }
  });

  return flattened;
};
