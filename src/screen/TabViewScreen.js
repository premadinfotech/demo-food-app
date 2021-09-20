/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// Tabs
import Home from '../screen/HomeScreen';
import SearchFood from '../screen/SearchFoodScreen';
import Membership from '../screen/MembershipScreen';
import Donation from '../screen/DonationScreen';

// Icon

export default class TabViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: null,
      isLoading: false,
      tabView: {
        index: 0,
        routes: [
          {key: 'Home', title: 'Home', icon: 'Home'},
          {key: 'MainNews', title: 'Search', icon: 'MainNews'},
          {key: 'CountryWorld', title: 'Membership', icon: 'CountryWorld'},
          {key: 'Play', title: 'Donation', icon: 'Play'},
        ],
      },
    };

    // this.fetchCategoryIndex();
    // console.log(this.state.tabView.routes);

    // configuring TabView
    const window = Dimensions.get('window');
    const {width} = window;
    this.initialLayout = {width};

    // SceneMap Routing
    const {navigation} = this.props;

    const HomeRoute = () => <Home nav={navigation} />;

    const MainNewsRoute = () => (
      <SearchFood handleTabChange={this.handleTabIndexChange} />
    );

    const CountryWorldRoute = () => (
      <Membership handleTabChange={this.handleTabIndexChange} />
    );

    const PlayRoute = () => (
      <Donation handleTabChange={this.handleTabIndexChange} />
    );

    this.sceneMap = SceneMap({
      Home: HomeRoute,
      MainNews: MainNewsRoute,
      CountryWorld: CountryWorldRoute,
      Play: PlayRoute,
    });
  }

  initialSetup = async () => {
    try {
      this.setState({isLoading: false});
    } catch (error) {
      console.log(error.message);
    }
  };

  handleTabIndexChange = index => {
    const tabView = {...this.state.tabView, index};
    this.setState({tabView});
    // console.log('checking on click');
  };

  //   renderIcon = route => {
  //     let tabIcons;
  //     let key = route.route.key;

  //     key === 'Home'
  //       ? (tabIcons = hot_cup)
  //       : key === 'MainNews'
  //       ? (tabIcons = atom)
  //       : key === 'CountryWorld'
  //       ? (tabIcons = global)
  //       : key === 'Play'
  //       ? (tabIcons = politician)
  //       : key === 'Business'
  //       ? (tabIcons = clapperboard)
  //       : key === 'Travel'
  //       ? (tabIcons = trophy)
  //       : key === 'Career'
  //       ? (tabIcons = popcorn)
  //       : key === 'Technology'
  //       ? (tabIcons = promotion)
  //       : key === 'Science'
  //       ? (tabIcons = business)
  //       : key === 'Rajasthan'
  //       ? (tabIcons = business)
  //       : key === 'Health'
  //       ? (tabIcons = promotion)
  //       : key === 'Politics'
  //       ? (tabIcons = technology)
  //       : key === 'Entertainment'
  //       ? (tabIcons = healthy_lifestyle)
  //       : key === 'Lifestyle'
  //       ? (tabIcons = fake_news)
  //       : '';

  //     return (
  //       <Image source={tabIcons} resizeMode="cover" style={styles.tabIcon} />
  //     );
  //   };

  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.tabBarIndicator}
      style={styles.tabBarStyle}
      scrollEnabled={true}
      renderIcon={this.renderIcon}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}>
          {route.title}
        </Text>
      )}
      tabStyle={styles.internalTabStyle}
    />
  );

  render() {
    // const {isLoading} = this.state;
    // if (isLoading) {
    //   return <CustomLoader />;
    // }

    const {state, sceneMap, handleTabIndexChange, initialLayout} = this;
    const {tabView} = state;
    console.log(this.state + 'Step 2');
    return (
      <SafeAreaView style={styles.container}>
        {/* <HeaderComponent nav={this.props.navigation} showSearch showProfile /> */}

        <View style={styles.formContainer}>
          <TabView
            initialLayout={initialLayout}
            navigationState={tabView}
            renderScene={sceneMap}
            onIndexChange={handleTabIndexChange}
            renderTabBar={this.renderTabBar}
          />

          {/* <TouchableOpacity
            style={styles.touchableOpacityStyle}
            onPress={this.handleSendNews}>
            <Image
              source={man}
              resizeMode="cover"
              style={styles.floatingButtonStyle}
            />
          </TouchableOpacity> */}
        </View>

        {/* <FooterComponent nav={this.props.navigation} /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#f2f1f1',
  },
  tabBarIndicator: {
    backgroundColor: '#e54d3d',
  },
  tabBarStyle: {
    backgroundColor: '#fff',
  },
  tabBarLabel: {
    fontWeight: '700',
    fontSize: wp(3),
    color: '#000',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: wp(16),
    height: hp(7.5),
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 10,
    backgroundColor: '#ff0404',
    borderWidth: 1,
    borderColor: '#ff0404',
    borderRadius: wp(10),
  },
  floatingButtonStyle: {
    width: wp(6),
    height: hp(3),
    //backgroundColor:'black'
  },
  tabIcon: {
    height: hp(2.5),
    // height: hp(7.1),
    //backgroundColor:'black'
    aspectRatio: 1 / 1,
  },
  activeTabTextColor: {
    fontSize: wp(3.5),
    color: '#ff0404',
    fontWeight: '700',
  },
  tabTextColor: {
    fontSize: wp(3.5),
    color: '#000',
    fontWeight: '700',
  },
  internalTabStyle: {
    width: 'auto',
  },
});
