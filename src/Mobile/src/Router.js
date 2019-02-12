import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './modul/Login';
import Menu from './modul/Menu';


const Navigation = createStackNavigator({
  Login: {screen: Login,
    navigationOptions: {
      header : null
    }},
  Menu: {screen: Menu,
    navigationOptions: {
    header : null
  }},
},{
  initialRouteName : 'Login',
});

const App = createAppContainer(Navigation);

export default App;
