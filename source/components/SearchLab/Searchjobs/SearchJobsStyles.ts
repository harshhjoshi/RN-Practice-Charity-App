import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
  borderRadius,
} from '../../../styles/variables';

const styles = StyleSheet.create({

  //flatList
  renderContainer:{
    backgroundColor:colors.white,
    borderRadius:borderRadius.semiLarge,
    marginTop:spaceVertical.tiny,
    paddingHorizontal: responsiveWidth(4),
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spaceVertical.tiny,
    paddingVertical: spaceVertical.extraSmall,
   
  },
  renderContain: {
    width: responsiveWidth(52),
  },
  name: {
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    fontSize: fontSize.normal,
  },
  priorty: {
    fontFamily: fontFamily.regular,
    color: colors.lightGray,
    fontSize: fontSize.extraSmall,
  },
  priortyText: {
    fontFamily: fontFamily.semiBold,
    color: colors.black,
    fontSize: fontSize.extraSmall,
  },
  status: {
    borderWidth: 1,
    padding: 7,
    borderColor: colors.purple,
    borderRadius: borderRadius.normal,
  },
  statusText: {
    fontFamily: fontFamily.semiBold,
    color: colors.purple,
    fontSize: fontSize.XXsmall,
  },
  arrowIcon: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
  },
  renderDetails: {
    paddingVertical:spaceVertical.tiny,
  },
  details: {
    height:responsiveHeight(6),
    alignItems:"center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(2),
  },
  bg:{
    backgroundColor:'#F1F5F9',
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(55),
  },
  branchTitle: {
    fontFamily: fontFamily.regular,
    color: colors.lightGray,
    fontSize: fontSize.extraSmall,
  },
  branchdetails: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: fontSize.extraSmall,
  },
  //dropdown
  dropdownStyle: {
    width: responsiveWidth(27),
    paddingHorizontal:responsiveWidth(2),
    paddingVertical:0,
    borderWidth:1,
  },
  selectedTextStyle:{
    fontSize: fontSize.XXsmall+1,
  }
});

export {styles};