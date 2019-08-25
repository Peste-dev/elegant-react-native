import {createAppContainer, createStackNavigator} from 'react-navigation';

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
