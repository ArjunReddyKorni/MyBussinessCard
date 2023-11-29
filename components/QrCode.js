import React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView, Image} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

const QrCode = ({route}) => {
  const {name, number, email, location} = route.params;
  const baseUrl = 'https://3661-136-226-242-116.ngrok.io';

  const handleDataReceived = () => {
    // Handle the data received from the QR code here if needed
  };

  const url = `${baseUrl}?name=${encodeURIComponent(
    name,
  )}&number=${encodeURIComponent(number)}&email=${encodeURIComponent(
    email,
  )}&location=${encodeURIComponent(location)}`;
  const logoImage = require('./asset/frame2.png');
  return (
    <View style={styles.qrCodeContainer}>
      {/* <QRCode
        // logo={logoImage}
        // logoSize={200}
        value={url}
        size={Dimensions.get('window').width - 80}
        onPress={handleDataReceived}
      /> */}
      <Image
        source={logoImage}
        style={{
          width: '90%',
          height: '100%',
          resizeMode: 'contain',
        }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
  },
});

export default QrCode;
