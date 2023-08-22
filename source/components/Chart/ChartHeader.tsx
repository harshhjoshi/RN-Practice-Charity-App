import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  spaceVertical,
  responsiveHeight,
  responsiveWidth,
} from '../../styles/variables';

const ChartHeader = ({title}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.ChartHeaderTitle}>{title}</Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/images/dots.png')}
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
    marginTop:spaceVertical.small,
  },
  ChartHeaderTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  selectIcon: {
    height: responsiveHeight(2.9),
    width: responsiveWidth(1.2),
    right:10
  },
});
export default ChartHeader;
