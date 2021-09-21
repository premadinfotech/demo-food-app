/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';

// Components
import FooterComponent from '../component/FooterComponent';

// Image
import ic_back from '../assets/icon/ic_back.png';

export default class GearWebsiteScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   isLoading: true,
    };
  }
  handleBack = () => {
    this.props.navigation.pop();
  };

  //   onWebViewLoad = syntheticEvent => {
  //     const {nativeEvent} = syntheticEvent;
  //     const {loading} = nativeEvent;

  //     this.setState({isLoading: loading});
  //   };

  render() {
    const {isLoading} = this.state;
    const url = 'http://premad.in/';

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
          <Text style={styles.headerTitle}>About</Text>
        </TouchableOpacity>

        <WebView
          originWhitelist={['*']}
          source={{uri: url}}
          style={styles.webView}
          startInLoadingState={isLoading}
          //   onLoad={this.onWebViewLoad}
        />
        <FooterComponent nav={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f1f1',
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
});
