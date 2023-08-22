import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  marginHorizontal,
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
  profile: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5.5),
  },
  cal: {
    height: responsiveHeight(3),
    width: responsiveWidth(5.35),
  },
  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    color: colors.black,
    paddingHorizontal: responsiveWidth(3),
  },
  emailtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: responsiveWidth(7),
  },
  tickview: {
    flexDirection: 'row',
    width: responsiveWidth(50),
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(2),
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    color: colors.forgotpassgray,
    left: 10,
  },
  tickinnerview: {
    flexDirection: 'row',
    width: responsiveWidth(20),
    alignSelf: 'center',
  },
  image: {
    height: responsiveHeight(3),
    width: responsiveHeight(3),
  },
  input: {
    padding: 20,
    height: responsiveHeight(17),
    width: responsiveWidth(91),
    alignSelf: 'center',
    borderWidth: 1,
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    borderRadius: borderRadius.semiLarge,
    borderColor: '#A0A2B3',
    marginTop: spaceVertical.tiny,
    textAlignVertical: 'top',
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  horizontalview: {
    marginTop: spaceVertical.tiny,
    borderRadius: borderRadius.boxRadius,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(4.5),
    alignSelf: 'center',
    height: responsiveHeight(11),
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
  },
  listfont: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large,
    alignSelf: 'center',
  },
  mtTiny: {
    marginTop: spaceVertical.tiny,
    paddingBottom:responsiveHeight(3)
  },
  mtSmall: {
    marginTop: spaceVertical.semiSmall,left:responsiveWidth(3)
  },
});

export {styles};
