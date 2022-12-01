import React from 'react';
<<<<<<< HEAD
import Component from './../../components';
import {StyleSheet, Text, View} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../Theme/Metric';
export default function App() {
  return (
    <View style={styles.root}>
      <Component.AccountComp.Profile />
      <Component.AccountComp.ProfileDetail />
      <View style={styles.container}></View>
=======
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
>>>>>>> d45e2f425c84784c42e8eadaf72ac2ea41dba59e
    </View>
  );
}
const styles = StyleSheet.create({
<<<<<<< HEAD
  root: {
    backgroundColor: '#ffffff',
    paddingVertical: verticalScale(25),
    paddingHorizontal: horizontalScale(25),
  },
=======
>>>>>>> d45e2f425c84784c42e8eadaf72ac2ea41dba59e
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
