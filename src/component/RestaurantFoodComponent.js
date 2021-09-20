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
  Alert,
} from 'react-native';
import {ScrollView, withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

// Icon
import ic_location from '../assets/icon/ic_location.png';
import ic_stopwatch from '../assets/icon/ic_stopwatch.png';
import ic_vegetarian from '../assets/icon/ic_vegetarian.png';
import ic_discount from '../assets/icon/ic_discount.png';
import ic_cancel from '../assets/icon/ic_cancel.png';

export default class RestaurantFoodComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCartItem: '0',
      isVisible: false,
    };
  }

  handleCart = () => {
    this.setState({checkCartItem: 1, isVisible: true});
  };

  handleClosePop = () => {
    this.setState({
      isVisible: false,
    });
  };

  handleViewOffer = () => {
    Alert.alert('No Offer', 'No Offer Available Yet', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.contactDetail}>
            <Text style={styles.restaurantName}>{this.props.item.title}</Text>

            <View style={[styles.direction, styles.contactRow]}>
              <Text style={styles.foodDescriptionText}>
                {this.props.item.description}
              </Text>
            </View>

            <View
              style={[styles.direction, styles.contactRow]}
              numberOfLines={2}>
              <Text style={styles.priceText}>{this.props.item.price}</Text>
            </View>

            <View style={[styles.direction, styles.contactRow]}>
              <Text style={styles.foodDetailText} numberOfLines={2}>
                {this.props.item.detail}
              </Text>
            </View>
          </View>

          <Image
            source={this.props.item.photo}
            resizeMode="cover"
            style={styles.foodImageStyle}
          />
        </View>

        {this.state.checkCartItem === '0' ? (
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={this.handleCart}>
            <Text style={styles.addText}>ADD+</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={this.handleCart1}>
            <Text style={styles.addText}>ADDED</Text>
          </TouchableOpacity>
        )}

        <Modal isVisible={this.state.isVisible} style={styles.modalStyle}>
          <TouchableOpacity onPress={this.handleClosePop}>
            <Image
              source={ic_cancel}
              resizeMode="cover"
              style={{
                height: hp(2),
                aspectRatio: 1 / 1,
                marginLeft: 'auto',
                margin: 6,
              }}
            />
          </TouchableOpacity>
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
                style={styles.headerLocationIconStyle}
              />

              <View style={styles.contactDetail}>
                <Text style={styles.deliveryInMinsText}>
                  Delivery in{' '}
                  <Text style={styles.deliveryInMinsText1}>52 mins</Text>
                </Text>

                <View style={[styles.direction, styles.contactRow]}>
                  <Text style={styles.priceText}>$406</Text>
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
                  Delivery in{' '}
                  <Text style={styles.deliveryInMinsText1}>52 mins</Text>
                </Text>

                <View style={[styles.direction, styles.contactRow]}>
                  <Text style={styles.priceText}>$139</Text>
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

              <Text style={styles.offerPromotionText}>Select a promo code</Text>

              <Text style={styles.viewOfferText} onPress={this.handleViewOffer}>
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

              <TouchableOpacity style={styles.payButtonStyle}>
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
        </Modal>
      </View>
    );
  }
}

// export default withNavigation(FoodListComponent);

const styles = StyleSheet.create({
  listContainer: {
    // padding: wp(2),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(2),
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
    // aspectRatio: 1 / 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: wp(5),
    marginLeft: wp(2),
  },
  ratingText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#fff',
  },
  foodDescriptionText: {
    fontSize: wp(3.5),
    color: '#666666',
    marginLeft: wp(2),
  },
  priceText: {
    fontSize: wp(3.5),
    color: '#444444',
    marginLeft: wp(2),
  },
  foodDetailText: {
    fontSize: wp(3.5),
    color: '#999999',
    marginLeft: wp(2),
  },
  addButtonStyle: {
    position: 'absolute',
    top: hp(8),
    left: hp(34.5),
    height: hp(4),
    backgroundColor: '#fff6f7',
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ef4f5f',
    borderRadius: wp(3),
  },
  addText: {
    fontSize: wp(4),
    fontWeight: '700',
    color: '#ef4f5f',
  },
  modalStyle: {
    // flex: 1,
    width: 'auto',
    justifyContent: 'center',
    textAlign: 'center',
    top: hp(30),
    margin: 0,
    backgroundColor: '#fff',
    borderRadius: wp(2),
  },
  headerContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  headerLocationIconStyle: {
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
  contactDetail1: {
    width: wp(67),
  },
  direction1: {
    flexDirection: 'row',
  },
  contactRow1: {
    paddingVertical: hp(0.5),
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
    alignItems: 'center',
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
});
