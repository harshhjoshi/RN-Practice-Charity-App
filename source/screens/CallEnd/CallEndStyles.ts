import {StyleSheet} from 'react-native';
import {
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
    justifyContent: 'center',
  },
  image: {
    height: responsiveHeight(18),
    width: responsiveWidth(32),
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall,
  },
  end: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    marginTop: responsiveHeight(15),
  },
  time: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    alignSelf: 'center',
  },
  button: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(8),
  },
  buttonwhite: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    backgroundColor: colors.HARD_WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  buttonText: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: '#129A7F',
  },
  name: {
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
    marginTop: spaceVertical.small,
    fontSize: fontSize.sizeGuideTxt,
    color: colors.black,
  },
});

export {styles};
