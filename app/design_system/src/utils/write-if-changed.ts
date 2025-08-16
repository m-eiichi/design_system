import { writeFileSync, existsSync, readFileSync } from "fs";

/**
 * ファイルに書き込む (変更があった場合に再生成する)
 * @param filePath ファイルパス
 * @param content 書き込む内容
 */
export const writeIfChanged = (filePath: string, content: string) => {
  // ファイルが存在する場合
  if (existsSync(filePath)) {
    // ファイルの内容を読み込む
    const current = readFileSync(filePath, "utf-8");
    // ファイルの内容が変更されていない場合
    if (current === content) {
      console.log("✅ File unchanged. Skip write.");
      return;
    }
  }

  // ファイルに書き込む
  writeFileSync(filePath, content);
  console.log(`✅ CSS tokens generated: ${filePath}`);
};
