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
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
  },
  flatList: {
    flex: 6,
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
});

export default styles;
