import { StackNavigator } from 'react-navigation'

import home from 'view/pages/home'
import Splash from 'view/components/Splash'

const routeConfig = [
  {
    Splash: { screen: Splash },
    home: { screen: home }
  }, {
    headerMode: 'none',
    initialRouteName: 'home'
  }
]

const Navigator = StackNavigator(...routeConfig)

export default Navigator
