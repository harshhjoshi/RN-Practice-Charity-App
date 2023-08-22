import {StyleSheet,Platform} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../styles/variables';
const styles = StyleSheet.create({
  tabIcon: {
    height: responsiveHeight(3.5),
    width: responsiveWidth(6),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === "ios" ? '30%' : 0, //can be 30 for ios
  },
});

export {styles};
