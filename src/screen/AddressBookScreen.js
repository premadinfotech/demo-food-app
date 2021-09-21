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
import AddressBookComponent from '../component/AddressBookComponent';

// Image
import ic_back from '../assets/icon/ic_back.png';

export default class AddressBookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressList: [
        {
          restaurantName: 'HOME',
          restaurantAddress:
            'Gokul Bldg, Hari Niwas, M G Rd, Naupada, Thane (west)',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '29, Sham Sadan, B Bhaulane, Grant Road',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '421 Doshi Chambers, Chinch Bunder',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress:
            'Sagar Complex, M G Rd, Opp Ram Mandir Rd, Vile Parle(e)',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '40 Sahyadri Flats, Stadium Circle, Navrangpura',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '40 Sahyadri Flats, Stadium Circle, Navrangpura',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '40 Sahyadri Flats, Stadium Circle, Navrangpura',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '40 Sahyadri Flats, Stadium Circle, Navrangpura',
          orderPrice: '₹100',
        },
        {
          restaurantName: 'HOME',
          restaurantAddress: '40 Sahyadri Flats, Stadium Circle, Navrangpura',
          orderPrice: '₹100',
        },
      ],
    };
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  handleAccountSetting = () => {
    this.props.navigation.navigate('DeleteAccount');
  };

  renderItem = ({item}) => (
    <AddressBookComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {addressList} = this.state;
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
          <Text style={styles.headerTitle}>Address Book</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <Text style={styles.titleText}>My Address</Text>

          <View style={styles.addressContainer}>
            <Text style={styles.addAddressSymbol}>+</Text>

            <Text style={styles.addAddressText}>Add Address</Text>
          </View>

          <FlatList
            data={addressList}
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
    marginHorizontal: wp(2),
    marginVertical: hp(2),
  },
  titleText: {
    fontSize: hp(5),
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(2),
    borderBottomWidth: 0.5,
    borderBottomColor: '#999',
  },
  addAddressSymbol: {
    fontSize: wp(10),
    color: '#ef4f5f',
  },
  addAddressText: {
    fontSize: wp(4),
    fontWeight: '700',
    marginLeft: wp(2),
  },
  memberListContent: {
    padding: wp(2),
  },
  separator: {
    height: wp(2),
  },
});
