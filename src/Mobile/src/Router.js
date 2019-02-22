import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './screens/Login';
import Menu from './screens/Menu';

const Navigation = createStackNavigator({
  Login: {screen: Login},
  Menu: {screen: Menu},
},{
  initialRouteName : 'Login',
});

const App = createAppContainer(Navigation);

export default App;
