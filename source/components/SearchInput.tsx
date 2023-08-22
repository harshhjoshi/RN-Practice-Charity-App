import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  colors,
  borderRadius,
  responsiveWidth,
  responsiveHeight
} from '../styles/variables';

const Input = ({
  onChangeText,
  value,
  placeholder,
  color,
  width,
  editable,
  opacity
}: any) => {
  return (
    <View style={styles.section}>
      <TextInput
        style={[styles.input, { width: width, opacity: opacity }]}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={colors.forgotpassgray}
      />
      <TouchableOpacity style={styles.searchIcon}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/search.png')} //Change your icon image here
          style={[styles.icon, { tintColor: color }]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  input: {
    alignSelf: 'center',
    padding: Platform.OS === 'ios' ? 14 : 10,
    borderColor: colors.forgotpassgray,
    borderWidth: Platform.OS === 'ios' ? 0.1 : 0.5,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge
  },
  searchIcon: {
    position: 'absolute',
    alignSelf: 'center',
    height: Platform.OS === 'ios' ? 30 : responsiveHeight(3),
    width: Platform.OS === 'ios' ? 20 : responsiveWidth(6),
    right: 20
  },
  icon: {
    height: Platform.OS === 'ios' ? 30 : responsiveHeight(3),
    width: Platform.OS === 'ios' ? 20 : responsiveWidth(6)
  }
});
export default Input;
