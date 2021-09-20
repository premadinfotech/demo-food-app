/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProfileItemTile = props => {
  const handleScreen = () => {
    props.nav.navigate(props.route);
  };

  return (
    <TouchableHighlight
      style={styles.tile}
      onPress={handleScreen}
      underlayColor="transparent">
      <View style={styles.tileContent}>
        <Image
          source={props.tileIcon}
          resizeMode="cover"
          style={styles.tileIcon}
        />
        <Text style={styles.titleStyle}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default ProfileItemTile;

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    height: '100%',
  },
  tileContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileIcon: {
    height: hp(3),
    aspectRatio: 1 / 1,
    marginBottom: hp(0.7),
  },
  titleStyle: {
    fontSize: wp(3),
    textAlign: 'center',
  },
});
