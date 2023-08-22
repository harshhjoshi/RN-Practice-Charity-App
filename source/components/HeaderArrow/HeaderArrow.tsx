import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import {
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const HeaderArrow = ({ title, backIconsHide }: any) => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      {!backIconsHide ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <Image
            style={styles.backIcon}
            resizeMode="contain"
            source={require('../../assets/images/Back.png')}
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconContainer}></View>
      )}
      <View style={styles.titleSection}>
        <Text
          style={Platform.OS === 'ios' ? styles.titleIOS : styles.title}
          numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.iconContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: spaceVertical.small,
    height: responsiveHeight(6),
    width: responsiveWidth(83)
  },
  iconContainer: {
    width: responsiveWidth(20),
    alignItems: 'center'
  },
  backIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10)
  },
  titleSection: {
    width: responsiveWidth(60)
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    color: colors.black,
    textAlign: 'center'
  },
  titleIOS: {
    fontFamily: fontFamily.semiBold,
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
    marginTop: 10
  }
});
export default HeaderArrow;
