import { isEmpty } from 'lodash'
import React, { Component } from 'react'
import { connectStore } from 'redux-box'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Right, Body, Title, Button, Icon } from 'native-base'

import i18n from 'i18n'
import gate from 'gate'
import style from 'view/style'
import Loading from 'view/components/Loading'

import { module as authModule } from 'store/auth'

@connectStore({
  auth: authModule //  AppComponent receives 'user' as a prop
})
export default class Home extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos: '',
      loading: true
    }
  }

  componentDidMount () {
    gate.home()
      .then(todos => {
        this.setState({ todos, loading: false })
      })
      .catch(error => {
        // Todo
      })  
  }

  someAction = (text) => {
    console.log(text)
  }

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{ padding: 5, backgroundColor: '#0294A5', borderRadius: 5, marginBottom: 5 }}>
        <Text style={{color: 'white'}}>
          { `${item.id} - ${item.title}` }
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { appStyle } = style
    const { appLang, homeLang } = i18n
    const { auth: { user } } = this.props

    const { 
      todos,
      loading
    } = this.state

    return (
      loading ? <Loading /> :
        <Container style={appStyle.container}>
          <Header>
            <Left>
              <Button transparent onPress={() => this.someAction('some action!')}>
                  <Icon name='paper-plane' style={appStyle.headerIcon} />
              </Button>
            </Left>
            <Body>
              <Title>{ homeLang.title }</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.someAction('search!')}>
                <Icon name='search' style={appStyle.headerIcon} />   
              </Button>
            </Right>
          </Header>

          <View style={appStyle.content}>
            <Text style={[appStyle.defaultText, { marginTop: 10, marginBottom: 10, fontSize: 25, fontWeight: '900' }]}>
              { !isEmpty(user) ? user.name : appLang.name }
            </Text>
            <View style={{ width: '100%' }}>
              <FlatList 
                data={todos}
                style={{ marginBottom: 20 }}
                renderItem={this._renderItem}
                keyExtractor={(item, index) => item.id.toString()}
              />      
            </View>
          </View>
        </Container>
    )
  }
}
