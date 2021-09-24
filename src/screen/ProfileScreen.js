/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// Component
import FooterComponent from '../component/FooterComponent';
import ProfileItemTileComponent from '../component/ProfileItemTileComponent';
import CustomLoader from '../component/CustomLoader';

// Icon
import ic_userProfile from '../assets/icon/ic_userProfile.png';
import ic_bookmark from '../assets/icon/ic_bookmark.png';
import ic_bell from '../assets/icon/ic_bell.png';
import ic_settings from '../assets/icon/ic_settings.png';
import ic_card from '../assets/icon/ic_card.png';
import ic_star from '../assets/icon/ic_star.png';
import ic_renew from '../assets/icon/ic_renew.png';
import ic_about from '../assets/icon/ic_about.png';
import ic_address from '../assets/icon/ic_address.png';
import ic_favorite from '../assets/icon/ic_favorite.png';
import ic_food_package from '../assets/icon/ic_food_package.png';
import ic_help from '../assets/icon/ic_help.png';
import ic_time from '../assets/icon/ic_time.png';
import ic_logout from '../assets/icon/ic_logout.png';
import {ScrollView} from 'react-native-gesture-handler';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleEditProfile = () => {
    this.props.navigation.navigate('EditProfile');
  };

  handleYourRatings = () => {
    this.props.navigation.navigate('YourRatings');
  };

  handleScreen = () => {
    this.props.navigation.navigate('Screen');
  };

  handleYourOrder = () => {
    this.props.navigation.navigate('YourOrder');
  };

  handleFavoriteOrder = () => {
    this.props.navigation.navigate('FavoriteOrder');
  };

  handleNutritionOrder = () => {
    this.props.navigation.navigate('NutritionOrder');
  };

  handleAddressBook = () => {
    this.props.navigation.navigate('AddressBook');
  };

  handleAboutApp = () => {
    this.props.navigation.navigate('AboutApp');
  };

  handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure, you want to logout?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: this.handleLogoutOkPress},
      ],
      {cancelable: false},
    );
  };

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return <CustomLoader />;
    }

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.contactDetail}>
            <View style={[styles.direction, styles.contactRow]}>
              <Text style={styles.nameText}>Ahsan</Text>
            </View>

            <View style={[styles.direction, styles.contactRow]}>
              <Text style={styles.emailText}>ahsanpremad@gmail.com</Text>
            </View>

            <View style={[styles.direction, styles.contactRow]}>
              <Text
                style={styles.editProfileText}
                onPress={this.handleEditProfile}>
                Edit Profile ›
              </Text>
            </View>
          </View>

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

        <ScrollView>
          <View style={styles.tileContainer}>
            <View style={styles.tileContainer}>
              <ProfileItemTileComponent
                route="Bookmark"
                title="Bookmark"
                tileIcon={ic_bookmark}
                nav={navigation}
              />
            </View>

            <View style={styles.tileContainer}>
              <ProfileItemTileComponent
                route="Notification"
                title="Notification"
                tileIcon={ic_bell}
                nav={navigation}
              />
            </View>

            <View style={styles.tileContainer}>
              <ProfileItemTileComponent
                route="Settings"
                title="Settings"
                tileIcon={ic_settings}
                nav={navigation}
              />
            </View>

            <View style={styles.tileContainer}>
              <ProfileItemTileComponent
                route="Payments"
                title="Payments"
                tileIcon={ic_card}
                nav={navigation}
              />
            </View>
          </View>

          <View style={styles.yourRatingContainer}>
            <Image
              source={ic_star}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text
              style={styles.optionTextStyle}
              onPress={this.handleYourRatings}>
              Your Rating
            </Text>
          </View>

          <Text style={styles.headingOptionText1}>FOOD APP PRO</Text>
          <View style={styles.optionsContainer}>
            <Image
              source={ic_renew}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleScreen}>
              Renew Membership
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_time}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleScreen}>
              Pro Transaction History
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_help}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleScreen}>
              Pro Help
            </Text>
          </View>

          <Text style={styles.headingOptionText} onPress={this.handleScreen}>
            FOOD ORDERS
          </Text>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_food_package}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleYourOrder}>
              Your Orders
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_favorite}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text
              style={styles.optionTextStyle}
              onPress={this.handleFavoriteOrder}>
              Favorite Orders
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_address}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text
              style={styles.optionTextStyle}
              onPress={this.handleAddressBook}>
              Address Book
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_help}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleScreen}>
              Online Ordering Help
            </Text>
          </View>

          <Text style={styles.headingOptionText}>NUTRITION ORDERS</Text>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_food_package}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text
              style={styles.optionTextStyle}
              onPress={this.handleNutritionOrder}>
              Your Orders
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_about}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleAboutApp}>
              About
            </Text>
          </View>

          <View style={styles.optionsContainer}>
            <Image
              source={ic_logout}
              resizeMode="cover"
              style={styles.optionIconStyle}
            />

            <Text style={styles.optionTextStyle} onPress={this.handleLogout}>
              Log Out
            </Text>
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
  profileInfoContainer: {
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#4444',
    marginHorizontal: wp(2),
  },
  direction: {
    flexDirection: 'row',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  userProfileStyle: {
    height: hp(10),
    aspectRatio: 1 / 1,
    borderRadius: wp(20),
    marginTop: hp(2),
  },
  contactDetail: {
    paddingHorizontal: hp(2),
    width: wp(67),
  },
  contactRow: {
    paddingVertical: hp(0.5),
    alignItems: 'center',
  },
  nameText: {
    fontSize: wp(5),
    fontWeight: '700',
  },
  emailText: {
    fontSize: wp(3.5),
  },
  editProfileText: {
    fontSize: wp(3.5),
    color: '#e32d48',
  },
  tileGroup: {
    padding: wp(1),
  },
  tileContainer: {
    flex: 1,
    height: hp(8),
    flexDirection: 'row',
  },
  yourRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2),
    borderTopWidth: 1,
    borderTopColor: '#4444',
    borderBottomWidth: 1,
    borderBottomColor: '#4444',
  },
  optionIconStyle: {
    width: hp(3.5),
    aspectRatio: 1 / 1,
    marginVertical: hp(2),
    marginHorizontal: wp(2),
  },
  optionTextStyle: {
    fontSize: wp(3.5),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2),
  },
  headingOptionText1: {
    fontSize: wp(4),
    fontWeight: '700',
    marginHorizontal: wp(2),
    marginTop: hp(1),
    color: '#4444',
  },
  headingOptionText: {
    fontSize: wp(4),
    fontWeight: '700',
    marginHorizontal: wp(2),
    color: '#4444',
  },
});
