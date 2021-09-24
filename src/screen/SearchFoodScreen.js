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
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';

// Component
import SearchFoodComponent from '../component/SearchFoodComponent';
import FooterComponent from '../component/FooterComponent';
import SpecialFoodComponent from '../component/SpecialFoodComponent';

// Icon
import ic_location from '../assets/icon/ic_location.png';
import ic_userProfile from '../assets/icon/ic_userProfile.png';
import ic_search from '../assets/icon/ic_search.png';
import ic_outdoor from '../assets/icon/ic_outdoor.png';
import ic_diamond from '../assets/icon/ic_diamond.png';
import ic_romantic from '../assets/icon/ic_romantic.png';
import ic_pro from '../assets/icon/ic_pro.png';
import ic_cafe from '../assets/icon/ic_cafe.png';
import ic_event from '../assets/icon/ic_event.png';
import ic_bar from '../assets/icon/ic_bar.png';
import ic_restaurant from '../assets/icon/ic_restaurant.png';
import ic_buffet from '../assets/icon/ic_buffet.png';
import ic_sweets from '../assets/icon/ic_sweets.png';
import ic_healthy from '../assets/icon/ic_healthy.png';
import ic_pure_veg from '../assets/icon/ic_pure_veg.png';

import CustomLoader from '../component/CustomLoader';

// Image
// import banner from '../assets/image/banner.jpg';
// import banner1 from '../assets/image/banner1.jpg';
// import banner2 from '../assets/image/banner2.jpg';
import burger from '../assets/image/burger.jpg';
import pizza from '../assets/image/pizza.jpg';
import pasta from '../assets/image/pasta.jpg';

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
          photo: pizza,
        },
        {
          title: 'Burger King',
          rating: '4.7',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
          photo: pasta,
        },
        {
          title: 'Agarwal Farm',
          rating: '3',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
          photo: burger,
        },
      ],
      isVisible: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(this.initialSetup, 2000);
  }

  initialSetup = async () => {
    try {
      this.setState({isLoading: false});
    } catch (error) {
      console.log(error.message);
    }
  };

  handlePopUp = () => {
    this.setState({isVisible: true});
  };

  handleExit = () => {
    this.setState({isVisible: false});
  };

  handleProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  renderItem = ({item}) => (
    <SearchFoodComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <CustomLoader />;
    }
    const {navigation} = this.props;
    // const images = [banner, banner1, banner2];

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
              <TouchableOpacity activeOpacity={1} onPress={this.handleProfile}>
                <Image
                  source={ic_userProfile}
                  resizeMode="cover"
                  style={styles.userProfileStyle}
                />
              </TouchableOpacity>
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

        <ScrollView
          contentContainerStyle={{height: hp(6), marginBottom: hp(2)}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Modal style={styles.modalStyle} isVisible={this.state.isVisible}>
            <View style={styles.contentContainer}>
              <View style={styles.midContentContainer}>
                <Text style={styles.mobileNumber}>Coming Soon</Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={this.handleExit}>
                  <Text style={styles.exitText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Max Pro</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Cuisine</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Offer</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Membership</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Try New</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handlePopUp}>
            <View style={styles.scrollItemContainer}>
              <Text style={styles.scrollTextStyle}>Covid Max Safety</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView>
          <View style={styles.tileGroup}>
            <View style={styles.tileContainer}>
              <SpecialFoodComponent
                route="Screen"
                title="Outdoor"
                tileIcon={ic_outdoor}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Premium"
                tileIcon={ic_diamond}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Romantic"
                tileIcon={ic_romantic}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Pro"
                tileIcon={ic_pro}
                nav={navigation}
              />
            </View>

            <View style={styles.tileContainer}>
              <SpecialFoodComponent
                route="Screen"
                title="Cafe"
                tileIcon={ic_cafe}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="events"
                tileIcon={ic_event}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Pubs & bars"
                tileIcon={ic_bar}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Restaurant"
                tileIcon={ic_restaurant}
                nav={navigation}
              />
            </View>

            <View style={styles.tileContainer}>
              <SpecialFoodComponent
                route="Screen"
                title="Buffet"
                tileIcon={ic_buffet}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Desserts"
                tileIcon={ic_sweets}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Healthy"
                tileIcon={ic_healthy}
                nav={navigation}
              />
              <SpecialFoodComponent
                route="Screen"
                title="Pure Veg"
                tileIcon={ic_pure_veg}
                nav={navigation}
              />
            </View>
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
        </ScrollView>

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
    justifyContent: 'space-around',
    // marginHorizontal: wp(2),
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
    // height: hp(40),
    flex: 1,
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
  tileGroup: {
    height: hp(30),
    // backgroundColor: '#696969',
    // flex: 1,
    padding: wp(1),
    backgroundColor: '#e7e7e7',
  },
  tileContainer: {
    flex: 1,
    marginVertical: wp(1),
    marginHorizontal: wp(2),
    flexDirection: 'row',
  },
  modalStyle: {
    backgroundColor: '#ffffff00',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  contentContainer: {
    width: wp(84),
    padding: wp(5),
    borderRadius: 2,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  midContentContainer: {
    justifyContent: 'space-around',
  },
  item: {
    fontSize: wp(3.5),
    color: '#000',
  },
  mobileNumber: {
    marginTop: hp(2),
    fontSize: wp(3.5),
    fontWeight: '700',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  exitText: {
    paddingLeft: wp(2),
    fontWeight: '700',
    fontSize: wp(3.5),
    color: '#ef4f5f',
    marginLeft: wp(3),
  },
});
