// 文字列をケバブケースに変換する関数
export const toKebabCase = (str: string): string => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

// 文字列がケバブケースかどうかを判定する関数
export const isKebabCase = (str: string): boolean => {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(str);
};
