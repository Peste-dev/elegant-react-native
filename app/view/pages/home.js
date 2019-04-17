import { isEmpty } from 'lodash'
import React, { useEffect, useState, useContext } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Left, Right, Body, Title, Button, Icon } from 'native-base'

import i18n from 'i18n'
import gate from 'gate'
import style from 'view/style'
import Loading from 'hooks/Loading'
import { useAuthState } from 'context/auth/authContext'

function Home() {
  const { appStyle } = style
  const { appLang, homeLang } = i18n
  const { user } = useAuthState()

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    gate
      .home()
      .then(todos => {
        setTodos(todos)
        setLoading(false)
      })
      .catch(error => {
        // Todo
      })
  }, [])

  function someAction(text) {
    console.log(text)
  }

  function _renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{ padding: 5, backgroundColor: '#0294A5', borderRadius: 5, marginBottom: 5 }}
      >
        <Text style={{ color: 'white' }}>{`${item.id} - ${item.title}`}</Text>
      </TouchableOpacity>
    )
  }

  return loading ? (
    <Loading />
  ) : (
    <Container style={appStyle.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => someAction('some action!')}>
            <Icon name="paper-plane" style={appStyle.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Title>{homeLang.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => someAction('search!')}>
            <Icon name="search" style={appStyle.headerIcon} />
          </Button>
        </Right>
      </Header>

      <View style={appStyle.content}>
        <Text
          style={[
            appStyle.defaultText,
            { marginTop: 10, marginBottom: 10, fontSize: 25, fontWeight: '900' },
          ]}
        >
          {!isEmpty(user) ? user.name : appLang.name}
        </Text>
        <View style={{ width: '100%' }}>
          <FlatList
            data={todos}
            style={{ marginBottom: 20 }}
            renderItem={_renderItem}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </View>
      </View>
    </Container>
  )
}

export default Home
