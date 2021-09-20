/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';

// Icon
import ic_back from '../assets/icon/ic_back.png';

export default class OTPScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      showProcessingLoader: false,
    };
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  handleNext = async () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleBack} style={styles.headerStyle}>
          <Image
            source={ic_back}
            resizeMode="cover"
            style={styles.leftArrowIcon}
          />
          <Text style={styles.headerTitle}>Enter Verification Code</Text>
        </TouchableOpacity>
        <View style={styles.homeContainer}>
          <Text style={styles.startUpText}>
            {' '}
            Enter the 4-digit code sent to{' '}
          </Text>

          <Text style={styles.startUpText}>
            {' '}
            <Text style={styles.mobileNumberStyle}>+91 9460914020</Text>
          </Text>

          <View style={styles.otpView}>
            <OTPInputView
              style={{
                width: '80%',
                height: 200,
              }}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
              value={this.state.otp}
              onCodeChanged={this.handleOTPChange}
            />
          </View>

          <Text style={styles.noCodeTextStyle}>
            Didn't receive the code?{' '}
            <Text style={styles.resendText}>Resend</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          underlayColor="#00000080"
          onPress={this.handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftArrowIcon: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginHorizontal: wp(6),
    marginVertical: hp(2),
  },
  headerTitle: {
    fontSize: wp(5),
  },
  homeContainer: {
    flex: 1,
    marginHorizontal: wp(6),
  },
  startUpText: {
    fontSize: wp(5.5),
  },
  mobileNumberStyle: {
    fontSize: wp(5.5),
    fontWeight: '700',
  },
  otpView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: '#000',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  noCodeTextStyle: {
    fontSize: wp(4),
    textAlign: 'center',
  },
  resendText: {
    fontSize: wp(4),
    fontWeight: '700',
  },
  button: {
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: hp(2),
    marginHorizontal: wp(4),
    marginBottom: hp(2),
    borderRadius: wp(2),
  },
  buttonText: {
    color: 'white',
    fontSize: wp(4),
    fontWeight: '700',
  },
});
