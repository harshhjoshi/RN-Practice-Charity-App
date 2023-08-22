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
    flexGrow: 1
  },
  logintext: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    marginTop: responsiveHeight(6)
  },
  proactlogo: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: spaceVertical.large
  },
  emailtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(6),
    paddingLeft: marginHorizontal.small
  },
  passwordtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.semiSmall
  },

  passwordicon: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5.5),
    top: Platform.OS === "ios" ? '0%' : '1%'
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small
  },
  textinput: {
    // height:responsiveHeight(6),s
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderColor: colors.gray10,
    borderWidth: 0.4,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    color: colors.black,
    backgroundColor:"white",
    paddingStart:12,
    borderRadius:10
  },
  textinputIOS: {
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderBottomColor: colors.gray10,
    borderBottomWidth: 0.8,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    color: colors.black,
  },
  forgotpassword: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    marginTop: spaceVertical.extraSmall,
    color: colors.forgotpassgray
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
  }
});

export { styles };
