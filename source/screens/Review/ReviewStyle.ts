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
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall,
  },
  input: {
    padding: 20,
    height: responsiveHeight(17),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderWidth: 1,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    borderRadius: borderRadius.semiLarge,
    borderColor: '#A0A2B3',
    textAlignVertical: 'top',
  },
  textsection: {
    width: responsiveWidth(90),
    marginTop: spaceVertical.small,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    color: colors.forgotpassgray,
  },
  button: {
    backgroundColor: colors.forgotpassgray,
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  lighttext: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
    color: colors.forgotpassgray,
    marginTop: spaceVertical.small,
  },
  textview: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  tickview: {
    flexDirection: 'row',
    width: responsiveWidth(50),
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(5),
    marginTop: spaceVertical.tiny,
  },
  tickinnerview: {
    flexDirection: 'row',
    width: responsiveWidth(20),
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  image: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  doctorimage: {
    height: responsiveHeight(18),
    width: responsiveHeight(18),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    borderWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor:'black',
    borderRadius:10
  },
  blackbold: {
    fontSize: fontSize.large,
    marginTop: spaceVertical.small,
    color: colors.forgotpassgray,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
    width: responsiveWidth(90),
  },
  greybold: {
    fontSize: fontSize.large,
    color: colors.black,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
  },
  starImageStyle: {
    height: responsiveHeight(4),
    width: responsiveHeight(4),
  },
  customstar: {
    justifyContent: 'space-between',
    width: responsiveWidth(50),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: spaceVertical.tiny,
    paddingBottom: responsiveHeight(3),
  },
});

export {styles};
