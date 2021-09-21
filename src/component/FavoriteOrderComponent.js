/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {PureComponent} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import {withNavigation} from 'react-navigation';

// Icons
import ic_rate_star from '../assets/icon/ic_rate_star.png';
import ic_golden_star from '../assets/icon/ic_golden_star.png';

export class FavoriteOrderComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkRating: false,
      uri: ic_rate_star,
      checkRating1: false,
      uri1: ic_rate_star,
      checkRating2: false,
      uri2: ic_rate_star,
      checkRating3: false,
      uri3: ic_rate_star,
      checkRating4: false,
      uri4: ic_rate_star,
    };
  }

  handleRating = () => {
    if (this.state.checkRating === false) {
      this.setState({checkRating: true, uri: ic_golden_star});
    } else {
      this.setState({checkRating: false, uri: ic_rate_star});
    }
  };

  handleRating1 = () => {
    if (this.state.checkRating1 === false) {
      this.setState({checkRating1: true, uri1: ic_golden_star});
    } else {
      this.setState({checkRating1: false, uri1: ic_rate_star});
    }
  };

  handleRating2 = () => {
    if (this.state.checkRating2 === false) {
      this.setState({checkRating2: true, uri2: ic_golden_star});
    } else {
      this.setState({checkRating2: false, uri2: ic_rate_star});
    }
  };

  handleRating3 = () => {
    if (this.state.checkRating3 === false) {
      this.setState({checkRating3: true, uri3: ic_golden_star});
    } else {
      this.setState({checkRating3: false, uri3: ic_rate_star});
    }
  };

  handleRating4 = () => {
    if (this.state.checkRating4 === false) {
      this.setState({checkRating4: true, uri4: ic_golden_star});
    } else {
      this.setState({checkRating4: false, uri4: ic_rate_star});
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.listContainer}>
        <View style={[styles.direction, styles.memberLogo]}>
          <View style={styles.memberLogoContainer}>
            <Image
              source={this.props.item.image}
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

          <Text style={styles.priceText}>{this.props.item.orderPrice}</Text>
        </View>

        <View style={styles.borderStyle}></View>

        <View style={styles.direction}>
          <Text style={styles.pickTitleText}>ITEMS</Text>
        </View>

        <Text style={styles.pickLocationText}>{this.props.item.foodName}</Text>

        <Text style={styles.destinationTitleText}>ORDERED ON</Text>
        <View style={styles.allRideContainer}>
          <Text style={styles.destinationLocationText}>
            {this.props.item.orderDate}
          </Text>
        </View>

        <View style={styles.borderStyle}></View>

        <View style={styles.rateContainer}>
          <Text style={styles.rateOrderText}>Rate Order</Text>

          <View style={styles.containRatingContainer}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.ratingStarStyles}
              onPress={this.handleRating}>
              <Text style={styles.ratingText}>1</Text>
              <Image
                source={this.state.uri}
                resizeMode="cover"
                style={styles.rateStartIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={styles.ratingStarStyles}
              onPress={this.handleRating1}>
              <Text style={styles.ratingText}>2</Text>
              <Image
                source={this.state.uri1}
                resizeMode="cover"
                style={styles.rateStartIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={styles.ratingStarStyles}
              onPress={this.handleRating2}>
              <Text style={styles.ratingText}>3</Text>
              <Image
                source={this.state.uri2}
                resizeMode="cover"
                style={styles.rateStartIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={styles.ratingStarStyles}
              onPress={this.handleRating3}>
              <Text style={styles.ratingText}>4</Text>
              <Image
                source={this.state.uri3}
                resizeMode="cover"
                style={styles.rateStartIcon}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={1}
              style={styles.ratingStarStyles}
              onPress={this.handleRating4}>
              <Text style={styles.ratingText}>5</Text>
              <Image
                source={this.state.uri4}
                resizeMode="cover"
                style={styles.rateStartIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(FavoriteOrderComponent);

const styles = StyleSheet.create({
  listContainer: {
    // height: hp(30),
    padding: wp(2),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(2),
  },
  pickTitleText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    marginVertical: hp(1),
    marginLeft: wp(2),
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
    marginVertical: hp(1),
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
    paddingBottom: wp(2),
  },
  logoSize: {
    height: wp(15),
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
