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
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall,
    backgroundColor:"#FFF3E3"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: spaceVertical.small
  },
  docimage: {
    height: 45,
    width: 45,
    alignSelf: 'center',
    borderRadius: 8,
    resizeMode: 'contain',
    borderColor: 'gray',
    borderWidth:Platform.OS  === "ios" ? 0: 0.2,
    bottom: 2
  },
  doctxt: {
    color: colors.black,
    width: responsiveWidth(50),
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.medium,
    // top: 5
  },
  doctxt2: {
    color: colors.forgotpassgray,
    fontFamily: fontFamily.regular,
    fontSize: 13
  },
  doctxt2IOS:{
    color: colors.forgotpassgray,
    fontFamily: fontFamily.regular,
    fontSize: 13,
    // marginTop:5
  },
  bellview: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.otpradius,
    elevation: 4
  },
  bellimg: {
    position: 'absolute',
    alignSelf: 'center',
    height: responsiveHeight(3),
    width: responsiveWidth(5),
  },
  semititle: {
    marginTop: spaceVertical.semiSmall
  },
  semititletxt: {
    fontSize: fontSize.medium,
    color: '#777A95',
    fontFamily: fontFamily.semiBold,
  },
  branchtext:{
    fontSize: Platform.OS === "ios" ? fontSize.normal : fontSize.medium,
    color: '#777A95',
    fontFamily: fontFamily.semiBold,
    marginStart:Platform.OS === 'ios' ?  20 :0,
    maxWidth:100,
  marginEnd:10,
  },
  selectedbranch: {
    fontSize: fontSize.small,
    color: '#777A95',
    fontFamily: fontFamily.semiBold,
    textAlign: 'right'
  },
  threedots: {
    height: responsiveHeight(2),
    width: responsiveWidth(0.8),
    alignSelf: 'center'
  },
  viewall: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal
  },
  patientview: {
    backgroundColor: colors.white,
    height:  responsiveHeight(21),
    alignSelf: 'center',
    width: responsiveWidth(33),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: borderRadius.semiLarge,
    marginLeft: responsiveWidth(3.8),
    elevation: 2
  },
  patientimg: {
    height: responsiveHeight(13),
    width: responsiveWidth(27),
    marginTop: spaceVertical.extraSmall,
    borderRadius: 10,
    paddingBottom: 10,
    top: 3
  },
  docname: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: '#777A95',
    maxWidth: 150,
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 10 :10
  },
  docname_medical: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
    color: '#777A95',
    maxWidth: 150,
    textAlign: 'center',
    bottom: 5
    // top: 5
  },
  timing: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.XXsmall,
    color: colors.forgotpassgray,
    alignSelf: 'center',
    marginTop:-3,
    paddingBottom:10
  },
  doctors: {
    marginTop: spaceVertical.tiny,
    paddingRight: spaceVertical.small,
    padding: 5
  },
  bannerbg: {
    borderRadius: borderRadius.semiLarge,
    justifyContent: 'space-between',
    marginLeft: responsiveWidth(5),
    width: responsiveWidth(90),
    backgroundColor: colors.white,
    //height: responsiveHeight(10),
    alignSelf: 'center',
    // marginTop: spaceVertical.small,
    padding: 10,
    elevation: 2
  },
  bannertitle: {
    fontFamily: fontFamily.medium,

    fontSize: fontSize.normal,
    color: '#777A95',
    marginTop: 2
  },
  bannerdate: {
    color: '#A0A2B3',
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    width: responsiveWidth(80),
    height: responsiveWidth(12),
    left: 5,
    marginStart: 5,
    top: 1
  },
  row: {
    flexDirection: 'row',
    top: spaceVertical.tiny1
  },
  line: {
    height: responsiveHeight(5),
    alignSelf: 'center',
    width: responsiveWidth(1),
    borderRadius: 8
  },
  itemview: {
    height: responsiveHeight(18),
    alignSelf: 'center',
    width: responsiveWidth(25),
    borderRadius: 8,
    padding: 10,
    marginLeft: spaceVertical.small,
    justifyContent: Platform.OS === "ios" ? 'flex-start': 'space-between',
    backgroundColor: colors.white,
    elevation: 2
  },
  specialistname: {
    alignSelf: 'center',
    width: responsiveWidth(20),
    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.medium,
    fontSize: 14,
    marginTop:Platform.OS == "ios"? 10 : 4
  },
  specialistnumber: {
    alignSelf: 'center',
    width: responsiveWidth(20),
    textAlign: 'center',
    color: colors.black,
    fontFamily: fontFamily.regular,
    fontSize: 12
  },
  icon: {
    height:Platform.OS === 'ios' ? 90: 80 ,
    width: Platform.OS === "ios" ? 90 : 70,
    alignSelf: 'center',

    borderRadius: 10
  },
  iconPlaceholder: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginTop: '30%',
    opacity: 0.4
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  },
  mx: {
    marginLeft: spaceVertical.small,
    marginTop: spaceVertical.normal
  },
  containStyle: {
    alignSelf: 'center',
    paddingRight: responsiveWidth(5),
    marginTop: spaceVertical.tiny
  },
  contentContainerStyle: {
    alignSelf: 'center',
    paddingRight: responsiveWidth(5),
    marginTop: spaceVertical.tiny,
    padding: 2
  },
  outersearchview: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spaceVertical.semiSmall,
    width: responsiveWidth(90),
    bottom: 15
  },
  dropdown: {
    alignSelf: 'center',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(35),
    height: Platform.OS === 'ios' ? responsiveHeight(5): responsiveHeight(6.7),
    backgroundColor: colors.white,
    borderRadius: borderRadius.semiLarge
  },
  branchview: {
    textAlign: 'right',
    height: responsiveHeight(5),
    width: responsiveWidth(55),
    backgroundColor: '#E0F0EC20'
  },
  dropdowntext: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.forgotpassgray,
    textAlign: 'left'

  },
  dropdownbtntext: {
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
    color: colors.forgotpassgray
  },
  iconContainer: {
    width: responsiveWidth(15),
    top: responsiveHeight(15),
    zIndex: 10
  },
  backIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10)
  },
  qrtext: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.large
  },
  qrview: {
    flexGrow: 1,
    alignSelf: 'center',
    width: responsiveWidth(100),
    height: responsiveHeight(120)
  },
  alertView: {
    backgroundColor: colors.HARD_WHITE,
    height: Platform.OS === "ios" ? responsiveHeight(35): responsiveHeight(60),
    width: responsiveWidth(85),
    alignSelf: 'center',
    borderRadius: borderRadius.boxRadius,
  },
  Alerttitle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraLarge0,
    marginTop: spaceVertical.semiSmall,
    color: colors.black,
    alignSelf: 'center'
    // width:responsiveWidth(80)
  }
});

export { styles };
