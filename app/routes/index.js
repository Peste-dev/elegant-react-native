import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from 'view/pages/home';
import TodosScreen from 'view/pages/todos';
import GithubScreen from 'view/pages/github';
import SettingScreen from 'view/pages/setting';
import DetailScreen from 'view/pages/detail';

import styles from '../view/style/app'

const ElegantStack = createStackNavigator();
const SettingStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const elegantStackScreen = () => {
  return (
    <ElegantStack.Navigator headerMode="none">
      <ElegantStack.Screen name="Home" component={HomeScreen} />
      <ElegantStack.Screen name="Todos" component={TodosScreen} />
      <ElegantStack.Screen name="Github" component={GithubScreen} />
    </ElegantStack.Navigator>
  );
}
const settingStackScreen = () => {
  return (
    <SettingStack.Navigator headerMode="none">
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      <SettingStack.Screen name="Detail" component={DetailScreen} />
    </SettingStack.Navigator>
  );
}

const appNavigator = () => {
  return (
    <NavigationNativeContainer>
      <Tab.Navigator barStyle={styles.tab}>
        <Tab.Screen name="Elegant" component={elegantStackScreen} />
        <Tab.Screen name="Setting" component={settingStackScreen} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}


export default appNavigator;
