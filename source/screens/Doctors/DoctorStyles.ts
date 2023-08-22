import { Platform, StyleSheet } from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall
  },
  branchview: {
    width: responsiveWidth(33),
    justifyContent: 'flex-start',
    height: responsiveHeight(4),
    left: 10,
    backgroundColor: '#E0F0EC20'
  },
  semititletxt: {
    fontSize: fontSize.medium,
    color: '#777A95',
    fontFamily: fontFamily.semiBold
  },
  listview: {
    width: responsiveWidth(90),
    padding: 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.semiLarge,
    elevation: 1,
    flexDirection: 'row'
  },
  image: {
    height: responsiveHeight(10),
    width: responsiveHeight(10),
    borderRadius: 10,
  },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.medium,
    color: colors.black,
    width: responsiveWidth(80)
  },
  time: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    left: Platform.OS == 'ios'? 5 : 3
  },
  types: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.extraSmall,
    color: colors.black
  },
  location: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.forgotpassgray
  },
  flinnerview: {
    height: responsiveHeight(3),
    paddingHorizontal: 6,
    borderRadius: borderRadius.normal,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 4
  },
  status: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall
  },
  textview: {
    width: responsiveWidth(60)
  },
  calander: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(3),
    top: 1,
    right: 3
  },
  star: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(3),
    top: 1
  },
  horizontalview: {
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.semiLarge,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    alignSelf: 'center',
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginLeft: responsiveWidth(5)
  },
  listfont: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    alignSelf: 'center'
  },
  leftRender: {
    alignSelf: 'center',
    marginLeft: marginHorizontal.small
  },
  containerStyle: {
    paddingBottom: 10,
    paddingRight: 10,
    marginTop: spaceVertical.tiny
  },
  contentContainerStyle: {
    alignSelf: 'center',
    paddingBottom: responsiveHeight(10)
  },
  outersearchview: {
    alignSelf: 'center',

    marginTop: spaceVertical.small,
    width: responsiveWidth(90)
  },
  dropdown: {
    marginTop: spaceVertical.small,
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(40),
    height: Platform.OS ==='ios' ?  responsiveHeight(5.5):  responsiveHeight(6.7),
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    paddingStart:10
  },
  dropdowntext: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.forgotpassgray,
    textAlign: 'left'
  }
});

export { styles };
