import { toSnakeCase, isSnakeCase } from "./snake-case";

// トークンオブジェクトをフラット化し、キーをスネークケースに変換する
export const flattenTokensToSnakeCase = (
  obj: Record<string, unknown>,
  prefix = "",
): Record<string, string> => {
  const result: Record<string, string> = {};

  Object.entries(obj).forEach(([key, value]) => {
    const snakeKey = isSnakeCase(key) ? key : toSnakeCase(key);
    let newKey: string;
    if (prefix && /^[0-9]/.test(snakeKey)) {
      newKey = `${prefix}${snakeKey}`;
    } else {
      newKey = prefix ? `${prefix}_${snakeKey}` : snakeKey;
    }

    if (typeof value === "string" || typeof value === "number") {
      result[newKey] = String(value);
    } else if (typeof value === "object" && value !== null) {
      Object.assign(
        result,
        flattenTokensToSnakeCase(value as Record<string, unknown>, newKey),
      );
    }
  });

  return result;
};
