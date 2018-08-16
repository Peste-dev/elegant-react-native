import React, { Component } from 'react'
import { connectStore } from 'redux-box'
import { Container, Header, Left, Right, Content, Body, Title, Footer, Button, Icon } from 'native-base'

import { module as authModule } from 'store/auth'

import { fonts } from 'view/theme'

@connectStore({
  auth: authModule //  AppComponent receives 'user' as a prop
})
export default class Home extends Component {
  render() {
    const { auth: { user } } = this.props

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => console.log('test')}>
                <Icon name='paper-plane' />
            </Button>
          </Left>
          <Body>
            <Title>test</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => console.log('test1')}>
              <Icon name='search' />   
            </Button>
          </Right>
        </Header>
        <Content>asghar</Content>
        <Footer>mammad</Footer>
      </Container>
    )
  }
}
