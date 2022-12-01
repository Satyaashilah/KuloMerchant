import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';

const Banner = () => {
  return (
    <View style={styles.root3}>
      <View style={styles.container}>
        <View style={styles.picture}></View>
      </View>
      <Text style={styles.title}>User</Text>
    </View>
  );
};
export default Banner;
const styles = StyleSheet.create({
  container: {
    // paddingVertical: verticalScale(25),
    // paddingHorizontal: horizontalScale(25),
  },
  root: {
    // paddingHorizontal: horizontalScale(25),
  },
  root3: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  root2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    fontSize: moderateScale(15),
    color: '#F1592A',
    fontWeight: 'bold',
    paddingVertical: verticalScale(25),
    paddingLeft: horizontalScale(15),
  },
  picture: {
    height: verticalScale(75),
    width: horizontalScale(75),
    borderWidth: 2,
    borderRadius: horizontalScale(75),
    borderColor: '#6E6E6E',
  },
});
