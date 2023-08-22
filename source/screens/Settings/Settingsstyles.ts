import { StyleSheet } from 'react-native';
import {
  borderRadius, colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:spaceVertical.semiSmall
  },
    mainContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  settingContainer: {
    backgroundColor: colors.violate,
    borderRadius: borderRadius.otpradius,
    width:responsiveWidth(90),
    padding: marginHorizontal.small,
    marginTop: spaceVertical.small,
  },
  settingLeft: {
    flexDirection: 'row',
    width:responsiveWidth(85),
  },
  settingTitle: {
    left: responsiveWidth(4),
    width: responsiveWidth(60),
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
    fontSize: 14,
    color: colors.white,
    // bottom: 10,
    width:responsiveWidth(50)
  },
  subIOSTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.semiLarge,
    color: colors.white,
    bottom: 4,
    width:responsiveWidth(50)
  },
  profileIcon: {
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    borderRadius: borderRadius.otpradius,
  },
  selectIcon: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
     right: '32%',
     bottom:'0%',
  },
    editimg:{
    height: responsiveHeight(4),
    width: responsiveWidth(8),
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
    paddingBottom:  responsiveHeight(35),
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
  langText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.black,
  },
  //model-lamguage
  model: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: borderRadius.otpradius,
    marginVertical: responsiveHeight(15),
    alignItems: 'center',
    paddingVertical: responsiveHeight(10),
  },
  langTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.extraLarge0,
    color: colors.black,
    marginBottom: responsiveHeight(5),
  },
  modelLangSec: {
    width: responsiveWidth(80),
    height: responsiveHeight(35),
  },
  head: {
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sizeGuideTxt,
    color: colors.black,
  },

  activeTitle:{
    fontFamily: fontFamily.bold,
    fontSize: fontSize.normal,
    color: colors.black,
  },
  nonactiveTitle:{
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.forgotpassgray,
  }
});

export { styles };
