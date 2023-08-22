import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
  borderRadius,
} from '../../styles/variables';

const styles = StyleSheet.create({
 
    mainContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',top:spaceVertical.small
  },

  settingTitle2: {
    left: responsiveWidth(4),
    width: responsiveWidth(50),
  },
  title: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.white,
  },
  subTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.semiLarge,
    color: colors.white,
    bottom: 10,
  },
  profileIcon: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    borderRadius: borderRadius.otpradius,
  },
  selectIcon: {
    height: responsiveHeight(3),
    width: responsiveWidth(1.3),
    right: 30,
    tintColor: colors.HARD_WHITE,
  },
  //flatlist
  renderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(8),
    marginTop: spaceVertical.tiny,
  },
  contentContainerStyle: {
    marginTop: spaceVertical.small,
    paddingBottom:  responsiveHeight(38),
  },
  leftRender: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  iconsection: {
    height: responsiveHeight(7),
    width: responsiveWidth(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.boxRadius,
  },
  settingIcon: {
    height: responsiveHeight(3),
    width: responsiveWidth(7),
  },
  name: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.forgotpassgray,
  },
  arrowIcon: {
    height: responsiveHeight(1.9),
    width: responsiveWidth(2.1),
  },
  switchSection: {
    flexDirection: 'row',
  },
  switchStyle: {
    width: responsiveWidth(14),
    height: responsiveHeight(3.5),
    borderRadius: borderRadius.boxRadius,
    marginLeft: responsiveWidth(2),
  },
  circleStyle: {
    width: responsiveWidth(5.5),
    height: responsiveHeight(2.5),
    borderRadius: borderRadius.circle,
  },
  activeText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.lightGray,
  },

});

export {styles};
