import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall,
  },
  otpnumber: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    textAlign: 'center',
    alignSelf: 'center',

    // top: responsiveHeight(0.8),
    height: responsiveHeight(9),
  },
  innertextview: {
    borderRadius: borderRadius.semiLarge,
    marginTop: responsiveHeight(5),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(12),
    marginHorizontal: responsiveWidth(1.6),
  },
  lowertext: {
    fontSize: fontSize.small,
    fontFamily: fontFamily.semiBold,
  },
  lowertext2: {
    fontSize: fontSize.small,
    color: colors.simplegreen,
    fontFamily: fontFamily.semiBold,
    textDecorationLine: 'underline',
    textDecorationColor: colors.charcol,
    alignSelf: 'center',
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    //position:'absolute',

    bottom: 10,
  },
  top: {
    marginTop: responsiveHeight(3),
  },

  lowerView: {
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall,
  },
  lowerCount: {
    color: colors.simplegreen,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
  },
  header: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
    color: colors.black,
    marginTop: spaceVertical.semiSmall,
    paddingLeft: responsiveWidth(6),
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.forgotpassgray,
    paddingLeft: responsiveWidth(6),
    width: responsiveWidth(90),
  },
});

export {styles};
