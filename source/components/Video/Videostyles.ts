import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

const styles = StyleSheet.create({
  scene: {flex: 1},
  container: {
    flexGrow: 1,
    backgroundColor: '#E0F0EC',
  },
  innermain: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spaceVertical.small,
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge,
    backgroundColor: colors.white,
  },
  tooglebutton: {
    height: responsiveHeight(6.5),
    width: responsiveWidth(45),
    borderRadius: borderRadius.semiLarge,
    justifyContent: 'center',
  },
  btntext: {
    textAlign: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    alignSelf: 'center',
  },
  headertext: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.sizeGuideTxt,
    color: colors.HARD_BLACK,
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  listview: {
    width: responsiveWidth(90),
    padding: 10,
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginTop: spaceVertical.small,
    borderRadius: borderRadius.semiLarge,
    elevation: 1,
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(10.2),
    width: responsiveWidth(18),
  },
  typeimage: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    position: 'absolute',
    left: 58,
    bottom: 0,
  },
  type: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
  },
  name: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  time: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.extraSmall,
  },
  flinnerview: {
    height: responsiveHeight(3),
    paddingHorizontal: 6,
    borderRadius: borderRadius.normal,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    bottom: 4,
  },
  status: {
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
  },
  textview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(60),
  },
  typeimg:{
    height:responsiveHeight(4),
    width:responsiveWidth(8),top:4
  },
  calander:{
    height:responsiveHeight(1.5),
    width:responsiveWidth(3),top:1,right:3
  }
});

export {styles};
