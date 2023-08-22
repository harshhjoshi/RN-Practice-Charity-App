// import * as CryptoJS from 'crypto-js';
import { Alert, Platform, ToastAndroid } from 'react-native';
import {
  borderRadius,
  colors,
  responsiveWidth,
  tabHeight
} from '../styles/variables';

// export const API_URL = 'http://10.0.2.2:9002/api/';
export const FCM_TOKEN = 'FCM_TOKEN';
// export const GOOGLE_API_KEY = 'AIzaSyB5MVxynlBSWyXh2ZFqugc55eapbs112Eo';
// export const TOKEN_PREFIX = 'ODS__';
// export const USER_DATA = 'USER_DATA';
// export const PAGER = 'PAGER';
// export const STORAGE = "STORAGE";
// export const ENCRYPTKEY = "OnDemandServices";
// export const ENCRYPTKEY1 = "odsReyna";
// export const IV = "ODSivkeysencrypt";

export const showToast = (msg: any) => {
  if (Platform.OS === 'android') {
    return ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  } else {
    Alert.alert(msg);
  }
};

// export const decryptData = (cipherText) => {
//   var iv = CryptoJS.enc.Utf8.parse('ODSivkeysencrypt');
//   var key = 'OnDemandServices'//key used in Python
//   var key1 = CryptoJS.enc.Utf8.parse(key);
//   var decrypted = CryptoJS.AES.decrypt(cipherText, key1, { iv: iv, mode: CryptoJS.mode.CBC });
//   return decrypted.toString(CryptoJS.enc.Utf8);
// }

// export const decryptData1 = (data) => {
//   let dta = CryptoJS.AES.decrypt(data, ENCRYPTKEY1);
//   return JSON.parse(dta.toString(CryptoJS.enc.Utf8));
// }
export const screenOptions: any = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: "#E0A14E",
     position: 'absolute',
    //  left: "5%",
    // bottom: Platform.OS === "ios" ? "3%" : 10,
    height:Platform.OS === "ios" ?  60 : tabHeight,
    width: responsiveWidth(100),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: borderRadius.semiLarge,
    // borderColor: '#eee',
    // shadowColor: '#000',
    // shadowOffset: {width: 1, height: 3},
    elevation: 10,
  },
  tabBarLabel: () => {
    return null;
  }
};
