import React, {FC, ReactElement, useEffect, useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
// import Parse from "parse/react-native";

import {AppRegistry} from 'react-native';
import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import Svg, {Use} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri'; // SVG Package
import TataLogo from './asset/logo.svg';
import Pattern from './asset/pattern.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Dashboard = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const better = require('./asset/better.svg');
  const TataLogo = require('./asset/logo.svg');
  const Pattern = require('./asset/pattern.png');

  return (
    <>
      <View style={{backgroundColor: '#fff'}}>
        <SvgCssUri
          height="10%"
          width="40%"
          uri={resolveAssetSource(better).uri}
          style={{
            marginLeft: 'auto',
            marginRight: '5%',
            marginTop: '5%',
          }}
        />
        <SvgCssUri
          width="70%"
          height="20%"
          uri={resolveAssetSource(TataLogo).uri}
          style={{
            marginHorizontal: '15%',
          }}
        />
        {/* <SvgUri width="200" height="200" svgXmlData={TataLogo} /> */}
        <Text style={styles.text}>Distributor ID</Text>
        <TextInput
          style={styles.input}
          value={username}
          placeholder={'Enter your Login ID'}
          onChangeText={text => setUsername(text)}
          autoCapitalize={'none'}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          placeholder={'Enter Password'}
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginRight: '10%',
          }}>
          <Text style={styles.loginText}>Register/Forgot Password ?</Text>
          <Text
            style={styles.LoginSSo}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login with SSO
          </Text>
        </View>
        <View style="buttonView">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageWrapper}>
          <Image
            source={require('./asset/pattern.png')}
            style={{width: '100%', height: '100%', marginBottom: 0}}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 5,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 5,
    backgroundColor: 'grey',
  },
  buttonText: {
    padding: 6,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    marginLeft: '10%',
    marginTop: '0%',
    marginBottom: '1%',
    color: 'grey',
    fontSize: 15,
    fontWeight: 'bold',
  },
  loginText: {
    marginBottom: '1%',
    color: '#E55807',
  },
  LoginSSo: {
    marginBottom: '3%',
    color: '#E55807',
    fontWeight: 'bold',
  },
  ImageWrapper: {
    width: '100%',
    height: '30%',
    marginBottom: '5%',
  },
});
