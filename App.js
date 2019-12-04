/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home  from './pages/Home';

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex:1}}>
          <Home />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'blue',
  }
});

export default App;
