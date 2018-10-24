/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAoNHUys0xjVaz_9VR-88R85SkxfPjLQ6k',
      authDomain: 'authentication-34c94.firebaseapp.com',
      databaseURL: 'https://authentication-34c94.firebaseio.com',
      projectId: 'authentication-34c94',
      storageBucket: 'authentication-34c94.appspot.com',
      messagingSenderId: '501176534962'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;