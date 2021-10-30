/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//snippet: imp + tab
import HeaderComp from './components/header'
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';


const App: () => Node = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  //snippet:nfn
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo]
      })
    } else {
      Alert.alert('OOOPS!', 'Todo must be over 3 characters long',
        [{ text: 'Understood', onPress: () => console.log('alert closed') }])
    }
  }


  return (
    // <Sandbox />
    <TouchableNativeFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed keyboard');
    }}
    >
      <View style={styles.container}>
        {/* header */}
        <HeaderComp />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'yellow'
  }
});

export default App;
