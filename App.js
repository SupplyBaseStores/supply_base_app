import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './src/screens/Start';
import Landing from './src/screens/Landing';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="start" options={{ headerShown: false }} component={Start} />
        <Stack.Screen name="NewScreen" options={{ headerShown: false }} component={Landing} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
  }

