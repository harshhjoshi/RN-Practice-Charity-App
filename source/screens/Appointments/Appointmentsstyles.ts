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
  scene: { flex: 1 },
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall
  },
  innermain: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spaceVertical.small,
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge
  },
  tooglebutton: {
    height: responsiveHeight(6.5),
    width: responsiveWidth(40),
    borderRadius: borderRadius.semiLarge,
    justifyContent: 'center'
  },
  btntext: {
    textAlign: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    color: colors.forgotpassgray
  },
  headertext: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sizeGuideTxt,
    color: colors.HARD_BLACK,
    alignSelf: 'center',
    marginTop: spaceVertical.small
  },
  listview: {
    width: responsiveWidth(90),
    padding: 10,
    alignSelf: 'center',

    marginTop: spaceVertical.small,
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge,
    flexDirection: 'row'
  },
  image: {
    height: responsiveHeight(10.2),
    width: responsiveWidth(18),
    borderRadius: 10
  },
  typeimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    position: 'absolute',
    left: 58,
    bottom: 0
  },
  type: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.black
  },
  time: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60)
  },
  calander: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(3),
    top: 1,
    right: 3
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.forgotpassgray,
    top: 10,
    left: 20
  },
  renderItem: {
    marginTop: spaceVertical.small
  },
  renderInsideItem: {
    borderRadius: borderRadius.boxRadius
  },
  leftRender: {
    alignSelf: 'center',
    marginLeft: marginHorizontal.semiSmall
  },

  underline: {
    backgroundColor: colors.purple,
    borderBottomWidth: 0.7,
    width: Platform.OS === "ios" ? responsiveWidth(20) :responsiveWidth(23),
    bottom: 2
  },
  fileArea: {
    alignItems: 'center',
    marginTop: responsiveHeight(25)
  },
  fileTitle: {
    fontSize: fontSize.normal,
    color: colors.lightGray,
    marginTop: responsiveHeight(2),
    lineHeight: 24,
    fontFamily: fontFamily.regular
  }
});

export { styles };
