import { StyleSheet } from 'react-native'

import theme from './theme'

const { colors } = theme

const styles = StyleSheet.create({
  contentText: {
      fontSize: 25, 
      fontWeight: '900',
      marginBottom: 10, 
      marginTop: 10    
  },
  flatList: {
      marginBottom: 20 
  },
  flatListView: {
      width: '100%'
  },
  renderItemTouchable: {
      backgroundColor: colors.link, 
      borderRadius: 5, 
      marginBottom: 5,
      padding: 5    
  }
})

export default styles
