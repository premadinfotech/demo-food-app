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
import ImageSlider from 'react-native-image-slider';
import Modal from 'react-native-modal';

// Component
import FoodListComponent from '../component/FoodListComponent';
import FooterComponent from '../component/FooterComponent';
import CustomLoader from '../component/CustomLoader';

// Icon
import ic_location from '../assets/icon/ic_location.png';
import ic_userProfile from '../assets/icon/ic_userProfile.png';
import ic_search from '../assets/icon/ic_search.png';

// Image
import banner from '../assets/image/banner.jpg';
import banner1 from '../assets/image/banner1.jpg';
import banner2 from '../assets/image/banner2.jpg';
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
          photo: burger,
        },
        {
          title: 'Burger King',
          rating: '4.7',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
          photo: pizza,
        },
        {
          title: 'Agarwal Farm',
          rating: '3',
          description: 'Chinese, Italian, American Fast Food',
          offerText: '60% OFF upto ₹120',
          timeText: '40 mins',
          photo: pasta,
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
    <FoodListComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {isLoading} = this.state;
    if (isLoading) {
      return <CustomLoader />;
    }

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
          horizontal={true}
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: hp(8),
            // backgroundColor: '#000',
            marginBottom: hp(2),
          }}>
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
          <View style={styles.sliderContainer}>
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
    height: wp(40),
    // marginVertical: hp(2),
    backgroundColor: '#fff',
    borderRadius: wp(4),
    marginHorizontal: wp(2),
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
