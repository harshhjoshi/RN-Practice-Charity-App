import {Platform, StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  marginHorizontal,
  deviceHeight,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  height: {
    height: deviceHeight,
    flex: 1,
  },
  mr: {
    marginRight: marginHorizontal.extraSmall,
  },
  pager: {
    flex: 1,
    marginTop: spaceVertical.semiSmall,
  },
  row:{
    position: 'absolute',
    bottom: '1%',
    alignSelf: 'center',
    height: responsiveHeight(22),
  }
  ,

  active: {
    height: responsiveHeight(1.5),
    width: responsiveWidth(3),
    
    opacity: 1,
  },
  inactive: {
    height: responsiveHeight(0.7),
    width: responsiveWidth(1.4),
    opacity: 0.4,
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(75),
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    // bottom:'20%'
  },
  userselectionbtn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  skip: {
    fontFamily: fontFamily.semiBold,
    color: colors.forgotpassgray,
    fontSize: 13,
    alignSelf: 'center',
    // width: Platform.OS === "ios" ? undefined : responsiveWidth(25),
    top:10,
    
  },
  horizontalview: {
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.semiLarge,
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(5),
    alignSelf: 'center',
    height: responsiveHeight(5),
    justifyContent: 'center',
    marginLeft: responsiveWidth(5),
  },
  listfont: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    alignSelf: 'center',
  },
  boldfont: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.large,
    alignSelf: 'center',
  },
  btnview:{position:'absolute',alignSelf:'center',bottom:'7%'}
});

export {styles};
