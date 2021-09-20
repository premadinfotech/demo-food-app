/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Icon
import ic_back from '../assets/icon/ic_back.png';

// Image
import notification from '../assets/image/notification.png';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  handleBrowse = () => {
    this.props.navigation.pop();
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
          <Text style={styles.headerTitle}>Notification</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <Image
            source={notification}
            resizeMode="cover"
            style={styles.cartStyle}
          />

          <Text style={styles.captionText}>No New Notification</Text>

          <View style={styles.browseCartContainer}>
            <Text style={styles.captionText1} onPress={this.handleBrowse}>
              Go Back
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartStyle: {
    height: hp(30),
    width: wp(60),
  },
  browseCartContainer: {
    height: hp(5),
    // width: wp(20),
    borderWidth: 2,
    borderColor: 'orange',
    // alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
  captionText: {
    fontSize: wp(4),
    marginHorizontal: wp(2),
  },
  captionText1: {
    fontSize: wp(3.5),
    fontWeight: '700',
    marginHorizontal: wp(2),
    color: 'orange',
  },
});
