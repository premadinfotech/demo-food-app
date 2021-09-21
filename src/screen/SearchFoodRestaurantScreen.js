/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView} from 'react-native-gesture-handler';

// Component
import RestaurantFoodComponent from '../component/RestaurantFoodComponent';

// Icon
import ic_scooter from '../assets/icon/ic_scooter.png';
import ic_stopwatch from '../assets/icon/ic_stopwatch.png';
import ic_offer from '../assets/icon/ic_offer.png';
import ic_search from '../assets/icon/ic_search.png';
import ic_back from '../assets/icon/ic_back.png';

// Image
import burger from '../assets/image/burger.jpg';
import pasta from '../assets/image/pasta.jpg';
import pizza from '../assets/image/pizza.jpg';

export default class SearchFoodRestaurantScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [
        {
          id: '1',
          title: 'KFC',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹120',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: burger,
          foodName: 'Burger',
        },
        {
          id: '2',
          title: 'Burger King',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹100',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pasta,
          foodName: 'Pizza',
        },
        {
          id: '3',
          title: 'Agarwal Farm',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹170',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pizza,
          foodName: 'French Fries',
        },
        {
          id: '4',
          title: 'KFC',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹180',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: burger,
          foodName: 'RedPasta',
        },
        {
          id: '5',
          title: 'Burger King',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹220',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pasta,
          foodName: 'White Pasta',
        },
        {
          id: '6',
          title: 'Agarwal Farm',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹200',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pizza,
          foodName: 'Momos',
        },
        {
          id: '7',
          title: 'KFC',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹150',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: burger,
          foodName: 'Chilli Potato',
        },
        {
          id: '8',
          title: 'Burger King',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹160',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pasta,
          foodName: 'Peppy Paneer Pizza',
        },
        {
          id: '9',
          title: 'Agarwal Farm',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹190',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pizza,
          foodName: 'Extra Large Veg Pizza',
        },
        {
          id: '10',
          title: 'KFC',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹170',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: burger,
          foodName: 'Extra Large Non-Veg Pizza',
        },
        {
          id: '11',
          title: 'Burger King',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹190',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pasta,
          foodName: 'King Burger (Large)',
        },
        {
          id: '12',
          title: 'Agarwal Farm',
          description: 'In Super Saver Deals(Upto Rs 125 OFF)',
          price: '₹120',
          detail:
            'Save Rs 60 | 2 Veg Whopper + 1 King Peri Peri Friends + Veggie Strips',
          photo: pizza,
          foodName: 'Las Vega Chilli Pizza',
        },
      ],
    };
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  renderItem = ({item}) => (
    <RestaurantFoodComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
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
          <Text style={styles.headerTitle}>Restaurant & Food</Text>
        </TouchableOpacity>

        <ScrollView>
          <View style={styles.homeContainer}>
            <View style={styles.restaurantInfoContainer}>
              <Text style={styles.restaurantTitleText}>Burger King</Text>
              <Text style={styles.foodCategoryTitle}>
                Burger, Fast Food, Beverages
              </Text>
              <Text style={styles.restaurantAddressTitle}>
                Malviya Nagar, Jaipur
              </Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>4.7 {'\n'} Delivery</Text>
              </View>

              <View style={styles.photoContainer}>
                <Text style={styles.ratingText}>18 {'\n'} Photo</Text>
              </View>

              <View style={[styles.direction, styles.memberLogo]}>
                <View style={styles.memberLogoContainer}>
                  <Image
                    source={ic_scooter}
                    style={styles.logoSize}
                    resizeMode="cover"
                  />
                </View>

                <Text style={styles.deliveryTypeText}>
                  MODE{'\n'}
                  <Text style={styles.deliveryTypeText2}>delivery</Text>
                </Text>

                <View style={styles.memberLogoContainer}>
                  <Image
                    source={ic_stopwatch}
                    style={styles.logoSize}
                    resizeMode="cover"
                  />
                </View>

                <Text style={styles.deliveryTypeText}>
                  TIME{'\n'}
                  <Text style={styles.deliveryTypeText2}>mins</Text>
                </Text>

                <View style={styles.memberLogoContainer}>
                  <Image
                    source={ic_offer}
                    style={styles.logoSize}
                    resizeMode="cover"
                  />
                </View>

                <Text style={styles.deliveryTypeText}>
                  OFFERS{'\n'}
                  <Text style={styles.deliveryTypeText2}>no offers</Text>
                </Text>
              </View>
            </View>

            <View style={styles.searchContainer}>
              <Image
                source={ic_search}
                resizeMode="cover"
                style={styles.searchIconStyle}
              />

              <TextInput
                style={styles.loginFormTextInput}
                placeholder="Search Food..."
                placeholderTextColor="#444444"
              />
            </View>

            <FlatList
              data={this.state.foodList}
              renderItem={this.renderItem}
              showsHorizontalScrollIndicator={false}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.itemSeparator}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.memberListContent}
            />
          </View>
        </ScrollView>
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
  },
  restaurantInfoContainer: {
    marginVertical: hp(2),
  },
  restaurantTitleText: {
    fontSize: wp(6),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  foodCategoryTitle: {
    fontSize: wp(3.5),
    marginLeft: wp(2),
    color: '#444444',
  },
  restaurantAddressTitle: {
    fontSize: wp(3.5),
    marginLeft: wp(2),
    color: '#666',
  },
  memberListContent: {
    padding: wp(2),
  },
  separator: {
    height: wp(2),
  },
  ratingContainer: {
    position: 'absolute',
    left: wp(80),
    right: 0,
    top: 0,
    bottom: 0,
    width: wp(22),
    height: hp(4.5),
    backgroundColor: '#24963f',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },
  photoContainer: {
    position: 'absolute',
    left: wp(80),
    right: 0,
    top: hp(5),
    bottom: 0,
    width: wp(22),
    height: hp(4.5),
    backgroundColor: '#3c7eee',
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  direction: {
    flexDirection: 'row',
  },
  memberLogo: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: hp(3),
    borderTopWidth: 1,
    marginHorizontal: wp(2),
  },
  memberLogoContainer: {
    borderRadius: wp(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(2),
    borderColor: '#f2f1f1',
    borderWidth: 2,
    overflow: 'hidden',
    elevation: 10,
    marginVertical: hp(2),
  },
  logoSize: {
    height: wp(6),
    aspectRatio: 1 / 1,
    borderRadius: wp(5),
  },
  deliveryTypeText: {
    fontSize: wp(3.5),
    color: '#444444',
  },
  deliveryTypeText2: {
    fontSize: wp(3.5),
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#616161',
    marginHorizontal: wp(4),
    borderRadius: wp(3),
  },
  searchIconStyle: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
  },
  loginFormTextInput: {
    fontSize: wp(4),
    // flex: 1,
    color: '#000',
  },
  viewCartButton: {
    position: 'absolute',
    height: hp(6),
    width: wp(50),
    top: hp(90),
    // left:wp(60)
    backgroundColor: '#ef4f5f',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
  },
  viewCartText: {
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#fff',
    marginHorizontal: wp(2),
  },
});
