import { Platform, StyleSheet } from 'react-native';
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
    // flex:1
    // backgroundColor:'red'
    //paddingBottom:spaceVertical.semiSmall
  },
  logintext: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    marginTop: responsiveHeight(6),
    alignSelf: 'center'
  },
  proactlogo: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: spaceVertical.extraLarge
  },
  emailtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    // paddingLeft: marginHorizontal.semiSmall
    paddingLeft: 20
  },
  passwordtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    paddingLeft: 20
  },
  icon: {
    height: responsiveHeight(2.1),
    width: responsiveWidth(5.3),
    top:Platform.OS === 'ios' ? '0%' : '2%'
  },
  passwordicon: {
    height: responsiveHeight(2.7),
    width: responsiveWidth(5)
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small,
  },
  textinput: {
    height: Platform.OS === "ios" ? responsiveHeight(5) : undefined,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderBottomColor: colors.gray10,
    borderBottomWidth: 0.8,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    marginTop: 10,
    color: colors.black
  },
  forgotpassword: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    // top: 15,
    color: colors.forgotpassgray,
    marginTop: 20
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall
  },
  buttonText: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.HARD_WHITE
  },
  logoEye: {
    right: 25
  },
  textview: {
    flexDirection: 'row',
    alignSelf: 'center',
    // top:responsiveHeight(2)
    marginTop: responsiveHeight(4)
    //  position:'absolute',
    //  bottom:0
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(5),
    marginTop: 5
  },
  gender: {
    borderBottomColor: colors.forgotpassgray,
    borderBottomWidth: 0.4,
    alignSelf: 'center',
    width: responsiveWidth(91),
    fontSize: fontSize.normal,
    marginTop: responsiveHeight(1)
  }
});

export { styles };
