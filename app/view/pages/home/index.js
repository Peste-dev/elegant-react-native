import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Loading,
  Item,
  Appbar
} from 'view/components';
import i18n from 'i18n';
import gate from 'gate';
import style from 'view/style';
import { styleJoiner } from 'helpers/util';


const Home = () => {
  const { appLang, homeLang } = i18n
  const { appStyle, homeStyle } = style  

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await gate.home()

      setTodos(response)
      setLoading(false)
    } catch {
      // handling error
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const someAction = text => {
    console.log(text)
  }

  return loading ? <Loading /> : (
    <View style={appStyle.container}>
       <Appbar.Header>
        <Appbar.Action onPress={()=>someAction('some action')} icon="email" />
        <Appbar.Content title={homeLang.title} />
        <Appbar.Action icon="search" />
      </Appbar.Header>
      
      <View style={appStyle.content}>
        <View style={homeStyle.flatListView}>
          <Text style={styleJoiner(appStyle.defaultText, homeStyle.contentText)} >
            { appLang.name }
          </Text>
          <FlatList
            data={todos}
            style={homeStyle.flatList}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item: {id, title} }) => <Item key={id} id={id} title={title} />}
          />
        </View>
      </View>
    </View>
  )
}

export default Home
