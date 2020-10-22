import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Metring({ navigation }) {
  let [dlina, setDlina] = useState('111')
  let [obhvat, setObhvat] = useState('222')
  let [btnNew, seBtnNew] = useState(0)

  let r = obhvat/(Math.PI*2)
  let pipiWeight =1.0*(Math.PI*Math.pow(r,2)*dlina).toFixed(3)

  return (
      <View style={styles.metring}>
        <TextInput
          onChangeText={(text)=>{setDlina(text)}}
          keyboardType='numeric'
          placeholder='Укажите длину'
          style={styles.input} />
        <TextInput
          onChangeText={(text)=>{setObhvat(text)}}
          keyboardType='numeric'
          placeholder='Укажите обхват'
          style={styles.input} />
        <Text>Вес твоего писюнчика: {dlina > 20 || obhvat > 8 ? 'Попизди мне еще тут' : pipiWeight + ' г'}  </Text>
        <TouchableOpacity
      style={styles.button}
      onPress={()=> navigation.navigate('Подробнее')} >
      <Text> Подробнее </Text>
    </TouchableOpacity>
    <TouchableOpacity
  style={styles.yourDick}
  onPress={()=> navigation.navigate('New')} >
  <Text> New </Text>
</TouchableOpacity>

      </View >

  );
}

  setInterval(()=>{
    console.log(btnNew)
    setBtnNew(btnNew++)
  },1000)



const styles = StyleSheet.create({
  input: {
    backgroundColor:'#dde',
    width:'90%',
    textAlign:'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    margin:10,
    padding:20,
    fontSize:20
  },
  metring: {
    flex: 6,
    justifyContent:'center',
    width:'100%',
    alignItems:'center',

  },
  button: {
    marginTop: 40,
    backgroundColor: '#ddf',
    padding:20,
  },
  yourDick: {
    marginTop: 30,
    backgroundColor: '#faa',
    fontSize: 20,
    padding: 20
  }

});
