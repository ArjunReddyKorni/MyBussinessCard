import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QrCode from './QrCode';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const location = require('./asset/icons8-location-28.png');
  const number = require('./asset/icons8-phone-28.png');

  const mail = require('./asset/icons8-mail-28.png');

  const company = require('./asset/icons8-company-28.png');

  const fetchDataFromServer = async () => {
    const apiUrl = 'http://10.55.4.152:8080/email';
    const email = 'uwt{c0rtcmcuj3Bvcvceqpuwogt0eqo';

    try {
      const response = await axios.post(apiUrl, {email});
      console.log('Data received from server:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);
  return (
    <>
      <View style={styles.ImageBox}>
        <Image
          style={styles.tcplLogo}
          source={require('./asset/pngwing.com.png')}
        />
        <Image style={styles.tcpLogo} source={require('./asset/tata.png')} />
      </View>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          {data && data[0] && data[0].full_name ? (
            <Text style={styles.text}>{data[0].full_name}</Text>
          ) : (
            <View>
              <ActivityIndicator />
            </View>
          )}
          <View style={styles.textContainer}>
            <Image width="10%" height="10%" source={location} />
            {data && data[0] && data[0].location ? (
              <Text style={styles.subText}>{data[0].location}</Text>
            ) : (
              <Text></Text>
            )}
          </View>
          <View style={styles.textContainer}>
            <Image width="10%" height="10%" source={company} />
            <Text style={styles.company}>Tata Consumer Product Limited</Text>
          </View>
          <View style={styles.textContainer}>
            <Image width="10%" height="10%" source={number} />
            <View style={styles.contactContainer}>
              {data && data[0] && data[0].phone_number ? (
                <Text style={styles.contact}>{data[0].phone_number}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
          <View style={styles.textContainer}>
            <Image width="5%" height="5%" source={mail} />
            <View style={styles.contactContainer}>
              {data && data[0] && data[0].email ? (
                <Text style={styles.contact}>{data[0].email}</Text>
              ) : (
                <Text></Text>
              )}
            </View>
          </View>
        </View>
        <View style="buttonView">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QrCode');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>GENERATE QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  tcplLogo: {
    width: 50,
    height: 50,
    //justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: '10%',
  },

  tcpLogo: {
    width: 250,
    height: 13,
    marginTop: '5%',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  boxContainer: {
    backgroundColor: 'white',

    width: '90%',
    height: '50%',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,

    shadowOpacity: 3,
    elevation: 10,
  },
  text: {
    fontSize: 40,
    color: '#246EE9',
    fontWeight: 'bold',
    padding: 10,
    margin: 10,
    fontFamily: 'Consolas',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  subText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A1110',
    marginBottom: 10,
    paddingLeft: 35,
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  company: {
    fontSize: 15,
    color: '#1A1110',
    fontWeight: 'bold',
    paddingLeft: 35,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contact: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 35,
    textTransform: 'lowercase',
    marginTop: '3%',
  },
  buttonContainer: {
    width: '30%',
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  ImageBox: {
    display: 'flex',
    marginTop: '20%',

    flexDirection: 'row',
    //justifyContent: 'space-evenly',
    backgroundColor: '#f5f5f5',
  },
  button: {
    alignItems: 'center',
    fontFamily: 'Helvetica, Arial, sans-serif',
    marginTop: 20,
    backgroundColor: '#246EE9',
    width: 150,
    height: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: '7%',
    marginTop: 6,
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
});

export default HomeScreen;
