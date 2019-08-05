/* eslint-disable react-native/no-raw-text */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Animated } from 'react-native'
import { Button } from 'react-native-paper'

import {
  View,
  Image,
  FlatList,
  Loading,
  Item,
  Appbar
} from 'view/components'
import i18n from 'i18n'
import style from 'view/style'

import { STATUS } from 'store/constants/index'
import { getRepos } from 'store/actions/index'

const Home = ({ dispatch, github }) => {  
  const { homeLang } = i18n
  const { appStyle, homeStyle } = style  

  const [query, setQuery] = useState('react')
  const [scaleValue] = useState(new Animated.Value(0))
  const [githubStatus, setGithubStatus] = useState('idle')  

  useEffect(() => {
    dispatch(getRepos(query))
  }, [query])

  useEffect(() => {
    if (githubStatus === STATUS.RUNNING && github.repos.status === STATUS.READY) {
      Animated.timing(scaleValue, {
        delay: github.repos.data[query] * 350,
        duration : 600,
        toValue: 1
      }).start()
    }

    setGithubStatus(github.repos.status)
  }, [github])  

  const someAction = text => {
    console.log(text)
  }

  const data = github.repos.data[query] || []

  return (
    <View style={appStyle.container}>
       <Appbar.Header>
        <Appbar.Action onPress={()=>someAction('some action')} icon="email" />
        <Appbar.Content title={homeLang.title} />
        <Appbar.Action onPress={()=>someAction('search')} icon="search" />
      </Appbar.Header>
      
      <View style={appStyle.content}>
        <View style={homeStyle.flatListView}>
          <View style={homeStyle.logoView}>
            <Image style={homeStyle.logo} source={require('assets/images/logo.png')} />
          </View>

          <View style={homeStyle.toggleArea}>
            <Button mode="outlined" onPress={() => setQuery('react')} style={homeStyle.toggleAreaBtn}>
              React
            </Button>
            <Button mode="outlined" onPress={() => setQuery('react-native')} style={homeStyle.toggleAreaBtn}>
              React Native
            </Button>
          </View>

          <View style={homeStyle.flatList}>
          {
            !data.length ? (
              <Loading />
            ) : (     
              <Animated.View style={{ opacity: scaleValue }}>         
                <FlatList
                  data={data}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item: {id, name, owner} }) => <Item key={id} title={name} owner={owner} />}
                />
              </Animated.View>
            )
          } 
          </View>
        </View>                 
      </View>
    </View>
  )
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  github: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

function mapStateToProps(state) {
  return { github: state.github }
}

export default connect(mapStateToProps)(Home)
