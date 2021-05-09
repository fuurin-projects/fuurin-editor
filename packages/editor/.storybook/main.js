const path = require('path');

module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, {configType}) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // 既存の設定をsrc以下で適応しないように除外する
    config.module.rules = config.module.rules.map(f => {
      // Needed to add this to ignore our ../src/ for the default rule, instead of purging it.
      if (f.test.toString() === '/\\.css$/') {
        f.exclude = path.resolve(__dirname, '../src/');
      }

      return f;
    });

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        'style-loader', 'css-loader?modules&url=false'
      ],
      include: path.resolve(__dirname, '../'),
    });

    //SVGの設定
    const assetRule = config.module.rules.find(({test}) => test.test('.svg'));
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };
    config.module.rules.unshift({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack', assetLoader],
    });

    // Return the altered config
    return config;
  },
};