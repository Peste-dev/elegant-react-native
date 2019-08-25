import {StyleSheet} from 'react-native';

import theme from './theme';

const {
  colors,
  fonts: {fontFamily},
} = theme;

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    backgroundColor: colors.gray,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  defaultLink: {
    color: colors.link,
    fontFamily,
  },
  defaultText: {
    color: colors.font,
    fontFamily,
  },
  font: {
    color: colors.font,
  },
  fontFamily: {
    fontFamily,
  },
  headerIcon: {
    color: colors.link,
    fontSize: 25,
  },
  icon: {
    color: colors.link,
    fontSize: 30,
    lineHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  white: {
    backgroundColor: colors.white,
  },
  whiteFont: {
    color: colors.white,
  },
  whiteLink: {
    color: colors.white,
    fontFamily,
  },
  header: {
    backgroundColor: '#13a77f',
  },
  button: {
    width: 150,
    height: 35,
    marginHorizontal: 5,
  },
});

export default styles;
