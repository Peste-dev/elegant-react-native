import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal
} from 'react-native'
import { connectStore } from "redux-box"

import { fonts } from 'view/theme'
import { module as authModule } from 'store/auth'

import Input from 'view/components/Input'
import Button from 'view/components/Button'

@connectStore({
  auth: authModule
})
export default class SignIn extends Component {
  state = {
    mobile: '',
    code: ''
  }
  
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { signIn } = this.props.auth
    const { mobile } = this.state

    signIn({mobile})
  }

  confirm() {
    const { signInConfirmation } = this.props.auth
    const { mobile, code } = this.state
    
    signInConfirmation({mobile, password: code})
  }
  
  render() {
    const { isAuthenticating, error, codeSent } = this.props.auth
    
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image
            source={require('assets/shape.png')}
            style={styles.headingImage}
            resizeMode="contain"
          />
        </View>
        <Text style={[styles.greeting]}>
          Welcome back,
        </Text>
        <Text style={[styles.greeting2]}>
          sign in to continue
        </Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Mobile"
            type='mobile'
            onChangeText={this.onChangeText}
            value={this.state.mobile}
          />
        </View>

        <Button
          isLoading={isAuthenticating}
          title='Sign In'
          onPress={this.signIn.bind(this)}
        />      
        <Text style={[styles.errorMessage, error && { color: 'red' }]}>{error.message}</Text>
        {
          codeSent && (
            <Modal>
              <View style={styles.modal}>
                <Input
                  placeholder="Authorization Code"
                  type='code'
                  keyboardType='numeric'
                  onChangeText={this.onChangeText}
                  value={this.state.code}
                  keyboardType='numeric'
                />
                <Button
                  title='Confirm'
                  onPress={this.confirm.bind(this)}
                  isLoading={isAuthenticating}
                />
              </View>
            </Modal>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    flexDirection: 'row'
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent',
    fontFamily: fonts.base
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40
  },
  greeting: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: fonts.light
  },
  greeting2: {
    color: '#666',
    fontSize: 24,
    marginTop: 5,
    fontFamily: fonts.light
  }
})
