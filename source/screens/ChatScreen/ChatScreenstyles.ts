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
    flexGrow: 1,
    marginTop: spaceVertical.semiSmall,
    backgroundColor: colors.darkGreen,
  },
  headerComponent: {
    width: responsiveWidth(100),
    alignSelf: 'center',
    // justifyContent:''
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(5),
    paddingTop: spaceVertical.small,
    backgroundColor: colors.white,
    position: 'absolute',
    top: 10,
    zIndex: 10,
  },
  backIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
  iconContainer: {
    alignItems: 'center',
  },
  // chat
  mainContainer: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: borderRadius.boxRadius + 10,
    borderBottomRightRadius: borderRadius.boxRadius + 10,
    height: responsiveHeight(90),
    paddingBottom: 25,
    zIndex: 0,
  },
  FocusmainContainer: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: borderRadius.boxRadius + 10,
    borderBottomRightRadius: borderRadius.boxRadius + 10,
    height: responsiveHeight(82),
    paddingBottom: 200,
  },
  chatView: {
    width: responsiveWidth(90),
    paddingVertical: responsiveHeight(1.5),
  },
  chatUser: {
    display: 'flex',
    flexDirection: 'row',
  },
  sender: {
    alignSelf: 'flex-start',
  },
  image: {
    height: responsiveWidth(10),
    width: responsiveHeight(5),
    marginRight: responsiveWidth(2),
    borderRadius: 8,
  },
  receiver: {
    alignSelf: 'flex-end',
  },
  userMsg: {
    maxWidth: responsiveWidth(60),
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  senderMsg: {
    backgroundColor: colors.darkGreen,
    color: colors.white,
    borderRadius: borderRadius.semiLarge,
    borderTopLeftRadius: 0,
  },
  receiverMsg: {
    backgroundColor: '#f2f2f2',
    color: colors.black,
    borderRadius: borderRadius.semiLarge,
    borderBottomRightRadius: 0,
  },
  bottomView: {
    position: 'absolute',
    bottom: 10,
    height: responsiveHeight(7),
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: borderRadius.semiLarge,
    backgroundColor: '#29a68d',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  input: {
    width: responsiveWidth(75),
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal - 2,
  },
  sendIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(10),
  },
});

export {styles};
