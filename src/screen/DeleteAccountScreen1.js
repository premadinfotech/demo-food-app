/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
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
          <Text style={styles.titleText}>I don't want to use app anymore</Text>

          <View style={styles.textAreaContainerBlack}>
            <TextInput
              style={styles.textAreaBlack}
              placeholder="Do you have any Feedback for us? We would love to hear from you! (Optional)"
              placeholderTextColor="#c4c3cb"
              multiline={true}
              numberOfLines={8}
              value={this.state.name}
              onChangeText={this.handleNameChange}
            />
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
    fontSize: hp(4),
  },
  textAreaContainerBlack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    marginHorizontal: hp(0.5),
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textAreaBlack: {
    height: hp(50),
    fontSize: wp(3.5),
    color: '#000',
    flex: 1,
    marginBottom: hp(1),
  },
});
