import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native';
import Polygon from './../assets/Polygon1.png'
import Supply from './../assets/Supply.png'
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


function Start() {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('NewScreen');
  };


  

  return (
    <View style={start.box}>
      <Image source={Polygon} style={start.polygon}/>
      <Image source={Supply} style={start.supply}/>
      <TouchableOpacity onPress={handleButtonPress} style={start.button}>
        <Text style={start.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}


const start = StyleSheet.create({
  box: {
    backgroundColor: '#2196D8',
    width: deviceWidth,
    height: deviceHeight,
  },
  polygon: {
    width: deviceWidth,
    height: 770,
  },
  supply: {
    left: 210,
    bottom: 315,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'light',
  },
})

export default Start;

