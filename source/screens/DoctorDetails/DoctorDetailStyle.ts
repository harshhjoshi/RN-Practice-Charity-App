import {Platform, StyleSheet} from 'react-native';
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
    flex: 1,
    marginTop: spaceVertical.semiSmall,
  },
  detailview: {
    flex: 1,
    backgroundColor: '#100A26',
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
  },
  innerview: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius,
  },
  patient: {
    height: responsiveHeight(11),
    width: responsiveWidth(22),
    borderWidth:Platform.OS === "ios" ? 0: 10
  },
  topview: {
    width: responsiveWidth(93),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    flexDirection: 'row',
    paddingBottom: spaceVertical.small,
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.addIc,
    color: colors.black,
  },
  fileno: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.forgotpassgray,
    width: responsiveWidth(70),
  },
  age: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.HARD_WHITE,
  },
  agetext: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.HARD_WHITE,
    bottom: 5,
  },
  image18: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
    alignSelf: 'center',
  },
  middleview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
     alignSelf:'center',
    width: responsiveWidth(90),
    paddingTop: spaceVertical.small,
    paddingBottom: spaceVertical.small,
  },
  middleinternalview: {marginLeft: responsiveWidth(3), alignSelf: 'center'},
  dropimage: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
    alignSelf: 'center',
  },
  bottomview: {
    width: responsiveWidth(90),
    // paddingBottom: spaceVertical.small,
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.HARD_BLACK,
  },
  textview: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spaceVertical.tiny,
  },
  boldfont: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.HARD_BLACK,
  },
  lightfont: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
    color: colors.forgotpassgray,
  },
  semititle: {
    flexDirection: 'row',
    width: responsiveWidth(85),
    justifyContent: 'space-between',
    marginTop: spaceVertical.small,
    alignSelf: 'center',
  },
  semititletxt: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.medium,
  },
  viewall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
  },
  flatlistview: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: spaceVertical.small,
    width: responsiveWidth(85),
    height: responsiveHeight(8),
    borderRadius: borderRadius.semiLarge,
    paddingHorizontal: 10,
  },
  file: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignSelf: 'center',
  },
  date: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
  },
  headertext: {
    flexDirection: 'row',
    width: responsiveWidth(85),
    marginTop: spaceVertical.small,
    justifyContent: 'space-between',
  },
  dots: {
    height: responsiveHeight(2),
    width: responsiveWidth(0.8),
    alignSelf: 'center',
  },
  historyview: {
    backgroundColor: colors.white,
    marginTop: spaceVertical.small,
    width: responsiveWidth(85),
    borderRadius: borderRadius.semiLarge,
    padding: 10,
    justifyContent: 'center',
  },
  internalview: {
    flexDirection: 'row',
  },
  patientimage: {
    height: responsiveHeight(10.2),
    width: responsiveWidth(18),
    alignSelf: 'center',
  },
  drname: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.HARD_BLACK,
  },
  drdate: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.forgotpassgray,
  },
  arrow: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
  },
  prescription: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.small,
    color: colors.black,
    marginTop: spaceVertical.tiny,
  },
  line: {
    width: responsiveWidth(75),
    borderWidth: 0.25,
    opacity: 0.4,
    backgroundColor: colors.forgotpassgray,
    alignSelf: 'center',
    marginTop: spaceVertical.tiny,
  },
  bgcircle: {
    alignSelf: 'center',
    borderRadius: borderRadius.circle,
    backgroundColor: '#FFFFFF10',
    justifyContent:'center',
    padding: 10,
    height: responsiveHeight(7),
    width: responsiveWidth(14),
  },
  desc: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.forgotpassgray,
    width: responsiveWidth(90),
    lineHeight: 26,
  },
  likeview: {
    backgroundColor: '#129A7F20',
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge,
    height: responsiveHeight(7),
    width: responsiveWidth(15),
    justifyContent: 'center',
  },
  buttonview: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    paddingBottom: responsiveHeight(2),
    // marginTop: spaceVertical.small,

    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  // calander strip
  dayContainerStyle: {
    height: responsiveHeight(10),
    borderRadius: 10,
    backgroundColor: colors.white,
    marginVertical: spaceVertical.small,
  },
  calendarHeaderStyle: {
    color: colors.black,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.regular,
    bottom: 5,
    start:-12,
  },
  dateNumberStyle: {
    color: '#777A95',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
  },
  dateNameStyle: {
    color: colors.forgotpassgray,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  mt: {marginTop: spaceVertical.small},
});
export {styles};
