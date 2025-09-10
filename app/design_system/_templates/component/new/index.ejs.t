---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() %>/index.<%= type %>"
---

import { CoreComponent } from "../core-component";
<% if (withStyles) { %>import styles from "./styles.module.css";
<% } %>
<% if (withTypes) { %>import { <%= name %>Props } from './types';
<% } %>

<% if (type === 'tsx' || type === 'jsx') { %>
export const <%= name %> = (<% if (withTypes) { %>{ className, ...props }: <%= name %>Props<% } else { %>{ className, ...props }<% } %>) => {
  return (
    <CoreComponent<% if (withStyles) { %> className={className}<% } %> {...props}>
      <%= name %>コンポーネント
    </CoreComponent>
  );
};
<% } else { %>
export const <%= name %> = (<% if (withTypes) { %>props<% } else { %>props<% } %>) => {
  return null; // または他のロジック
};
<% } %>
