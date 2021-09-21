/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Component
import FooterComponent from '../component/FooterComponent';

// Icon
import ic_location from '../assets/icon/ic_location.png';
import ic_stopwatch from '../assets/icon/ic_stopwatch.png';
import ic_vegetarian from '../assets/icon/ic_vegetarian.png';
import ic_discount from '../assets/icon/ic_discount.png';
import ic_back from '../assets/icon/ic_back.png';

// Image
import cart from '../assets/image/cart.png';

// User Preference
import {async_keys, getData} from '../api/UserPreference';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView} from 'react-navigation';

export default class MembershipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCart: null,
    };
  }

  handleBrowse = () => {
    AsyncStorage.removeItem(async_keys.getCartItem);

    this.props.navigation.navigate('Home');
  };

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    const findData = await getData(async_keys.getCartItem);
    this.setState({checkCart: findData});
  };

  handlePayNow = () => {
    AsyncStorage.removeItem(async_keys.getCartItem);

    this.props.navigation.navigate('Home');
  };

  handleBack = () => {
    AsyncStorage.removeItem(async_keys.getCartItem);

    this.props.navigation.navigate('Home');
  };

  render() {
    if (this.state.checkCart === null) {
      console.log('coming in IF');
      return (
        <View style={styles.container}>
          <View style={styles.homeContainer}>
            <Image source={cart} resizeMode="cover" style={styles.cartStyle} />

            <Text style={styles.captionText}>
              No Item in cart! Please continue browsing
            </Text>

            <View style={styles.browseCartContainer}>
              <Text style={styles.captionText1} onPress={this.handleBrowse}>
                Browse Restaurant
              </Text>
            </View>
          </View>

          <FooterComponent nav={this.props.navigation} />
        </View>
      );
    } else {
      console.log('coming in ELSE');
      return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={this.handleBack}
            style={styles.headerStyle}>
            <Image
              source={ic_back}
              resizeMode="cover"
              style={styles.leftArrowIcon}
            />
            <Text style={styles.headerTitle}>Cart</Text>
          </TouchableOpacity>

          <View style={styles.homeContainer1}>
            <View style={styles.headerContainer}>
              <Image
                source={ic_location}
                resizeMode="cover"
                style={styles.headerLocationIconStyle}
              />
              <Text style={styles.headerTextStyle}>
                Topkhana Desh, Chandpole Bazar Jaipur
              </Text>
            </View>

            <View style={styles.modalDeliveryContainer}>
              <Image
                source={ic_stopwatch}
                resizeMode="cover"
                style={styles.headerLocationIconStyle}
              />

              <View style={styles.contactDetail}>
                <Text style={styles.deliveryInMinsText}>
                  Delivery in{' '}
                  <Text style={styles.deliveryInMinsText1}>52 mins</Text>
                </Text>

                <View style={[styles.direction, styles.contactRow]}>
                  <Text style={styles.extraTimeText}>
                    May take 5-10 mins extra
                  </Text>
                </View>
              </View>
            </View>

            <ScrollView>
              <View style={styles.addedCartContainer}>
                <Image
                  source={ic_vegetarian}
                  resizeMode="cover"
                  style={styles.ic_vegetarianStyle}
                />

                <View style={styles.contactDetail}>
                  <Text style={styles.deliveryInMinsText}>
                    {this.state.checkCart[0].foodName}
                  </Text>

                  <View style={[styles.direction, styles.contactRow]}>
                    <Text style={styles.priceText}>
                      {this.state.checkCart[0].price}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.addedCartContainer}>
                <Image
                  source={ic_vegetarian}
                  resizeMode="cover"
                  style={styles.headerLocationIconStyle}
                />

                <View style={styles.contactDetail}>
                  <Text style={styles.deliveryInMinsText}>
                    {this.state.checkCart[0].foodName}
                  </Text>

                  <View style={[styles.direction, styles.contactRow]}>
                    <Text style={styles.priceText}>
                      {this.state.checkCart[0].price}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.offerContainer}>
                <Text style={styles.offerTitleText}>Offers</Text>
              </View>

              <View style={styles.offerContainer}>
                <Image
                  source={ic_discount}
                  resizeMode="cover"
                  style={styles.offerIconStyle}
                />

                <Text style={styles.offerPromotionText}>
                  Select a promo code
                </Text>

                <Text
                  style={styles.viewOfferText}
                  onPress={this.handleViewOffer}>
                  View offers
                </Text>
              </View>

              <View style={styles.finalPriceContainer}>
                <Text
                  style={{
                    fontSize: wp(3.5),
                    marginHorizontal: wp(2),
                    color: '#000',
                  }}>
                  Item Total
                </Text>

                <Text style={styles.grandTotalText}>₹406.00</Text>
              </View>

              <View style={styles.finalPriceContainer}>
                <Text style={styles.itemText}>Delivery Charge</Text>

                <Text style={styles.grandTotalText}>₹61</Text>
              </View>

              <View style={styles.finalPriceContainer}>
                <Text style={styles.itemText}>Taxes & charges</Text>

                <Text style={styles.grandTotalText}>₹53.30</Text>
              </View>

              <View style={styles.finalPriceContainer}>
                <Text style={styles.grandTotalPriceText}>Grand Total</Text>

                <Text style={styles.grandTotalFinalText}>₹520.30</Text>
              </View>

              <View style={styles.paymentContainer}>
                <Text style={{fontSize: wp(3.5), alignSelf: 'center'}}>
                  PayUsing
                </Text>

                <TouchableOpacity
                  onPress={this.handlePayNow}
                  style={styles.payButtonStyle}>
                  <Text
                    style={{
                      fontSize: wp(4),
                      marginHorizontal: wp(2),
                      color: '#fff',
                    }}>
                    Select Payment Method and Pay Now
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <Text style={styles.warningText}>
              Please press PayNow or Back Button for clearing cart!
            </Text>
          </View>
          <FooterComponent nav={this.props.navigation} />
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer1: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  cartStyle: {
    height: hp(30),
    width: wp(60),
  },
  browseCartContainer: {
    height: hp(5),
    borderWidth: 2,
    borderColor: 'orange',
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
  contactDetail: {
    width: wp(67),
  },
  direction: {
    flexDirection: 'row',
  },
  contactRow: {
    paddingVertical: hp(0.5),
  },
  foodImageStyle: {
    height: hp(10),
    width: wp(25),
    borderRadius: wp(2),
  },
  priceText: {
    fontSize: wp(3.5),
    color: '#444444',
    marginLeft: wp(2),
  },
  headerContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  headerLocationIconStyle: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
  },
  ic_vegetarianStyle: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
  },
  headerTextStyle: {
    fontSize: wp(4),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  modalDeliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2),
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  deliveryInMinsText: {
    fontSize: wp(4),
    marginLeft: wp(2),
  },
  deliveryInMinsText1: {
    fontSize: wp(4),
    fontWeight: '700',
  },
  extraTimeText: {
    fontSize: wp(3.5),
    color: '#ef4f5f',
    marginLeft: wp(2),
  },
  addedCartContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  offerContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(2),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  offerIconStyle: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
    marginBottom: hp(2),
  },
  offerTitleText: {
    fontSize: wp(5),
    fontWeight: '700',
    marginTop: hp(2),
  },
  offerPromotionText: {
    fontSize: wp(3.5),
    marginHorizontal: wp(2),
    color: '#6d6e74',
    marginBottom: hp(2),
  },
  viewOfferText: {
    fontSize: wp(3.5),
    color: '#6d6e74',
    marginLeft: 'auto',
    marginBottom: hp(2),
  },
  finalPriceContainer: {
    flexDirection: 'row',
    marginHorizontal: wp(2),
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    marginVertical: hp(0.5),
  },
  itemText: {
    fontSize: wp(3.5),
    marginHorizontal: wp(2),
    color: '#6d6e74',
  },
  grandTotalText: {
    fontSize: wp(3.5),
    color: '#6d6e74',
    marginLeft: 'auto',
  },
  grandTotalPriceText: {
    fontSize: wp(6),
    fontWeight: '700',
    color: '#000',
    marginLeft: wp(2),
    marginVertical: hp(2),
  },
  grandTotalFinalText: {
    fontSize: wp(6),
    fontWeight: '700',
    color: '#000',
    marginLeft: 'auto',
    marginVertical: hp(2),
  },
  paymentContainer: {
    // height: hp(20),
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(2),
    // marginBottom: hp(2),
  },
  payButtonStyle: {
    height: hp(8),
    backgroundColor: '#ef4f5f',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(50),
    borderRadius: wp(2),
  },
  warningText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: hp(4),
  },
});
