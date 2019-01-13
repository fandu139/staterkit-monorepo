/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Welcome To React Native IOS Fandu',
  android:
    'Wawan',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
		<View style={styles.logoContainer}>
			<Image style={styles.logo} source={require('./image/labtocat.png')}>
		</View>
        <Text style={styles.welcome}>Wawan</Text>
        <Text style={styles.instructions}>saya rubah instruksi ini dari wawan</Text>
        <Text style={styles.instructions}>{instructions}</Text>
		<Button
		  title="Button"
		  color="#841584"
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
  logoContainer: {
	alignItems : 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});
