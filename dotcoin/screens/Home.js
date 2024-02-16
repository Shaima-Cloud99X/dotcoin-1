import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

//   const navigateToScreen = (screenName) => {
//     navigation.navigate(screenName);
//   };



  return (
    
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Register')}>
        <Image source={require('../assets/Home.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Register')}>
        <Image
          source={require('../assets/icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Register')}>
        <Image
          source={require('../assets/Card.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate('Register')}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
   
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#141416', 
      height: 60,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: '#ffffff', // Icon color
    },
  });

export default Home;
