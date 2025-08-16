---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name %>/styles.module.css"
unless_exists: true
---
.root {
  /* <%= name %> コンポーネントのスタイル */
}