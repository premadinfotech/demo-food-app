/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Images
import SplashBackground from '../assets/image/SplashBackground.jpg';
import Main from '../assets/image/Main.png';

// Icon
import ic_mobile from '../assets/icon/ic_mobile.png';
import ic_line from '../assets/icon/ic_line.png';
import ic_horizontal_line from '../assets/icon/ic_horizontal_line.png';
import ic_email from '../assets/icon/ic_email.png';
import ic_facebook from '../assets/icon/ic_facebook.png';
import ic_google from '../assets/icon/ic_google.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSendOTP = async () => {
    this.props.navigation.navigate('OTP');
  };

  render() {
    return (
      <ImageBackground
        source={SplashBackground}
        resizeMode="cover"
        style={styles.splashBackgroundImage}>
        <View style={styles.homeContainer}>
          <Image source={Main} resizeMode="cover" style={styles.mainImage} />

          <View style={styles.inputContainer}>
            <Image
              source={ic_mobile}
              resizeMode="cover"
              style={styles.inputIcon}
            />
            <Image
              source={ic_line}
              resizeMode="cover"
              style={styles.lineIconStyle}
            />
            <TextInput
              style={styles.loginFormTextInput}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#444444"
              keyboardType="default"
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            underlayColor="#4a5ccc80"
            onPress={this.handleSendOTP}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>

          <View style={styles.lowerContainer}>
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
            <Text style={styles.ORText}>OR</Text>
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
            <Image
              source={ic_horizontal_line}
              resizeMode="cover"
              style={styles.horizontalLineStyle}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={ic_email}
              resizeMode="cover"
              style={styles.inputIcon}
            />

            <Text style={styles.loginFormTextInput1}>Continue with Email</Text>
          </View>

          <View style={styles.lowerContainer}>
            <View style={styles.socialMediaContainer}>
              <Image
                source={ic_facebook}
                resizeMode="cover"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Facebook</Text>
            </View>

            <View style={styles.socialMediaContainer}>
              <Image
                source={ic_google}
                resizeMode="cover"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Google</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  splashBackgroundImage: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    height: hp(50),
    aspectRatio: 1 / 1,
    overflow: 'hidden',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#fff',
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(3),
    backgroundColor: '#f1f1f1',
    borderRadius: wp(2),
    marginHorizontal: wp(4),
  },
  inputIcon: {
    width: wp(5),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
  },
  lineIconStyle: {
    width: wp(5),
    aspectRatio: 1 / 1,
  },
  loginFormTextInput: {
    fontSize: wp(3.5),
    flex: 1,
    color: '#000',
  },
  button: {
    width: 330,
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: wp(2),
    marginHorizontal: wp(2),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: wp(3.7),
  },
  lowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLineStyle: {
    width: hp(5),
  },
  ORText: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#444444',
    marginHorizontal: wp(1),
  },
  loginFormTextInput1: {
    fontSize: wp(3.5),
    flex: 1,
    color: '#000',
    textAlign: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    height: hp(5),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: wp(2),
    borderRadius: wp(2),
  },
  socialText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#444444',
  },
  socialIcon: {
    width: hp(2.5),
    aspectRatio: 1 / 1,
    marginRight: wp(4),
  },
});
