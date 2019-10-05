import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from 'view/pages/home';
import TodosScreen from 'view/pages/todos';
import GithubScreen from 'view/pages/github';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Todos: TodosScreen,
    Github: GithubScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
