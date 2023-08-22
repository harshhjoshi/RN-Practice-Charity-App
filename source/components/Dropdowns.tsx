import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  colors,
  fontFamily,
  fontSize,
  spaceVertical,
  borderRadius,
  responsiveWidth
} from '../styles/variables';

const Dropdowns =({
  dropdownStyle,
  selectedTextStyle,
  onChange,
  value,
  placeholder,
  data
}: any) => {
  return (
    <View>
      <Dropdown
        style={[styles.dropdown, dropdownStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        itemTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderColor: colors.lightgray,
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: spaceVertical.tiny,
    borderRadius: borderRadius.normal,
    backgroundColor: colors.white
  },
  selectedTextStyle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.lightGray
  }
});
export default Dropdowns;
