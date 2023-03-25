import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const deviceHeight = Dimensions.get('window').Height;

const DrawerMenu = ({ isDrawerOpen, toggleDrawer }) => {
  const navigation = useNavigation();

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName);
    toggleDrawer();
  };


  const handleCloseDrawer = () => {
    toggleDrawer();
  };

  const handleBackgroundPress = () => {
    if (isDrawerOpen) {
      toggleDrawer();
    }
  };

  const drawerWidth = 300;
  const animation = React.useRef(new Animated.Value(0)).current;

  



  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: isDrawerOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isDrawerOpen]);





  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-drawerWidth, 0],
  });

  return isDrawerOpen ? (
    <>
      {isDrawerOpen && (
        <TouchableWithoutFeedback onPress={toggleDrawer}>
          <View style={drawerMenu.overlay} />
        </TouchableWithoutFeedback>
      )}
      <Animated.View style={[drawerMenu.cont, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={handleCloseDrawer} style={drawerMenu.closeButton}>
          <Text style={drawerMenu.closeButtonText}>X</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Screen1')} style={drawerMenu.button}>
          <Text style={drawerMenu.text}>Screen 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Screen2')} style={drawerMenu.button}>
          <Text style={drawerMenu.text}>Screen 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonPress('Screen3')} style={drawerMenu.button}>
          <Text style={drawerMenu.text}>Screen 3</Text>
        </TouchableOpacity>
      </Animated.View>
     </>
    
  ): null;
};

const drawerMenu = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 300,
    height: 1200,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,

  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 1200,
  },
  closeButton: {
    position: 'absolute',
    top: 55,
    left: 20,
  },
  closeButtonText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrawerMenu;
