/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Component
import FooterComponent from '../component/FooterComponent';

// Image
import cart from '../assets/image/cart.png';

export default class MembershipScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBrowse = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
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
