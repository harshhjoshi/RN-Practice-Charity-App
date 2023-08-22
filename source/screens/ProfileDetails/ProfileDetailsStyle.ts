import {Platform, StyleSheet} from 'react-native';
import {
  borderRadius,
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
    width: responsiveWidth(32),
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall,
    borderRadius: borderRadius.semiLarge,
    borderColor:Platform.OS === "ios" ? 'transparent':'#d2d2d2',
    borderWidth:Platform.OS === "ios" ? 0:0.5
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
  skip: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.semiBold,
    color: colors.simplegreen,

  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  emailtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.semiSmall,
  },

  icon: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
  },
  profile: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    // textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small,
    // marginTop:15
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  input: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.forgotpassgray,
    paddingVertical: spaceVertical.tiny,
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
  mb: {},
  gender: {
    borderBottomColor: colors.forgotpassgray,
    borderBottomWidth: 0.4,
    alignSelf: 'center',
    marginTop:4,
    width: responsiveWidth(90),
    
  },
  header: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
    color: colors.black,
    marginTop: spaceVertical.small,
    paddingLeft: responsiveWidth(5),
  },
  text: {
    width:responsiveWidth(100),
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    alignSelf:'center',
    color: colors.forgotpassgray,
    paddingLeft: responsiveWidth(5),
    marginTop: spaceVertical.small,
    
  },
  textIOS: {
    width:responsiveWidth(90),
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    alignSelf:'center',
    color: colors.forgotpassgray,
    paddingLeft: responsiveWidth(5),
    marginTop: spaceVertical.small,
    textAlign:"center"
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(23),
  },
  scanner: {
    height: responsiveHeight(35),
    width: responsiveWidth(70),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  scanimg: {
    height: responsiveHeight(35),
    width: responsiveWidth(70),
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(5),
  },
  iconContainer: {
    width: responsiveWidth(15),
    top: responsiveHeight(15),zIndex:10
  },
  backIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
  qrtext: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
  },
  qrview:{
    flexGrow: 1,
    alignSelf:'center',
    width: responsiveWidth(100),
    height:responsiveHeight(120)
  }
});

export {styles};
