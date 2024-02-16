import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InviteFriend = () => {
  const navigation = useNavigation();
  const arrowLeft = require('../assets/CaretLeft.png');
  const Illustration = require('../assets/Illustration.png');
  const copyicon = require('../assets/copyicon.png');

  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          
          <Text style={styles.title}>Invite Your Friend</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <Image source={Illustration} style={{alignSelf: 'center', marginTop:10}} />
        <Text style={styles.textStyle1}>Refer A Friend</Text>
        <Text style={styles.textStyle2}>
          Share Your Promo Code & Get $3 For Each Friend
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textStyle3}>dotcoiPartnerMR</Text>
          <TouchableOpacity>
            <Image source={copyicon} />
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 27,
    textAlign:'center',
    marginLeft:80,
    marginBottom:10

    

  },
  header: {
    marginTop: 50,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  },
  textStyle2: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    width: 287,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop:10
  },
  button: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    height: 67,
    borderRadius: 14,
    backgroundColor: 'rgba(52,168,83,0.15)',
    alignItems: 'center',
    borderColor: '#34A853',
    borderWidth: 2,
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  textStyle3: {
    color: '#34A853',
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
  },
});

export default InviteFriend;
