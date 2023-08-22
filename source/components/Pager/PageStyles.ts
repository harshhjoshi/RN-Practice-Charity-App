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
  container: {flex: 1},
  img: {
    width: responsiveWidth(60),
    height: responsiveHeight(50),alignSelf:'center'
  },
  title: {
    color:"#E0A14E",
    fontSize: 50,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
    lineHeight:70
    
  },
  titleBlack: {
    color:"#000",
    fontSize: 50,
    fontFamily: fontFamily.semiBold,
    textAlign: 'center',
    lineHeight:60
  },

  subTitle: {
    color: 'black',
    fontSize: fontSize.small,
    height: responsiveHeight(21),
    width: responsiveWidth(80),
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop:17
  },

  view: {
    // backgroundColor: colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: spaceVertical.extraSmall,
    marginTop: responsiveHeight(7),
    width: responsiveWidth(85),
    height: responsiveHeight(38),
    borderRadius: borderRadius.semiLarge,position:'absolute',bottom:'15%'
  },
});

export {styles};
