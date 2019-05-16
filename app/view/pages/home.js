import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Header, Left, Right, Body, Title, Button, Icon } from 'native-base'

import i18n from 'i18n'
import gate from 'gate'
import style from 'view/style'
import Loading from 'view/components/Loading'

const Home = () => {
  const { appStyle } = style
  const { appLang, homeLang } = i18n

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      gate.home()
        .then(response => {
          setTodos(response)
          setLoading(false)
        })
        .catch(() => {})
    }

    fetchData()    
  }, [])

  const someAction = text => {
    console.log(text)
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
        <View style={styles.flatListView}>
          <Text style={[ appStyle.defaultText, styles.contentText ]} >
            { appLang.name }
          </Text>
          <FlatList
            data={todos}
            style={styles.flatList}
            renderItem={({ item}) => (
              <TouchableOpacity style={styles.renderItemTouchable} >
                <Text style={appStyle.whiteFont}>{`${item.id} - ${item.title}`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  contentText: {
    fontSize: 25, 
    fontWeight: '900',
    marginBottom: 10, 
    marginTop: 10    
  },
  flatList: {
    marginBottom: 20 
  },
  flatListView: {
    width: '100%'
  },
  renderItemTouchable: {
    backgroundColor: style.theme.colors.link, 
    borderRadius: 5, 
    marginBottom: 5,
    padding: 5    
  }  
})

export default Home
