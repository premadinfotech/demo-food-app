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

export default class DeleteAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleBack = () => {
    this.props.navigation.pop();
  };

  handleDeleteAccount1 = () => {
    this.props.navigation.navigate('DeleteAccount1');
  };

  handleDeleteAccount2 = () => {
    this.props.navigation.navigate('DeleteAccount2');
  };

  handleDeleteAccount3 = () => {
    this.props.navigation.navigate('DeleteAccount3');
  };

  handleDeleteAccount4 = () => {
    this.props.navigation.navigate('DeleteAccount4');
  };

  handleDeleteAccount5 = () => {
    this.props.navigation.navigate('DeleteAccount5');
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
          <Text style={styles.headerTitle}>Delete Account</Text>
        </TouchableOpacity>

        <View style={styles.homeContainer}>
          <Text style={styles.titleText}>Delete Account!</Text>
          <Text style={styles.whyDeleteAccText}>
            Why you want to delete your account?
          </Text>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleDeleteAccount1}>
              I don't want to use app anymore.
            </Text>
          </View>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleDeleteAccount2}>
              I'm using different account.
            </Text>
          </View>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleDeleteAccount3}>
              I'm worried about my privacy.
            </Text>
          </View>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleDeleteAccount4}>
              The app is not working properly.
            </Text>
          </View>

          <View style={styles.subSettingsContainer}>
            <Text
              style={styles.subSettingsText}
              onPress={this.handleDeleteAccount5}>
              Other
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
  whyDeleteAccText: {
    fontSize: wp(4),
    color: '#999999',
  },
  subSettingsContainer: {
    marginHorizontal: wp(2),
    marginVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#888888',
  },
  subSettingsText: {
    fontSize: wp(4),
    marginVertical: hp(2),
  },
});
