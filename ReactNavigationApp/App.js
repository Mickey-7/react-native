/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import DetailsScreen from './components/DetailsScreen';

const MySwitchNavigator = createSwitchNavigator({
  routeOne: HomeScreen,
  routeTwo: AboutScreen,
  routeThree: DetailsScreen,
}, {
  initialRouteName: 'routeOne',
});

const AppContainer = createAppContainer(MySwitchNavigator);

const App: () => Node = () => {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({

});

export default App;
