module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-mixins": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-media-queries": true,
        "custom-properties": false, //カスタムプロパティを 変換せずそのまま残す
      },
    },
  },
};
