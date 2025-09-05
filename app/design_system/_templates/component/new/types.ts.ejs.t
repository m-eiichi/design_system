---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() %>/types.ts"
when: withTypes
unless_exists: true
---
export type <%= name %>Props = {
  className?: string; // 追加のCSSクラス
  // 他のPropsをここに追加
};