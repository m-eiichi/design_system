---
to: "src/components/<%= category %>/<%= subDirectory ? subDirectory + '/' : '' %><%= name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() %>/stories/<%= name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() %>.docs.mdx"
when: withStorybook
unless_exists: true
---
import { Canvas, Meta, Source, Markdown } from "@storybook/addon-docs/blocks";
import * as <%= name %>Stories from './<%= name %>.stories';

<Meta of={<%= name %>Stories} />

# <%= name %>

これは **<%= name %>** コンポーネントのドキュメントです。


## Index

- [概要](#概要)
- [基本的な使用方法](#基本的な使用方法)
- [Props 一覧](#props一覧)
- [実用例](#実用例)
- [ベストプラクティス](#ベストプラクティス)


## 概要

このコンポーネントは、[ここにコンポーネントの簡単な説明を書きます]。


## 基本的な使用方法

<Source of={<%= name %>Stories.Default} />
<Canvas of={<%= name %>Stories.Default} />

## Props一覧
<Markdown>{`
| Prop名 | 型 | デフォルト値 | 説明 |
| :----- | :----- | :----------- | :--- |
| className | string | undefined | コンポーネントに適用する追加のCSSクラス。 |
`}</Markdown>


## 実用例


## ベストプラクティス