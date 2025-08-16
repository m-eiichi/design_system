// 文字列をキャメルケースに変換する関数
export const toCamelCase = (str: string): string => {
  return str
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ""))
    .replace(/^(.)/, (_, char) => char.toLowerCase());
};

// 文字列がキャメルケースかどうかを判定する関数
export const isCamelCase = (str: string): boolean => {
  return /^[a-z][a-zA-Z0-9]*$/.test(str);
};
