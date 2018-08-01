import React, { Component } from 'react'
import { connectStore } from "redux-box"
import { StackActions, NavigationActions } from 'react-navigation'

import Loading from 'view/components/Loading'

import { module as authModule } from 'store/auth'

@connectStore({
  auth: authModule
})
export default class App extends Component {
  async componentDidMount () {
    const { auth } = this.props

    await auth.isAuthenticated()
    
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'home' })],
    });
    this.props.navigation.dispatch(resetAction)
  }

  render () {
    return (
      <Loading />
    )
  }
}
