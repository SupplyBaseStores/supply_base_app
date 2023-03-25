import React, { useState } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, FlatList, Animated, TouchableOpacity } from 'react-native';
import Menu from './../assets/Menu.png'
import Cart from './../assets/Cart.png'
import Logo from './../assets/Logo.png'
import { useNavigation } from '@react-navigation/native';
import DrawerMenu from './DrawerMenu';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;





function Header() {

  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleMenuPress = () => {
    toggleDrawer();
  };

  const handleCartPress = () => {
    navigation.navigate('CartScreen');
  };



  return (
    <View style={header.cont}>
      <TouchableOpacity onPress={handleMenuPress} style={header.button}>
        <Image source={Menu} style={header.menu} />
      </TouchableOpacity>

      <Image source={Logo} style={header.logo}/>

      <TouchableOpacity onPress={handleCartPress} style={header.button}>
        <Image source={Cart} style={header.cart} />
      </TouchableOpacity>

      <DrawerMenu isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

    </View>
  )
}


const header = StyleSheet.create({
    cont: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      width: deviceWidth,
      height: 100,
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 0,
      paddingHorizontal: 2,
    },
    menu: {
      left: 0,
      width: 120,
      height: 80,
      resizeMode: 'contain',
    },
    logo: {
      height: 90,
      width: 250,
      resizeMode: 'contain',
    },
    cart: {
      width: 120,
      height: 45,
      resizeMode: 'contain',
    },
  })

export default Header

