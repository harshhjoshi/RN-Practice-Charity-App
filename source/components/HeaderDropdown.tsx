import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  colors,
  fontFamily,
  fontSize,
  spaceVertical,
  responsiveHeight,
  responsiveWidth,
  borderRadius
} from '../styles/variables';

const HeaderDropdown = ({
  title,
  onpressDrop,
  dropTitle,
  selectDotpress
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.ChartHeaderTitle}>{title}</Text>
        <TouchableOpacity style={styles.flex} onPress={onpressDrop}>
          <Text style={styles.ChartHeaderTitle}>{dropTitle}</Text>
          <Image
            source={require('../assets/images/downarrow2.png')}
            style={styles.downIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={selectDotpress}>
        <Image
          source={require('../assets/images/dots.png')}
          style={styles.selectIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: responsiveHeight(5),
    alignItems: 'center',
    marginTop: responsiveWidth(6),
    marginBottom: spaceVertical.tiny1,
    paddingRight: responsiveWidth(2.5)
  },
  flex: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(2),
    alignItems: 'center'
  },
  ChartHeaderTitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.black
  },
  downIcon: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(3.5),
    marginLeft: responsiveWidth(2)
  },
  selectIcon: {
    height: responsiveHeight(2.9),
    width: responsiveWidth(1.2)
  }
});
export default HeaderDropdown;
