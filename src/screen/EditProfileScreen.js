/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  check,
  request,
  openSettings,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {launchImageLibrary} from 'react-native-image-picker';

// Component
import CustomLoader from '../component/CustomLoader';

// Icon
import ic_username from '../assets/icon/ic_username.png';
import ic_mobile from '../assets/icon/ic_mobile.png';
import ic_delivery_boy from '../assets/icon/ic_delivery_boy.png';
import ic_email from '../assets/icon/ic_email.png';
import ic_back from '../assets/icon/ic_back.png';

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      selectedFile: null,
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

  handleNameChange = name => {
    this.setState({name});
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handleMobileChange = phone => {
    this.setState({phone});
  };

  handlePermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const result = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            break;
          case RESULTS.GRANTED:
            // console.log("The permission is granted");
            this.handleFilePick();
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            Alert.alert(
              'Permission Blocked',
              'Press OK and provide "Storage" permission in App Setting',
              [
                {
                  text: 'Cancel',
                  style: 'cancel',
                },
                {
                  text: 'OK',
                  onPress: this.handleOpenSettings,
                },
              ],
              {cancelable: false},
            );
        }
      } else if (Platform.OS === 'ios') {
        this.handleFilePick();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  handleFilePick = async () => {
    try {
      const options = {
        includeBase64: true,
      };

      launchImageLibrary(options, response => {
        console.log('response', response);
        if (response.base64) {
        }
        this.setState({selectedFile: response});
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleOpenSettings = async () => {
    try {
      await openSettings();
    } catch (error) {
      console.log('cannot open settings', error);
    }
  };

  render() {
    const {isLoading, selectedFile} = this.state;

    if (isLoading) {
      return <CustomLoader />;
    }

    const showStaticImage = (
      <Image source={ic_delivery_boy} resizeMode="cover" style={styles.logo} />
    );

    const showUploadImage = (
      <Image source={selectedFile} resizeMode="cover" style={styles.logo} />
    );

    return (
      <SafeAreaView style={styles.venderLoginScreenContainer}>
        <TouchableOpacity onPress={this.handleBack} style={styles.headerStyle}>
          <Image
            source={ic_back}
            resizeMode="cover"
            style={styles.leftArrowIcon}
          />
          <Text style={styles.headerTitle}>Edit Profile</Text>
        </TouchableOpacity>

        <KeyboardAwareScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid>
          <View style={styles.venderLoginContainer}>
            <View>
              <TouchableOpacity onPress={this.handlePermissions}>
                <View style={styles.logoContainer}>
                  {this.state.selectedFile ? showUploadImage : showStaticImage}
                </View>
              </TouchableOpacity>

              <View style={styles.inputContainer}>
                <Image
                  source={ic_username}
                  resizeMode="cover"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.loginFormTextInput}
                  placeholder="Name"
                  placeholderTextColor="#c4c3cb"
                  value={this.state.name}
                  onChangeText={this.handleNameChange}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  source={ic_mobile}
                  resizeMode="cover"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.loginFormTextInput}
                  placeholder="Mobile Number"
                  placeholderTextColor="#c4c3cb"
                  value={this.state.phone}
                  onChangeText={this.handlMobileChange}
                />
              </View>

              <View style={styles.inputContainer}>
                <Image
                  source={ic_email}
                  resizeMode="cover"
                  style={styles.inputIcon}
                />

                <TextInput
                  style={styles.loginFormTextInput}
                  placeholder="Email"
                  placeholderTextColor="#c4c3cb"
                  value={this.state.email}
                  onChangeText={this.handleEmailChange}
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                underlayColor="#ff040480"
                onPress={this.handleUpdate}>
                <Text style={styles.buttonText}>UPDATE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  venderLoginScreenContainer: {
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
  container: {
    flex: 1,
  },
  venderLoginContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: wp(3),
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: wp(5),
  },
  logo: {
    height: hp(18),
    aspectRatio: 1 / 1,
    marginBottom: hp(2),
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: wp(20),
  },
  loginText: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: '#ff0404',
    alignSelf: 'center',
  },
  loginFormView: {
    paddingHorizontal: wp(3),
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: hp(7),
    alignItems: 'center',
    marginBottom: hp(3),
    marginHorizontal: wp(3),
  },
  loginFormTextInput: {
    fontSize: wp(3.5),
    flex: 1,
    color: '#000',
  },
  touchAbleButton: {
    position: 'absolute',
    right: 3,
    height: hp(6),
    width: wp(7),
    padding: 2,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  inputIcon: {
    width: wp(5),
    aspectRatio: 1 / 1,
    marginRight: wp(2),
  },
  button: {
    alignSelf: 'center',
    width: wp(20),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: wp(2),
    marginHorizontal: wp(2),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: wp(3.7),
  },
  picUploadStyle: {
    height: wp(5),
    aspectRatio: 1 / 1,
  },
  someText: {
    fontSize: wp(3.5),
    alignSelf: 'center',
    color: '#000',
  },
});
