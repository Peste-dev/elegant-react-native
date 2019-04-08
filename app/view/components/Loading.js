import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Spinner from 'react-native-spinkit'
import LottieView from 'lottie-react-native'
import { StyleSheet, View, Text } from 'react-native'
// import { ConnectivityRenderer } from 'react-native-offline'

import i18n from 'i18n'
import style from 'view/style'

const lotties = [
  {
    name: 'loading',
    asset: require('assets/lottie/loading.json')
  },
  {
    name: 'white_loading',
    asset: require('assets/lottie/white_loading.json')
  },
  {
    name: 'loading_animation',
    asset: require('assets/lottie/loading_animation.json')
  },
  {
    name: 'no_internet_connection',
    asset: require('assets/lottie/no_internet_connection.json')
  }
]

class Loading extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      index: 5,
      types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
      size: 100,
      color: '#56b387',
      isVisible: true
    }
  }

  _renderLottie = (name, offline = false) => {
    const { appLang } = i18n
    const { mainStyle } = style
    const { text } = this.props
    const file = lotties.find(l => l.name === name)

    return (
      <View>
        <LottieView
          source={file.asset}
          autoPlay={true}
          loop
          autoSize
        />
        <Text style={[mainStyle.defaultLink, {alignSelf: 'center'}]}>
          { offline ? appLang.no_network : text }
        </Text>
      </View>
    )
  }

  _renderSpinner = () => {
    const { size, color, type, isVisible } = this.props

    return (
      <Spinner 
        size={size} 
        type={type} 
        color={color}
        isVisible={isVisible}
      />
    )
  }
  
  render() {
    const { lottie } = this.props

    return (
      <View style={styles.container}>
        {
          lottie !== ''
            ? this._renderLottie(lottie)
            : this._renderSpinner()
        }
        
        {/* <ConnectivityRenderer> // I'm trying to upgrade package to support react-native-offline
        {
          isConnected => (
            isConnected 
            ? lottie !== ''
              ? this._renderLottie(lottie)
              : this._renderSpinner()
            : this._renderLottie('no_internet_connection', true)
          )
        }
        </ConnectivityRenderer> */}
      </View>
    )    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
})

Loading.propTypes = {  
  text: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,  
  color: PropTypes.string,
  lottie: PropTypes.string,
  isVisible: PropTypes.bool
}

Loading.defaultProps = {
  text: '',  
  size: 100,  
  lottie: '',
  isVisible: true,  
  color: '#56b387',
  type: 'ChasingDots'
}

export default Loading
