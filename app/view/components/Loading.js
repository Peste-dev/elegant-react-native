import PropTypes from 'prop-types'
import React from 'react'
import Spinner from 'react-native-spinkit'
import LottieView from 'lottie-react-native'
import { StyleSheet, View, Text } from 'react-native'

import i18n from 'i18n'
import style from 'view/style'

const lotties = [
  {
    asset: require('assets/lottie/loading.json'),
    name: 'loading'    
  },
  {
    asset: require('assets/lottie/white_loading.json'),
    name: 'white_loading'
  },
  {    
    asset: require('assets/lottie/loading_animation.json'),
    name: 'loading_animation'
  },
  {    
    asset: require('assets/lottie/no_internet_connection.json'),
    name: 'no_internet_connection'
  },
]

const Loading = ({ lottie, size, color, type, isVisible, text }) => {
  
  const _renderLottie = (name, offline = false) => {
    const { appLang } = i18n
    const { mainStyle } = style

    const file = lotties.find(l => l.name === name)
    return (
      <View>
        <LottieView source={file.asset} autoPlay loop autoSize />
        <Text style={[mainStyle.defaultLink, styles.noNetworkText]}>
          {offline ? appLang.no_network : text}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {lottie !== '' 
        ? _renderLottie(lottie) 
        : <Spinner size={size} type={type} color={color} isVisible={isVisible} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'    
  },
  noNetworkText: {
    alignSelf: 'center'
  }
})

Loading.propTypes = {
  color: PropTypes.string,
  isVisible: PropTypes.bool,
  lottie: PropTypes.string,  
  size: PropTypes.number,
  text: PropTypes.string,
  type: PropTypes.string  
}

Loading.defaultProps = {
  color: '#56b387',
  isVisible: true,
  lottie: '',
  size: 100,
  text: '',
  type: 'ChasingDots'
}

export default Loading
