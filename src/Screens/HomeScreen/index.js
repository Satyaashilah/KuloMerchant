import React from 'react';
import Component from '../../components';
<<<<<<< HEAD
import {CustomButton} from '../../components';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
=======
import {StyleSheet, View} from 'react-native';
>>>>>>> d45e2f425c84784c42e8eadaf72ac2ea41dba59e
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Theme/Metric';
<<<<<<< HEAD
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {

  const navigation = useNavigation();

  const onDiscount = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView>
<ScrollView>

=======

const Home = () => {
  return (
>>>>>>> d45e2f425c84784c42e8eadaf72ac2ea41dba59e
    <View style={styles.root}>
      <View style={styles.root2}>
        <View style={styles.itemCol}>
          <Component.HomeComp.Banner />
          <Component.HomeComp.SaldoKecil />
          <Component.HomeComp.Saldo />
          <Component.HomeComp.Orders />
          <Component.HomeComp.Fitur />
          <Component.HomeComp.CardCarousel />
<<<<<<< HEAD
      <TouchableOpacity>
        <CustomButton
          text="Diskon"
          onPress={onDiscount}
          type="TERTIARY"
        />
      </TouchableOpacity>
        </View>
      </View>
    </View>
</ScrollView>
    </SafeAreaView>
=======
        </View>
      </View>
    </View>
>>>>>>> d45e2f425c84784c42e8eadaf72ac2ea41dba59e
  );
};

export default Home;
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FFFFFF',
  },
  root2: {
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(1),
    paddingHorizontal: horizontalScale(25),
  },
  itemCol: {
    flexDirection: 'column',
  },
  itemRow: {
    flexDirection: 'row',
  },
});
