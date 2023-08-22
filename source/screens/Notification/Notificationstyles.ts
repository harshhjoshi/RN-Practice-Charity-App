import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
  borderRadius,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spaceVertical.semiSmall,
  },
  mainContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },

  //flatlist
  renderItem: {
    marginTop: spaceVertical.small,
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.forgotpassgray,
  },
  renderInsideItem: {
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: borderRadius.boxRadius,
  },
  renderInside: {
    flexDirection: 'row',
    paddingVertical: spaceVertical.tiny,
    paddingHorizontal: responsiveWidth(5),
  },
  iconsection: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.otpradius,
  },
  icon: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },
  descSection: {
    left: 8,
    width: responsiveWidth(70),
  },
  name: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.normal,
    color: colors.black,
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.black,
    lineHeight: 22,
  },
  hr: {
    width: responsiveWidth(80),
    alignSelf: 'center',
    backgroundColor: colors.forgotpassgray,
    borderWidth: 0.2,
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(20),
  },
  head: {
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sizeGuideTxt,
    color: colors.black,
  },
});

export {styles};
