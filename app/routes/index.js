import { createAppContainer, createStackNavigator } from 'react-navigation'

import HomeScreen from 'view/pages/home'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
)

export default createAppContainer(AppNavigator)
