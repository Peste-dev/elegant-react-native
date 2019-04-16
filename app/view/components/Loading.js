import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Spinner from 'react-native-spinkit'
import LottieView from 'lottie-react-native'
import { StyleSheet, View, Text } from 'react-native'

import i18n from 'i18n'
import style from '../style'

const lotties = [
  {
    name: 'loading',
    asset: require('assets/lottie/loading.json'),
  },
  {
    name: 'white_loading',
    asset: require('assets/lottie/white_loading.json'),
  },
  {
    name: 'loading_animation',
    asset: require('assets/lottie/loading_animation.json'),
  },
  {
    name: 'no_internet_connection',
    asset: require('assets/lottie/no_internet_connection.json'),
  },
]

function Loading(props) {
  const initialState = {
    index: 5,
    types: [
      'CircleFlip',
      'Bounce',
      'Wave',
      'WanderingCubes',
      'Pulse',
      'ChasingDots',
      'ThreeBounce',
      'Circle',
      '9CubeGrid',
      'WordPress',
      'FadingCircle',
      'FadingCircleAlt',
      'Arc',
      'ArcAlt',
    ],
    size: 100,
    color: '#56b387',
    isVisible: true,
  }

  const [state, setState] = useState(initialState)

  const { lottie } = props

  function _renderLottie(name, offline = false) {
    const { appLang } = i18n
    const { mainStyle } = style
    const { text } = props

    const file = lotties.find(l => l.name === name)
    return (
      <View>
        <LottieView source={file.asset} autoPlay={true} loop autoSize />
        <Text style={[mainStyle.defaultLink, { alignSelf: 'center' }]}>
          {offline ? appLang.no_network : text}
        </Text>
      </View>
    )
  }

  function _renderSpinner() {
    const { size, color, type, isVisible } = props

    return <Spinner size={size} type={type} color={color} isVisible={isVisible} />
  }

  return (
    <View style={styles.container}>{lottie !== '' ? _renderLottie(lottie) : _renderSpinner()}</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})

Loading.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
  color: PropTypes.string,
  lottie: PropTypes.string,
  isVisible: PropTypes.bool,
}

Loading.defaultProps = {
  text: '',
  size: 100,
  lottie: '',
  isVisible: true,
  color: '#56b387',
  type: 'ChasingDots',
}

export default Loading
