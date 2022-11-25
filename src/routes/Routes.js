/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Authentication Screens
import LoginScreen from '../screen/LoginScreen';
import OTPScreen from '../screen/OTPScreen';

// Home Screen
import HomeScreen from '../screen/HomeScreen';
import SearchFoodScreen from '../screen/SearchFoodScreen';
import MembershipScreen from '../screen/MembershipScreen';
import ProfileScreen from '../screen/ProfileScreen';
import EditProfileScreen from '../screen/EditProfileScreen';
import NotificationScreen from '../screen/NotificationScreen';
import BookmarkScreen from '../screen/BookMarkScreen';
import SearchFoodRestaurantScreen from '../screen/SearchFoodRestaurantScreen';
import SettingsScreen from '../screen/SettingsScreen';
import AddressBookScreen from '../screen/AddressBookScreen';
import AboutAppScreen from '../screen/AboutAppScreen';
import PaymentsScreen from '../screen/PaymentsScreen';
import Screen from '../screen/Screen';

// Delete Account
import DeleteAccountScreen from '../screen/DeleteAccountScreen';
import DeleteAccountScreen1 from '../screen/DeleteAccountScreen1';
import DeleteAccountScreen2 from '../screen/DeleteAccountScreen2';
import DeleteAccountScreen3 from '../screen/DeleteAccountScreen3';
import DeleteAccountScreen4 from '../screen/DeleteAccountScreen4';
import DeleteAccountScreen5 from '../screen/DeleteAccountScreen5';

// Your Ratings
import YourRatingsScreen from '../screen/YourRatingsScreen';

// Your Order
import YourOrderScreen from '../screen/YourOrderScreen';
import FavoriteOrderScreen from '../screen/FavoriteOrderScreen';
import NutritionOrderScreen from '../screen/NutritionOrderScreen';

const LoggedOutNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    OTP: OTPScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchFoodScreen,
    Membership: MembershipScreen,
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen,
    Notification: NotificationScreen,
    Bookmark: BookmarkScreen,
    SearchFoodRestaurant: SearchFoodRestaurantScreen,
    Settings: SettingsScreen,
    DeleteAccount: DeleteAccountScreen,
    DeleteAccount1: DeleteAccountScreen1,
    DeleteAccount2: DeleteAccountScreen2,
    DeleteAccount3: DeleteAccountScreen3,
    DeleteAccount4: DeleteAccountScreen4,
    DeleteAccount5: DeleteAccountScreen5,
    YourRatings: YourRatingsScreen,
    YourOrder: YourOrderScreen,
    FavoriteOrder: FavoriteOrderScreen,
    NutritionOrder: NutritionOrderScreen,
    AddressBook: AddressBookScreen,
    AboutApp: AboutAppScreen,
    Payments: PaymentsScreen,
    Screen: Screen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const SearchNavigator = createStackNavigator(
  {
    Search: SearchFoodScreen,
    SearchFoodRestaurant: SearchFoodRestaurantScreen,
    Screen: Screen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const MembershipNavigator = createStackNavigator(
  {
    Membership: MembershipScreen,
  },
  {
    initialRouteName: 'Membership',
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Profile',
    defaultNavigationOptions: {
      header: false,
    },
  },
);

const LoggedInNavigator = createSwitchNavigator(
  {
    Home: HomeNavigator,
    Search: SearchNavigator,
    Membership: MembershipNavigator,
    Profile: ProfileNavigator,
  },
  {
    initialRouteName: 'Home',
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      header: false,
    },
  },
);

export const createRootNavigator = isLoggedIn => {
  const ROUTES = {
    LoggedOut: LoggedOutNavigator,
    LoggedIn: LoggedInNavigator,
  };

  let initialRouteName = 'LoggedOut'; // have to do LoggedIn

  if (isLoggedIn) {
    initialRouteName = 'LoggedOut';
  }

  return createSwitchNavigator(ROUTES, {initialRouteName});
};
