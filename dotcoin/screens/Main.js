
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Main = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
        <View style = {styles.container1}>
          <Text style= {styles.title} >Home</Text>
          <Text style= {styles.title2} >Most Favourite</Text>
          <Image source={require('../assets/List.png')} style = {styles.list}  />

          <Image source={require('../assets/list2.png')} style = {styles.list1}  />
          
        </View>
        <ScrollView>
          <View style= {styles.container2}>
          <Text style= {styles.title2} >Trending</Text>
          <View style = {{marginTop:20}}> 
            <View style = {styles.row}>
            <Image source={require('../assets/bitcoinIcon.png')} style = {{width:60, height:60}}  />
            <View>
            <Text style = {styles.text1}>Bitcoin</Text>
            <Text style = {styles.text2}>BTC</Text>
            </View>
            <Image source={require('../assets/Graph1.png')} style = {{marginTop:20, marginLeft:25}}  />
            <View style = {{marginLeft:20}}>
            <Text style = {[styles.text3]}>$41,192.14</Text>
            <View style = {{flexDirection:'row', marginLeft:15}}>
            <Image source={require('../assets/chevronOrange.png')} style = {{marginLeft:25, marginTop:2}}  />
            <Text style = {[styles.text4, {color:"#F7931A"}]}>0.55%</Text>
            </View>
            </View>
            </View>
            <View style={styles.divider} />


            <View style = {styles.row}>
            <Image source={require('../assets/Etherium.png')} style = {{width:60, height:60}}  />
            <View>
            <Text style = {styles.text1}>Tether</Text>
            <Text style = {styles.text2}>BTC</Text>
            </View>
            <Image source={require('../assets/Graph3.png')} style = {{marginTop:20, marginLeft:25}}  />
            <View>
            <Text style = {[styles.text3, {marginLeft:65}]}>$625.14</Text>
            <View style = {{flexDirection:'row', marginLeft:35}}>
            <Image source={require('../assets/chevron3.png')} style = {{marginLeft:25, marginTop:2}}  />
            <Text style = {[styles.text4, {color:"#6CB0FD"}]}>0.55%</Text>
            </View>
            </View>
            </View>
            <View style={styles.divider} />




           

        
         


         
          

          </View>

          </View>
        </ScrollView>
   












      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/HomeG.png')} style={styles.icon} />
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
          onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../assets/profile.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },

  container1: {
    margin:20

  },

  divider: {
    borderBottomColor: '#404040',
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  container2: {
    margin:20

  },

  row: {
    flexDirection:'row'

  },

  title: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
    
  },

  text1: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginLeft:5,
    marginTop:10
    
  },

  text2: {
    color: '#808D90',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginLeft:5,
   
    
  },

  text3: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginLeft:25,
    marginTop:10
    
  },

  text4: {
    color: '#808D90',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    marginLeft:6,
   
    
  },

  title2: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
    
  },

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
    // tintColor: '#ffffff',
  },

  list1:{
    marginTop:-220,
    marginLeft:210,
  },

  list:{
    marginTop:30,
    marginLeft:10,
  },
});

export default Main;

