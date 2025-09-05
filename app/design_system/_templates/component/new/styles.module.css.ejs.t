---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() %>/styles.module.css"
when: withStyles
unless_exists: true
---
.root {
  /* <%= name %> コンポーネントのスタイル */
}