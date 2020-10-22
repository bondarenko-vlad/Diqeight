import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Metring from './components/metring'
import Description from './components/description'
import Battlefield from './components/yourDick'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Узнай вес своего писюна" component={Metring} />
      <Stack.Screen name="Подробнее" component={Description} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    fontSize:20,
    color: '#fff'
  },
  bar: {
    flex: 1,
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#aaf',
  },
  nav:{
    flex:6
  }
});
