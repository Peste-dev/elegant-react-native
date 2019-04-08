import { StyleSheet } from 'react-native'

import theme from './theme'

const { colors, fonts: { fontFamily } } = theme

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  font: {
    color: colors.font
  },
  fontFamily: {
    fontFamily
  },
  white: {
    backgroundColor: 'white'
  },
  center: {
    textAlign: 'center'
  },
  headerIcon: {
    fontSize: 25,
    color: colors.link
  },
  content: {
    flex: 1,
    backgroundColor: '#eeeeee',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  defaultText: {
    fontFamily,
    color: colors.font
  },
  defaultLink: {
    fontFamily,
    color: colors.link
  },
  whiteLink: {
    fontFamily,
    color: 'white'
  },
  icon: {
    fontSize: 30,
    lineHeight: 50,
    paddingLeft: 10, 
    paddingRight: 10,
    color: colors.link
  }
})

export default styles
