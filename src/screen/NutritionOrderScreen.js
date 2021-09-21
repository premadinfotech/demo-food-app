/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';

// Component
import NutritionOrderComponent from '../component/NutritionOrderComponent';

// Icon
import ic_back from '../assets/icon/ic_back.png';

// Image
import Nutrition_food2 from '../assets/image/Nutrition_food2.jpg';
import Nutrition_food3 from '../assets/image/Nutrition_food3.jpg';
import Nutrition_food4 from '../assets/image/Nutrition_food4.jpg';

export default class NutritionOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [
        {
          restaurantName: 'Be Healthy',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food2,
        },
        {
          restaurantName: 'Veggie & Food',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food3,
        },
        {
          restaurantName: 'Stay Fit Hub',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food4,
        },
        {
          restaurantName: 'Hustle Fitness Food',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food2,
        },
        {
          restaurantName: 'Go Green Live Green',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food4,
        },
        {
          restaurantName: 'Veggie Hub',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Nutrition_food3,
        },
      ],
    };
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  renderItem = ({item}) => (
    <NutritionOrderComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {orderHistory} = this.state;

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
          <Text style={styles.headerTitle}>Nutrition Order</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <FlatList
            data={orderHistory}
            renderItem={this.renderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.itemSeparator}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.memberListContent}
          />
        </View>
      </SafeAreaView>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  memberListContent: {
    padding: wp(2),
  },
  separator: {
    height: wp(2),
  },
});
