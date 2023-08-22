import { Platform, StyleSheet } from 'react-native';
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  marginHorizontal,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall
  },

  btn: {
    height: responsiveHeight(7),
    width: responsiveWidth(93),
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  emailtitle: {
    width: responsiveWidth(80),
    height: responsiveHeight(3),
    flexDirection: 'row',
    paddingLeft: marginHorizontal.semiSmall,
  },
  icon: {
    height: responsiveHeight(2.4),
    width: responsiveWidth(5.3),
    top:Platform.OS === 'ios' ? '0%' : '2%'

  },

  fieldtitle: {
    fontSize: fontSize.normal,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    color: colors.black,
    paddingHorizontal: marginHorizontal.small
  },

  proactlogo: {
    height: responsiveHeight(13),
    width: responsiveWidth(26),
    alignSelf: 'center',
    marginTop: responsiveHeight(6)
  },
  textinput: {
    height: Platform.OS === "ios" ? responsiveHeight(5) : undefined,
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    borderColor: colors.gray10,
    borderWidth: 0.8,
    fontSize: fontSize.normal,
    fontFamily: fontFamily.regular,
    color: colors.black,
    backgroundColor:"white",
    paddingStart:10,
    borderRadius:10
  },
  textview: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  forgotpassword: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    alignSelf: 'center',
    marginTop: spaceVertical.extraSmall,
    color: colors.forgotpassgray
  },
  Error: {
    color: colors.red,
    fontFamily: fontFamily.regular,
    marginLeft: responsiveWidth(5)
  },

  logoEye: {
    right: 40
  },
  passwordtitle: {
    width: responsiveWidth(80),
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingLeft: marginHorizontal.semiSmall
  },
  passwordicon: {
    height: responsiveHeight(3),
    width: responsiveWidth(5)
  },
  inputText:{
    flexDirection: 'row', 
    shadowColor: colors.black,
    width:responsiveWidth(90),
    justifyContent:'space-between',alignSelf:'center'
},

flag: {
    resizeMode:'cover',
    height:responsiveHeight(3),
    width:responsiveWidth(5),
    borderRadius:borderRadius.circle,
    marginLeft:marginHorizontal.extraSmall,
    top: Platform.OS === "ios" ?responsiveHeight(0):  responsiveHeight(1),
    right:  Platform.OS === "ios" ? 5 :0,
    borderColor:'grey',
},

flagView : {
    marginTop:marginHorizontal.extraSmall,
    height:responsiveHeight(4),
    width:responsiveWidth(11),
    borderColor : colors.lightGray,
    backgroundColor: '#ecf0f1',
},
});

export { styles };
