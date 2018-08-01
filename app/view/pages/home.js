import React, { Component } from 'react'
import { connectStore } from 'redux-box'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native'
import { FormLabel } from 'react-native-elements'

import { module as authModule } from 'store/auth'

import { colors, fonts } from 'view/theme'
const { width } = Dimensions.get('window')

@connectStore({
  auth: authModule //  AppComponent receives 'user' as a prop
})
export default class Home extends Component {
  static navigationOptions = {
    header: null
  }
  state = {
    username: ''
  }
  AnimatedScale = new Animated.Value(1)
  componentDidMount() {
    this.animate()
  }
  navigate() {
    this.props.navigation.navigate('Route1')
  }
  animate() {
    Animated.timing(
      this.AnimatedScale,
      {
        toValue: .8,
        duration: 1250,
        useNativeDriver: true
      }
    ).start(() => {
      Animated.timing(
        this.AnimatedScale,
        {
          toValue: 1,
          duration: 1250,
          useNativeDriver: true
        }
      ).start(() => this.animate())
    })
  }
  render() {
    const { auth: { user } } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text style={styles.welcome}>{ user.name } { user.mobile }</Text>
          <FormLabel style={styles.welcome}>hey wassup bro</FormLabel>
          <Animated.Image
            source={require('assets/boomboxcropped.png')}
            style={{ tintColor: colors.primary, width: width / 2, height: width / 2, transform: [{scale: this.AnimatedScale}]}}
            resizeMode='contain'
          />          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    fontFamily: fonts.light,
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  registration: {
    fontFamily: fonts.base,
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
})
