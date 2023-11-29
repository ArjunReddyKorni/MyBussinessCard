import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BetterLogo from './asset/better-logo.png';
import TCPLogo from './asset/tcp-logo.svg';
import tata from './asset/tata.png';
import Pattern from './asset/pattern.png';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {SvgCssUri} from 'react-native-svg';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
const win = Dimensions.get('window');
const TataLogo = require('./asset/tcp-logo.svg');
// const Patter = require('./asset/pattern.png');
const better = require('./asset/better.svg');
const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar
          backgroundColor="#E54800"
          hidden={false}
          barStyle="light-content"></StatusBar>
      </SafeAreaView>
      <SvgCssUri
        height="10%"
        width="40%"
        uri={resolveAssetSource(better).uri}
        style={{
          marginLeft: 'auto',
          marginRight: '5%',
          marginTop: '1%',
        }}
      />
      {/* <View style={styles.betterLogoWrapper}>
        <Image source={BetterLogo} style={styles.betterLogo} />
      </View> */}
      <View style={styles.tcpFormWrapper}>
        {/* <Text adjustsFontSizeToFit={true} style={styles.loginText}>
          LOGIN
        </Text> */}

        <SvgCssUri
          width="80%"
          height="80%"
          uri={resolveAssetSource(TataLogo).uri}
          style={{
            marginVertical: '20%',
            marginTop: '20%',
          }}
        />

        <View style={styles.tcpLogoWrapper}>
          {/* <View
            style={{
              width: 200,
              height: 100,
              fontSize: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: '#15317E'}}>TATA </Text>
            <Text style={{color: '#15317E'}}>CONSUMER PRODUCTS</Text>
          </View> */}
          <Image
            source={tata}
            style={{width: '100%', height: '100%', marginBottom: 0}}
          />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.distributorBtn}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Text adjustsFontSizeToFit={true} style={styles.textWhite}>
            Login
          </Text>
        </TouchableOpacity>
        <Text adjustsFontSizeToFit={true}></Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.ssoText}>
          <Text style={{fontWeight: 'bold', color: '#E54800', fontSize: 20}}>
            Login with SSO
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={Pattern}
          style={{width: '100%', height: '100%', marginBottom: 0}}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '15%',
  },
  betterLogoWrapper: {
    width: '30',
    height: '25%',
  },
  betterLogo: {
    marginLeft: 'auto',
    marginRight: 40,
    height: '30%',
    width: '60%',
  },
  homePattern: {
    height: '100%',
    width: '100%',
  },
  tcpFormWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 1,
    marginBottom: '5%',
  },
  tcpLogoWrapper: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    marginTop: '10%',
  },
  loginText: {
    color: 'rgb(18, 104, 179)',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: '5%',
  },
  logoText: {
    color: 'rgb(18, 104, 179)',
    fontSize: 16,
    paddingTop: '2%',
  },
  distributorBtn: {
    backgroundColor: 'rgb(18, 104, 179)',
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',

    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    textAlign: 'center',
    fontSize: 20,
    padding: '4%',
    color: 'white',
  },
  ssoText: {
    color: '#E54800',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tcp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
