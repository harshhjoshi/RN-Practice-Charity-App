import { Platform, StyleSheet } from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: spaceVertical.semiSmall
  },
  detailview: {
    flex: 1,
    backgroundColor: '#100A26',
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius
  },
  innerview: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: borderRadius.bigboxradius,
    borderTopRightRadius: borderRadius.bigboxradius
  },
  patient: {
    height: responsiveHeight(12),
    width: responsiveWidth(21),
    borderRadius: 10
  },
  topview: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    flexDirection: 'row',
    paddingBottom: spaceVertical.semiSmall
  },
  name: {
    width: responsiveWidth(70),
    fontFamily: fontFamily.bold,
    fontSize: fontSize.large,
    color: '#777A95'
  },
  fileno: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.forgotpassgray,
    width: responsiveWidth(80)
  },
  middleview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: responsiveWidth(93),
    alignSelf: 'center',
    paddingTop: spaceVertical.semiSmall,
    paddingBottom: spaceVertical.semiSmall
  },
  bottomview: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
    flex:1
  },
  text: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    color: colors.HARD_BLACK,
  },
  headertext: {
    marginTop: spaceVertical.small,
    alignSelf:"center",
    width:responsiveWidth(85),
  },
  bgsquare: {
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge,
    backgroundColor: '#FFFFFF10',
    padding: 10,
    height: responsiveHeight(10),
    width: responsiveWidth(20),
    justifyContent: 'center'
  },
  icon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignSelf: 'center'
  },
  msgicon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignSelf: 'center'
  },
  callicon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignSelf: 'center',
    tintColor: colors.forgotpassgray
  },
  videoicon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    tintColor: colors.forgotpassgray,

    alignSelf: 'center'
  },
  clock: {
    height: responsiveHeight(2.5),
    width: responsiveWidth(5),top:5
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',

  },
  innertextview:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  }
});
export { styles };
