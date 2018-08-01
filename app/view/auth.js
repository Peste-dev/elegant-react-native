import React from 'react'
import { connectStore } from 'redux-box'

import { module as authModule } from 'store/auth'

import AuthView from 'view/auth'
import Navigator from './Navigator'

@connectStore({
  auth: authModule
})
export default class App extends React.Component {
  render () {
    const { isAuth } = this.props.auth

    if(isAuth) {
      return <Navigator />
    } else {
      return <AuthView />
    }
  }
}
