import {StyleSheet} from 'react-native';

import theme from './theme';

const {colors} = theme;

const styles = StyleSheet.create({
  contentText: {
    fontSize: 25,
    fontWeight: '900',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  flatList: {
    flex: 6,
  },
  flatListView: {
    alignSelf: 'stretch',
    flex: 2,
    width: '100%',
  },
  logo: {
    borderRadius: 5,
    height: 100,
    width: 100,
  },
  logoView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  renderItemTouchable: {
    alignItems: 'center',
    backgroundColor: colors.link,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 5,
    padding: 5,
  },
  renderItemTouchableImage: {
    borderRadius: 5,
    height: 30,
    marginRight: 10,
    width: 30,
  },
  toggleArea: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  toggleAreaBtn: {
    width: 150,
  },
});

export default styles;
