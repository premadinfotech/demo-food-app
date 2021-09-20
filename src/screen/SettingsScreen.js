/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';

// Image
import ic_back from '../assets/icon/ic_back.png';

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  handleAccountSetting = () => {
    this.props.navigation.navigate('DeleteAccount');
  };

  render() {
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
          <Text style={styles.headerTitle}>Settings</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <Text style={styles.titleText}>Settings</Text>

          <View style={styles.subSettingsContainer}>
            <Text style={styles.subSettingsText}>Notification Settings</Text>
            <Text style={styles.subSettingsDescription}>
              Define what alerts and notification you want to see
            </Text>
          </View>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleAccountSetting}>
              Account Setting
            </Text>
            <Text style={styles.subSettingsDescription}>
              Delete your account
            </Text>
          </View>
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
  subSettingsContainer: {
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  subSettingsText: {
    fontSize: wp(4),
  },
  subSettingsDescription: {
    fontSize: wp(4),
    color: '#999999',
    marginBottom: hp(2),
  },
});
