import React from 'react';
import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useTheme} from 'react-native-paper';

import HomeScreen from 'view/pages/home';
import TodosScreen from 'view/pages/todos';
import GithubScreen from 'view/pages/github';

const Stack = createStackNavigator();

const Router = () => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Todos" component={TodosScreen} />
        <Stack.Screen name="Github" component={GithubScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
