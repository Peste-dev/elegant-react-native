import { StackNavigator } from 'react-navigation'

import app from 'routes/app'
import user  from 'routes/user'

import Splash from 'view/components/Splash'

const routeConfig = [
  {
    Splash: { screen: Splash },
    ...app,
    ...user
  }, {
    headerMode: 'none',
    initialRouteName: 'Splash'
  }
]

const Navigator = StackNavigator(...routeConfig)

export default Navigator