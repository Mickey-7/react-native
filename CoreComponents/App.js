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
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  ImageBackground,
  Switch,
  ToastAndroid,
  TextInput,
  FlatList,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//snippet: imp + tab
import ViewsTextStyles from './the-net-ninja/ViewsTextStyles'
import UsingState from './the-net-ninja/UsingState';
import TextInputComp from './the-net-ninja/TextInputComp'
import ListScrollView from './the-net-ninja/ListScrollView';
import FlatListComp from './the-net-ninja/FlatListComp';
import TouchableComp from './the-net-ninja/TouchableComp';

const App: () => Node = () => {
  return (
    <View style={styles.container}>
      {/* <ViewsTextStyles /> */}
      {/* <UsingState /> */}
      {/* <TextInputComp /> */}
      {/* <ListScrollView /> */}
      {/* <FlatListComp /> */}
      <TouchableComp />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20
  },


})




export default App;
