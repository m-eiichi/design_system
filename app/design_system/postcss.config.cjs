module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-extend-rule": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
        "custom-properties": false,
      },
    },
  },
};
