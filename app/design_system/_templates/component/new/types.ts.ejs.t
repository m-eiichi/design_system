---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name %>/types.ts"
unless_exists: true
---
export type <%= name %>Props = {
  className?: string; // 追加のCSSクラス
  // 他のPropsをここに追加
};