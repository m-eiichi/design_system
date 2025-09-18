module.exports = {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["./src/assets/styles/mq.css"],
    },
    "postcss-import": {},
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
    "postcss-mixins": {},
  },
};
