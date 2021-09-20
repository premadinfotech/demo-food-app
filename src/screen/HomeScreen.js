/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ImageSlider from 'react-native-image-slider';

// Component
import FoodListComponent from '../component/FoodListComponent';
import FooterComponent from '../component/FooterComponent';

// Icon
import ic_location from '../assets/icon/ic_location.png';
import ic_userProfile from '../assets/icon/ic_userProfile.png';
import ic_search from '../assets/icon/ic_search.png';

// Image
import banner from '../assets/image/banner.jpg';
import banner1 from '../assets/image/banner1.jpg';
import banner2 from '../assets/image/banner2.jpg';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: [
        {
          title: 'KFC',
          rating: '3.7',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
        },
        {
          title: 'Burger King',
          rating: '4.7',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
        },
        {
          title: 'Agarwal Farm',
          rating: '3',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
        },
      ],
    };
  }

  renderItem = ({item}) => (
    <FoodListComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const images = [banner, banner1, banner2];
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={ic_location}
            resizeMode="cover"
            style={styles.headerLocationIconStyle}
          />
          <Text style={styles.headerTextStyle}>
            Topkhana Desh, Chandpole Bazar Jaipur
          </Text>

          <View style={styles.userLogo}>
            <View style={styles.userLogoContainer}>
              <Image
                source={ic_userProfile}
                resizeMode="cover"
                style={styles.userProfileStyle}
              />
            </View>
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
            placeholder="Restaurant name, cuisine or dish name..."
            placeholderTextColor="#444444"
          />
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Max Pro</Text>
          </View>

          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Cuisine</Text>
          </View>

          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Offer</Text>
          </View>

          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Membership</Text>
          </View>

          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Try New</Text>
          </View>

          <View style={styles.scrollItemContainer}>
            <Text style={styles.scrollTextStyle}>Covid Max Safety</Text>
          </View>
        </ScrollView>

        <View
          style={{
            height: wp(40),
            marginVertical: hp(2),
            backgroundColor: '#fff',
            borderRadius: wp(4),
            marginHorizontal: wp(2),
          }}>
          <ImageSlider
            loop
            loopBothSides
            autoPlayWithInterval={2000}
            images={images}
          />
        </View>

        <View style={styles.homeContainer}>
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

        <FooterComponent nav={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    backgroundColor: '#fff',
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
  userProfileStyle: {
    height: hp(4),
    aspectRatio: 1 / 1,
    borderRadius: wp(20),
    marginLeft: wp(4),
  },
  userLogo: {
    alignItems: 'center',
    paddingBottom: wp(2),
  },
  userLogoContainer: {
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
    borderColor: '#dddddd',
    padding: wp(0.5),
  },
  searchContainer: {
    flexDirection: 'row',
    height: hp(6),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#616161',
    marginVertical: hp(2),
    marginHorizontal: wp(4),
    borderRadius: wp(3),
  },
  searchIconStyle: {
    width: hp(3),
    aspectRatio: 1 / 1,
    marginLeft: wp(2),
  },
  loginFormTextInput: {
    fontSize: wp(3.5),
    // flex: 1,
    color: '#000',
  },
  scrollItemContainer: {
    flexDirection: 'row',
    height: hp(4),
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#616161',
    marginHorizontal: wp(2),
    borderRadius: wp(3),
  },
  scrollTextStyle: {
    fontSize: wp(3.5),
    fontWeight: '700',
    marginHorizontal: wp(2),
  },
  homeContainer: {
    height: hp(40),
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  sliderContainer: {
    height: hp(24),
    marginHorizontal: wp(0.3),
    marginTop: hp(6),
  },
  menuListContainer: {
    width: 'auto',
    height: hp(30),
    backgroundColor: '#fff',
  },
  menuListText: {
    fontSize: wp(5),
    fontWeight: '700',
    marginHorizontal: wp(2),
  },
  memberListContent: {
    padding: wp(2),
  },
  separator: {
    height: wp(2),
  },
});
