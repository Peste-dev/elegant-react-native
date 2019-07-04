module.exports =  {
  get Body() {
    return require('native-base').Body;
  },
  get Button() {
    return require('native-base').Button;
  },
  get Container() {
    return require('native-base').Container;
  },
  get FlatList() {
    return require('react-native').FlatList;
  },
  get Header() {
    return require('native-base').Header;
  },
  get Icon() {
    return require('native-base').Icon;
  },
  get Item() {
    return require('./Item').default;
  },
  get Left() {
    return require('native-base').Left;
  },
  get Loading() {
    return require('./Loading').default;
  },
  get Right() {
    return require('native-base').Right;
  },
  get Text() {
    return require('react-native').Text;
  },
  get Title() {
    return require('native-base').Title;
  },
  get TouchableOpacity() {
    return require('react-native').TouchableOpacity;
  },
  get View() {
    return require('react-native').View;
  },
};
