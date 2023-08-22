import { StyleSheet } from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall
  },
  innerview: {
    alignSelf: 'center',
    width: responsiveWidth(90),
    height: responsiveHeight(100)
  },
  header: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
    color: colors.black,
    marginTop: spaceVertical.semiSmall,
    paddingLeft: responsiveWidth(4)
  },
  text: {
    fontFamily: fontFamily.regular,
    width: responsiveWidth(90),
    fontSize: fontSize.small,
    color: colors.forgotpassgray,
    paddingLeft: responsiveWidth(4)
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    // bottom:10,

    position: 'absolute'
  },
  Recoverybtn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 10
    // position:'absolute'
  },
  textinput: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderBottomColor: colors.gray10,
    borderBottomWidth: 0.8,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    color: colors.black
  },
  logoEye: {
    right: 25
  },
  passwordtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.semiSmall
  },
  passwordicon: {
    height: responsiveHeight(2.7),
    width: responsiveWidth(5)
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small
  },
  mt: {
    marginTop: responsiveHeight(3)
    //  paddingBottom:responsiveHeight(12)
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(5)
    // bottom:'2%'
  },
  Error2: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(5),
    bottom: '3%'
  }
});

export { styles };
