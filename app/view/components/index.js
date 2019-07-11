module.exports = {
  get FlatList() {
    return require('react-native').FlatList
  },
  get Item() {
    return require('./Item').default
  },
  get Loading() {
    return require('./Loading').default
  },
  get Text() {
    return require('react-native').Text
  },
  get TouchableOpacity() {
    return require('react-native').TouchableOpacity
  },
  get View() {
    return require('react-native').View
  },
  get Appbar() {
    return require('react-native-paper').Appbar
  },
}
