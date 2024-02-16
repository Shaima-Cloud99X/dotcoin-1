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

const Preferences = () => {
  const navigation = useNavigation();


  const acc = require('../assets/accInfo.png');
  const eye = require('../assets/eyeIcon.png');
  const payment = require('../assets/payment.png');
  const invite = require('../assets/invite.png');


  return (
    <View style={styles.window}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Preferences</Text>
          <View style={{width: 24, height: 24}} />
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <Image source={acc} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textStyle1}>Account Information</Text>
              <Text style={styles.textStyle2}>
                Change Your Account Information
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image source={eye} />
            <TouchableOpacity>
              <Text style={styles.textStyle1}>Password</Text>
              <Text style={styles.textStyle2}>Change Your Password</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image source={payment} />
            <TouchableOpacity>
              <Text style={styles.textStyle1}>Payment Method</Text>
              <Text style={styles.textStyle2}>
                Add Your Credit / Debit Cards
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.item}>
            <Image source={invite} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textStyle1}>Invite Your Friends</Text>
              <Text style={styles.textStyle2}>Get $3 For Each Invitation</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    marginLeft: 120,
  },
  header: {
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  container: {
    marginTop: 40,
    marginLeft: 24,
    marginRight: 24,
    justifyContent: 'space-between',
    gap: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 19,
  },
  textStyle2: {
    color: '#737373',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
});

export default Preferences;
