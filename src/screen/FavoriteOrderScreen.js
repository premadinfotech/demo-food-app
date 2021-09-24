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
import FavoriteOrderComponent from '../component/FavoriteOrderComponent';
import CustomLoader from '../component/CustomLoader';

// Icon
import ic_back from '../assets/icon/ic_back.png';

// Image
import pasta from '../assets/image/pasta.jpg';
import pizza from '../assets/image/pizza.jpg';
import burger from '../assets/image/burger.jpg';

export default class FavoriteOrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [
        {
          restaurantName: 'KFC',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: pizza,
        },
        {
          restaurantName: 'MacCdy',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: pasta,
        },
        {
          restaurantName: 'Pizza HUT',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: burger,
        },
        {
          restaurantName: 'The Unlimited Pizza',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: pasta,
        },
        {
          restaurantName: 'BurgerKing',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: pizza,
        },
        {
          restaurantName: 'Pasta Party',
          restaurantAddress: 'Sodala Jaipur',
          orderPrice: '₹100',
          foodName: '1x Burger, 1x French Fries',
          orderDate: '21 Sep 2021 at 5:00 PM',
          image: burger,
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
    <FavoriteOrderComponent item={item} nav={this.props.navigation} />
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
          <Text style={styles.headerTitle}>Favorite Order</Text>
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
