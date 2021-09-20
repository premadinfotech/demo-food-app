/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, ImageBackground} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Images
import logo from '../assets/image/logo.png';
import SplashBackground from '../assets/image/SplashBackground.jpg';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={SplashBackground}
      resizeMode="cover"
      style={styles.splashBackgroundImage}>
      <Image source={logo} resizeMode="cover" style={styles.logo} />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: hp(35),
    aspectRatio: 1 / 1,
  },
  logoText: {
    fontSize: wp(6),
    fontWeight: '700',
    color: '#000',
    overflow: 'hidden',
  },
});
