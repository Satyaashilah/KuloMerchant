import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as IconsSolid from '@fortawesome/free-solid-svg-icons';
import * as IconBrand from '@fortawesome/free-brands-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from './../../../Theme/Metric';
const iconListSolid = Object.keys(IconsSolid)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => IconsSolid[icon]);

let iconListBrand = Object.keys(IconBrand)
  .filter(key => key !== 'fab' && key !== 'prefix')
  .map(icon => IconBrand[icon]);

library.add(...iconListBrand, ...iconListSolid);
const Banner = () => {
  return (
    <View style={styles.root}>
      <View style={styles.root3} >
      <Text style={styles.title}>Setting</Text>
      </View>
      <View style={styles.root3}>
      <FontAwesomeIcon icon={['fas', 'shop']} />
      <Text>Pengaturan Toko</Text>
      </View>
      <View style={styles.root3}>
      <FontAwesomeIcon icon={['fas', 'gear']} />
      <Text>Pengaturan Aplikasi</Text>
      </View>

      <View style={styles.root3} >
      <Text style={styles.title}>Help</Text>
      </View>
      <View style={styles.root3}>
      <FontAwesomeIcon icon={['fas', 'message']} />
      <Text>Pusat Bantuan</Text>
      </View>
      <View style={styles.root3}>
      <FontAwesomeIcon icon={['fas', 'phone']} />
      <Text>Telepon Kulo</Text>
      </View>

      <View style={styles.root3} >
      <Text style={styles.title}>Keluar</Text>
      </View>
      <View style={styles.root3}>
      <FontAwesomeIcon icon={['fas', 'arrow-right-from-bracket']} />
      <Text>Keluar</Text>
      </View>
    </View>
  );
};
export default Banner;
const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(25),
    paddingHorizontal: horizontalScale(25),
  },
  root: {
    flexDirection: 'column',
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
    color: '#6E6E6E',
    fontWeight: '400',
    paddingVertical: verticalScale(25),
  },
});
