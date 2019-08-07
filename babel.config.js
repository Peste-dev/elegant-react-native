module.exports = {
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './app/assets',
          gate: './app/gate',
          helpers: './app/helpers',
          hooks: './app/view/hooks',
          i18n: './app/i18n',
          network: './app/network',
          routes: './app/routes',
          store: './app/store',
          view: './app/view',
        },
        root: ['./app'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
