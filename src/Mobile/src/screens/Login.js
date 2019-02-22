import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

function Login (props) {
  var navigate = props.navigation.replace;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Form Login</Text>
      <Button
        onPress={() => navigate('Menu')}
        title="Menu"
        color="#841584"
      />
    </View>
  );
}

Login.navigationOptions = {
  header : null
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
});

export default Login;
