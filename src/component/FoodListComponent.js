/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Image
// import burger from '../assets/image/burger.jpg';
// import pasta from '../assets/image/pasta.jpg';
// import pizza from '../assets/image/pizza.jpg';

class FoodListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFindFoodRestaurant = () => {
    this.props.navigation.navigate('SearchFoodRestaurant');
  };

  render() {
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={this.handleFindFoodRestaurant}>
          <Image
            source={this.props.item.photo}
            resizeMode="cover"
            style={styles.foodImageStyle}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.restaurantName}>{this.props.item.title}</Text>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{this.props.item.rating}</Text>
            </View>
          </View>
          <Text style={styles.foodDescriptionText}>
            {this.props.item.description}
          </Text>

          <View style={styles.offerContainer}>
            <Text style={styles.offerText}>{this.props.item.offerText}</Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{this.props.item.timeText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(FoodListComponent);

const styles = StyleSheet.create({
  listContainer: {
    // padding: wp(2),
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(2),
  },
  foodImageStyle: {
    height: hp(30),
    width: '100%',
    borderRadius: wp(2),
    // aspectRatio: 1 / 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontSize: wp(5),
    margin: 8,
  },
  ratingBox: {
    height: hp(3),
    width: wp(12),
    backgroundColor: '#24963f',
    borderRadius: wp(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  ratingText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#fff',
  },
  foodDescriptionText: {
    fontSize: wp(3.5),
    color: '#444444',
    marginBottom: hp(2),
    marginLeft: wp(2),
  },
  offerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: hp(22),
    bottom: 0,
    width: wp(22),
    height: hp(4.5),
    backgroundColor: '#3c7eee',
    // borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerText: {
    fontSize: wp(3.2),
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  timeContainer: {
    position: 'absolute',
    right: 0,
    top: hp(24),
    bottom: 0,
    width: wp(15),
    height: hp(3),
    backgroundColor: '#f1f1f1',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(4),
  },
  timeText: {
    fontSize: wp(3),
    color: '#000',
  },
});
