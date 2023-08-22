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
  alertView: {
    backgroundColor: colors.HARD_WHITE,
    height: responsiveHeight(80),
    width: responsiveWidth(85),
    alignSelf: 'center',
    borderRadius: borderRadius.boxRadius,
  },

  Alerttitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraLarge0,
    marginTop: spaceVertical.small,
    color: colors.black,
  },

  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    paddingVertical: spaceVertical.semiSmall,
  },

  Alertbutton: {
    flexDirection: 'row',
    width: responsiveWidth(83),
    justifyContent: 'flex-end',
    top: 10,
  },

  Alertsubtitle: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.black,
    textAlign: 'center',
    paddingHorizontal: responsiveWidth(2),
  },
  image: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  images: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  modalstatus: {
    width: responsiveWidth(75),
    flexDirection: 'row',
    marginTop: spaceVertical.small,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  modalheader: {
    flexDirection: 'row',
  },
  flatlistview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  flinnerview: {
    height: responsiveHeight(4),
    width: responsiveWidth(22),
    borderRadius: borderRadius.otpradius,
    justifyContent: 'center',left:10
  },
  innertext: {
    textAlign: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraSmall,
  },
  patientnum:{
    color: colors.forgotpassgray,
    fontFamily: fontFamily.semiBold,
    paddingRight: 10,
    textAlign: 'center',
    alignSelf: 'center',
  }
});

export {styles};
