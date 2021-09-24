import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleExit = () => {};

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.midContentContainer}>
            <Text style={styles.item}>Confirm mobile number to send OTP:</Text>
            <Text style={styles.mobileNumber}>Coming Soon</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={this.handleOTP}>
              <Text style={styles.sendOTP}>Send OTP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleExit}>
              <Text style={styles.exitText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// export default SendOtpPopUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  contentContainer: {
    width: wp(84),
    padding: wp(5),
    borderRadius: 2,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  midContentContainer: {
    justifyContent: 'space-around',
  },
  item: {
    fontSize: wp(3.5),
    color: '#000',
  },
  mobileNumber: {
    marginTop: hp(2),
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sendOTP: {
    fontWeight: '700',
    fontSize: wp(3.5),
    color: '#e84c3d',
    marginLeft: wp(3),
  },
  exitText: {
    paddingLeft: wp(2),
    fontWeight: '700',
    fontSize: wp(3.5),
    color: '#e84c3d',
    marginLeft: wp(3),
  },
});
