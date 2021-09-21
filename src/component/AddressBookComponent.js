/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import {withNavigation} from 'react-navigation';

// Icons
import ic_house from '../assets/icon/ic_house.png';

export class AddressBookComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.listContainer}>
        <View style={[styles.direction, styles.memberLogo]}>
          <View style={styles.memberLogoContainer}>
            <Image
              source={ic_house}
              resizeMode="cover"
              style={styles.logoSize}
            />
          </View>

          <View style={styles.contactDetail}>
            <Text style={styles.nameText}>
              {this.props.item.restaurantName}
            </Text>

            <Text style={styles.rideText}>
              {this.props.item.restaurantAddress}
            </Text>
          </View>
        </View>

        <View style={styles.borderStyle}></View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(AddressBookComponent);

const styles = StyleSheet.create({
  listContainer: {
    // height: hp(30),
    // padding: wp(2),
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: wp(2),
  },
  pickTitleText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#636363',
  },
  allRideContainer: {
    flexDirection: 'row',
  },
  pickLocationText: {
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  destinationTitleText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    marginVertical: hp(1),
    marginLeft: wp(2),
    color: '#636363',
  },
  destinationLocationText: {
    fontSize: wp(3.5),
    marginLeft: wp(2),
  },
  borderStyle: {
    borderTopWidth: 1,
    borderTopColor: '#999',
    // marginVertical: hp(1),
    marginTop: hp(1),
  },
  rideText: {
    fontSize: wp(3.5),
    color: '#636363',
  },
  priceText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#000',
    marginLeft: 'auto',
    marginBottom: hp(5),
  },
  direction: {
    flexDirection: 'row',
  },
  memberLogoContainer: {
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
    borderColor: '#dddddd',
    padding: wp(0.5),
  },
  nameText: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#000',
    flexShrink: 1,
  },
  memberLogo: {
    alignItems: 'center',
  },
  logoSize: {
    height: wp(6),
    aspectRatio: 1 / 1,
    borderRadius: wp(2),
  },
  contactDetail: {
    paddingHorizontal: hp(1),
    width: wp(50),
  },
  rateContainer: {
    // backgroundColor: '#f1f1f1',
  },
  containRatingContainer: {
    flexDirection: 'row',
  },
  rateOrderText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#ef4f5f',
    marginVertical: hp(1),
  },
  ratingStarStyles: {
    height: hp(3),
    width: wp(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderRadius: wp(2),
    marginHorizontal: wp(0.5),
  },
  ratingText: {
    fontSize: wp(3.5),
  },
  rateStartIcon: {
    width: hp(1.5),
    aspectRatio: 1 / 1,
  },
});
