module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['module-resolver', {
        root: ['./app'],
        alias: {
          gate: './app/gate',
          i18n: './app/i18n',
          view: './app/view',
          store: './app/store',
          routes: './app/routes',
          assets: './app/assets',
          helpers: './app/helpers'
        }
      }]    
    ],
    env: {
      production: {
        plugins: ['transform-remove-console']
      }
    }
  }