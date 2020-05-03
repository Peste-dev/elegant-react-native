module.exports = {
  get Appbar() {
    return require('react-native-paper').Appbar;
  },
  get FlatList() {
    return require('react-native').FlatList;
  },
  get Image() {
    return require('react-native').Image;
  },
  get Loading() {
    return require('./Loading').default;
  },
  get Text() {
    return require('react-native').Text;
  },
  get TouchableOpacity() {
    return require('react-native').TouchableOpacity;
  },
  get View() {
    return require('react-native').View;
  },
  get Button() {
    return require('react-native-paper').Button;
  },
  get TextInput() {
    return require('react-native-paper').TextInput;
  },
  get Alert() {
    return require('react-native').Alert;
  },
  get StyledText() {
    return require('./StyledText').default;
  },
};
