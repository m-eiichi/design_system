/**
 * キャメルケースまたはパスカルケースの文字列をスネークケースに変換する関数
 */
export const toSnakeCase = (str: string) => {
  // 文字列の先頭が大文字の場合は、そのまま小文字に変換
  // それ以外の大文字の前に `_` を追加して小文字にする
  return str.replace(/([A-Z])/g, (letter, offset) =>
    offset === 0 ? letter.toLowerCase() : `_${letter.toLowerCase()}`,
  );
};

// 文字列がスネークケースかどうかを判定する関数
export const isSnakeCase = (str: string): boolean => {
  return /^[a-z0-9]+(_[a-z0-9]+)*$/.test(str);
};
