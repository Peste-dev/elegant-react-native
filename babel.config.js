module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          gate: './app/gate',
          helpers: './app/helpers',
          hooks: './app/view/hooks',
          i18n: './app/i18n',
          routes: './app/routes',
          store: './app/store',
          view: './app/view',
          context: './app/context',
        },
        root: ['./app'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
