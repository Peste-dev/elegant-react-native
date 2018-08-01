import { createStackNavigator } from 'react-navigation'

import app from 'routes/app'
import user  from 'routes/user'
import movie from 'routes/movie'
import player from 'routes/player'

import Splash from 'view/Splash'

const routeConfig = [
  {
    Splash: { screen: Splash },
    ...app,
    ...user,
    ...movie,
    ...player
  }, {
    headerMode: 'none',
    initialRouteName: 'Splash'
  }
]

const Navigator = createStackNavigator(...routeConfig)

export default Navigator