/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Welcome To React Native IOS Fandu',
  android:
    'Wawan',
});

type Props = {};
export default class Login extends Component<Props> {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Login'
        },
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Form Login</Text>
		<Button
      onPress={
              () => this.moveactivity()
            }
		  title="Pindah Activity"
		  color="#841584"
		/>
      </View>
    );
  }

  moveactivity = () => {
    var {dispatch, navigate} = this.props.navigation;
    const reset = StackActions.reset({
      index:0,
      key: null,
      actions:[
      NavigationActions.navigate({routeName:'Menu'})
      ]
    });
    this.props.navigation.dispatch(reset);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
