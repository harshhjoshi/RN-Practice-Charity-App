import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  borderRadius,
  spaceVertical,
  responsiveHeight,
  responsiveWidth
} from '../styles/variables';
import { useNavigation } from '@react-navigation/native';

const HeaderMain = ({ source, title, subTitle, header }: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={[styles.header, header]}>
      <View style={styles.headerLeft}>
        <Image source={source} style={styles.profileIcon} />
        <View style={styles.headerTitle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.iconsection}
        onPress={() =>
          navigation.navigate('GetStarted', { screen: 'Notification' })
        }>
        <Image
          source={require('../assets/images/bell.png')}
          resizeMode="contain"
          style={styles.notificationIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spaceVertical.semiSmall,
    marginTop: spaceVertical.small
  },
  headerLeft: {
    flexDirection: 'row'
  },
  profileIcon: {
    width: responsiveHeight(6),
    height: responsiveWidth(12),
    borderRadius: borderRadius.otpradius,
    alignSelf: 'center'
  },
  headerTitle: {
    left: responsiveWidth(4),
    width: responsiveWidth(50)
  },

  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.black
  },
  subTitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.forgotpassgray
  },
  iconsection: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.otpradius,
    elevation: 4
  },
  notificationIcon: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(4.6)
  }
});
export default HeaderMain;
