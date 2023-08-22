import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall,
  },
  image: {
    height: responsiveHeight(16),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall,
  },
  camara: {
    height: responsiveHeight(7),
    width: responsiveWidth(14),
    alignSelf: 'center',
    bottom: 20,
  },
  dropdownStyle: {
    width: responsiveWidth(42),
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: '80%',
  },
  emailtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.small,
  },
  icon: {
    height: responsiveHeight(2.8),
    width: responsiveWidth(5.2),
  },
  profile: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(6.2),
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  input: {
    flexDirection: 'row',
    width: responsiveWidth(93),
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.forgotpassgray,
    paddingVertical: spaceVertical.tiny,
    marginBottom: spaceVertical.semiSmall,
  },
  arrowIcon: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
  },
  timeSection: {
    flexDirection: 'row',
  },
  clockIcon: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(4.5),
  },
  time1: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.black,
    left: 5,
  },
  mb: {
    marginBottom: responsiveHeight(10),
  },
  gender: {
    borderBottomColor: colors.forgotpassgray,
    borderBottomWidth: 0.4,
    alignSelf: 'center',
    width: responsiveWidth(93),
  },
  textinput: {
    width: responsiveWidth(93),
    alignSelf: 'center',
    borderBottomColor: colors.gray10,
    borderBottomWidth: 0.8,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    bottom: 2,
  },
  logoEye: {
    position: 'absolute',
    right: 20,
    bottom: 10,
  },
  passwordtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.small,
  },
  passwordicon: {
    height: responsiveHeight(3.1),
    width: responsiveWidth(5.5),
  },
  contentContainerStyle:{
    flexGrow:1,
    paddingBottom:responsiveHeight(30)
  }
});

export {styles};
