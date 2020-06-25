import React from 'react';
import {SafeAreaView} from 'react-native'
import Router from './screens/Router';
import AppNavigator from './screens/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{
        flex: 1, backgroundColor: '#f2f2f2'
      }}>
      <AppNavigator/>
      </SafeAreaView>
    );
  }
}