import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Welcome To React Native IOS Fandu',
  android:
    'Form Menu',
});

type Props = {};
export default class App1 extends Component<Props> {
  static navigationOptions = {
    header : null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
    		<Button
    		  title="Button"
    		/>
      </View>
    );
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
