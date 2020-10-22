import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { RNCamera, FaceDetector } from 'react-native-camera';


export default function Description({ navigation }) {

  return (
    <View style={styles.description}>
      <Text style={styles.main}>Формула рассчета</Text>
      <Text style={styles.formula}>q*(PI*r^2*L)</Text>
      <Text>где q - плотность (средняя плотность воды = 1.0 г/см^3)</Text>
      <Text> r - радиус (обхват / 2PI)</Text>
      <Text>L - длина </Text>
      <Text style={styles.text}>Рассчеты являются не точными, так как за основу взят объем цилиндра деленный на среднюю плотность мышцы</Text>
      <Button  title='назад' onPress={()=> navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    fontSize:20,
    textAlign:'center',
    marginBottom:20
  },
  description: {
    flex:6,
    marginLeft:10,
    marginRight:10
  },
  formula:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },
  text: {
    marginBottom:30
  }

})
