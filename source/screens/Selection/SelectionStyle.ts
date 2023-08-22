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
  },
  proactlogo: {
    height: responsiveHeight(15),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: responsiveHeight(15),
  },
  headertext: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.semiBold,
    alignSelf: 'center',color:colors.black,
    marginTop:responsiveHeight(15)
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall,
  },
  buttonwhite: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 6,
    backgroundColor: colors.HARD_WHITE,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.extraSmall,
  },
  buttonText: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: '#129A7F',
  },
  text:{
    marginTop: spaceVertical.extraSmall,
    alignSelf:'center',fontFamily:fontFamily.medium,fontSize:20,color:colors.forgotpassgray
  }
});

export {styles};
