import { StyleSheet } from 'react-native';

const start = StyleSheet.create({
  sliderContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
  slide: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    margin: 20,
    zIndex: 1,
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: 'white',
    textAlign: 'center',
    zIndex: 1,
  },
  title: {
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    margin: 'auto',
    letterSpacing: 0.15,
  },
  logos: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    margin: 20,
    zIndex: 1,
  },
  botBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '90%',
    left: '82%',
    zIndex: 1,
    width: '20%',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0dccea',
    borderWidth: 0,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    color: '#fff',
    fontSize: 14,
    margin: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: 'center',
    zIndex: 1,
    height: '5%',
  },
  buttonText: {
    color: '#fff',
  }

});
    
    export default start;
    
    
    