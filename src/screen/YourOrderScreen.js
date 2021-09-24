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
import YourOrderComponent from '../component/YourOrderComponent';
import CustomLoader from '../component/CustomLoader';

// Icon
import ic_back from '../assets/icon/ic_back.png';

// Image
import Laccha_pratha from '../assets/image/Laccha_pratha.jpg';
import Laccha_pratha1 from '../assets/image/Laccha_pratha1.jpg';
import Laccha_pratha2 from '../assets/image/Laccha_pratha2.jpg';
import Laccha_pratha3 from '../assets/image/Laccha_pratha3.jpg';

export default class YourOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [
        {
          restaurantName: 'Shree Ram Pavitra Bhojnalay',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha,
        },
        {
          restaurantName: 'Shree Hari Pavitra Bhojnalay',
          restaurantAddress: 'Rajapark Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha1,
        },
        {
          restaurantName: 'Shree Shyam Pavitra Bhojnalay',
          restaurantAddress: 'Vaishali Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha2,
        },
        {
          restaurantName: 'Mohan Ka Dhaba Pavitra Bhojnalay',
          restaurantAddress: 'Gangapol Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha3,
        },
        {
          restaurantName: 'Yaar Da Dhaba',
          restaurantAddress: 'Chandpol Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha,
        },
        {
          restaurantName: 'Shree Ram Pavitra Bhojnalay',
          restaurantAddress: 'C-Scheme Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: Laccha_pratha1,
        },
      ],
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

  handleBack = () => {
    this.props.navigation.pop();
  };

  renderItem = ({item}) => (
    <YourOrderComponent item={item} nav={this.props.navigation} />
  );

  keyExtractor = (item, index) => index.toString();

  itemSeparator = () => <View style={styles.separator} />;

  render() {
    const {isLoading, orderHistory} = this.state;

    if (isLoading) {
      return <CustomLoader />;
    }

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
          <Text style={styles.headerTitle}>Your Order</Text>
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
