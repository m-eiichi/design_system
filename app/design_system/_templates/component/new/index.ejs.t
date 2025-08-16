---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name %>/index.<%= type %>"
---

import clsx from "clsx";
import { CoreComponent } from "@/components/ui_elements/CoreComponent";
<% if (withStyles) { %>import styles from "./styles.module.css";
<% } %>
<% if (withTypes) { %>import { <%= name %>Props } from './types';
<% } %>

<% if (type === 'tsx' || type === 'jsx') { %>
export const <%= name %> = (<%= withTypes ? '{ className } : ' + name + 'Props' : '' %>) => {
  return (
    <CoreComponent<% if (withStyles) { %> className={clsx(styles.root, className)}<% } %>>
      <%= name %>コンポーネント
    </CoreComponent>
  );
};
<% } else { %>
export const <%= name %> = (<%= withTypes ? 'props' : '' %>) => {
  return null; // または他のロジック
};
<% } %>

export default <%= name %>;