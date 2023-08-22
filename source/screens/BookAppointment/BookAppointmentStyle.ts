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
  container: {
    flex: 1,
    marginTop: spaceVertical.semiSmall,
  },
  upperview: {
    flexGrow:1,
    width: responsiveWidth(89),
    alignSelf: 'center',
    marginTop: spaceVertical.small,
  },
  date: {
    width: responsiveWidth(89),
    alignSelf: 'center',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: colors.forgotpassgray,
  },
  mt: {
    marginTop: spaceVertical.small,
  },
  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    borderRadius: 6,
    justifyContent: 'center',
    alignSelf: 'center',
    
bottom:10
    // marginTop: spaceVertical.large,
  },



  icon: {
    height: responsiveHeight(3),
    width: responsiveWidth(6),
    alignSelf: 'center',
    resizeMode: 'contain',
  },


  listview: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    borderRadius: borderRadius.semiLarge,
    alignSelf: 'center',
    width: responsiveWidth(89),
    paddingVertical: responsiveHeight(1),
    padding:10,
    justifyContent: 'space-around',
    // marginLeft: responsiveWidth(2),
  },
  listtext: {
    width:responsiveWidth(65),

    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    maxWidth:250

  },
  imgview: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge,
  },
  desctext: {
    maxWidth:responsiveWidth(55),
    fontSize: fontSize.extraSmall,
    fontFamily: fontFamily.regular,
 
  },
  textview: {
    width: responsiveWidth(60),
  },
  topview: {
    flexDirection: 'row',
    width: responsiveWidth(75),
     justifyContent: 'space-around',
  },
  price: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.medium,
    alignSelf: 'center',right:5
  },
  branchview: {
    width: responsiveWidth(30),
    height: responsiveHeight(4),
    backgroundColor: 'transperant',
    bottom:5,
    borderColor:'lightgray',
    borderWidth:1,
    padding:12,
    borderRadius:50
  },
  dropdowntext: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.forgotpassgray,
  },
  semititletxt: {
    fontSize: fontSize.small,
    color: '#777A95',
    textAlign:'center',
    fontFamily: fontFamily.semiBold,
  },
});

export {styles};
