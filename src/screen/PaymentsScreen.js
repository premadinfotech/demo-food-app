/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Icon
import ic_back from '../assets/icon/ic_back.png';
import ic_money from '../assets/icon/ic_money.png';
import ic_tags from '../assets/icon/ic_tags.png';
import ic_coupon from '../assets/icon/ic_coupon.png';
export default class WalletScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.handleBack}
          style={styles.headerStyle}>
          <Image
            source={ic_back}
            resizeMode="cover"
            style={styles.leftArrowIcon}
          />
          <Text style={styles.headerTitle}>Payments</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <TouchableOpacity>
            <View style={styles.cashContainer}>
              <Image
                source={ic_money}
                resizeMode="center"
                style={styles.cashImage}
              />
              <Text style={styles.cashText}>Cash</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.addPaymentContainer}>
            <TouchableOpacity>
              <Text style={styles.addPaymentText}>
                Add payment or redeem gift card
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBorderStyle}></View>

          <Text style={styles.informationText}>Promotions</Text>

          <TouchableOpacity style={styles.cashContainer}>
            <Image
              source={ic_tags}
              resizeMode="center"
              style={styles.cashImage}
            />
            <Text style={styles.cashText}>Promotions</Text>
            <Text style={styles.verificationText}>2</Text>
          </TouchableOpacity>

          <View style={styles.addPaymentContainer}>
            <TouchableOpacity>
              <Text style={styles.addPaymentText}>Add Promo Code</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBorderStyle}></View>

          <Text style={styles.informationText}>Voucher</Text>

          <TouchableOpacity style={styles.cashContainer}>
            <Image
              source={ic_coupon}
              resizeMode="center"
              style={styles.cashImage}
            />
            <Text style={styles.cashText}>Voucher</Text>
            <Text style={styles.verificationText}>2</Text>
          </TouchableOpacity>

          <View style={styles.addPaymentContainer}>
            <TouchableOpacity>
              <Text style={styles.addPaymentText}>Add Voucher Code</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },
  cashContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(6),
    marginVertical: hp(2),
  },
  cashImage: {
    width: hp(4),
    aspectRatio: 1 / 1,
  },
  cashText: {
    fontSize: wp(4.2),
    marginLeft: wp(4),
  },
  addPaymentContainer: {
    marginHorizontal: wp(6),
    marginVertical: hp(2),
  },
  addPaymentText: {
    fontSize: wp(3.5),
    marginLeft: wp(1),
    color: '#286ef0',
  },
  bottomBorderStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#626262',
    marginHorizontal: wp(0.2),
  },
  informationText: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#626262',
    marginVertical: hp(2),
    marginHorizontal: wp(6),
  },
  verificationText: {
    fontSize: wp(3.5),
    marginLeft: wp(12),
    color: 'green',
  },
});
