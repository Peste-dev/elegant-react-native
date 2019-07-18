import { StyleSheet } from 'react-native'

import theme from './theme'

const { colors } = theme

const styles = StyleSheet.create({
  contentText: {
    fontSize: 25, 
    fontWeight: '900',
    marginBottom: 10, 
    marginTop: 10,
    textAlign: 'center'
  },
  flatList: {
    flex: 4
  },
  flatListView: {
    // alignItems: 'center',
    alignSelf: 'stretch',
    // justifyContent: 'space-between',
    flex: 1,
    width: '100%'
  },
  logo: {
    borderRadius: 5,
    height: 100,
    width: 100
  },
  logoView: {
    alignItems: 'center',
    flex: 1, 
    justifyContent: 'center', 
    paddingVertical: 10
  },
  renderItemTouchable: {
    backgroundColor: colors.link, 
    borderRadius: 5, 
    marginBottom: 5,
    padding: 5    
  }
})

export default styles
