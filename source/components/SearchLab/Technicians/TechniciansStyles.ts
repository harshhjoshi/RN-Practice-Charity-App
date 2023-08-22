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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:responsiveWidth(2.5),
    marginTop:spaceVertical.semiSmall,
  },
  title: {
    fontFamily: fontFamily.bold,
    color: colors.black,
    fontSize: fontSize.medium,
  },
  selectIcon: {
    height: responsiveHeight(2.5),
    width:responsiveWidth(5.5),
    
  },
  //flatList
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(4),
    justifyContent: 'space-between',
    marginBottom: spaceVertical.tiny,
    paddingVertical: spaceVertical.extraSmall,
    backgroundColor:colors.white,
    borderRadius:borderRadius.semiLarge,
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

  renderDetails: {
    paddingHorizontal: responsiveWidth(4),
  },
  contentContainerStyle: {
    paddingBottom: responsiveHeight(60),
  },
});

export {styles};
