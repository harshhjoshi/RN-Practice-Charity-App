import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging, {
  FirebaseMessagingTypes,
  firebase
} from '@react-native-firebase/messaging';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { LogBox, Platform, StatusBar } from 'react-native';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Tabs from './source/navigation/Tabs';
import { Store, persistor } from './source/redux/Store';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import BookAppointment from './source/screens/BookAppointment/BookAppointment';
import CallEnd from './source/screens/CallEnd/CallEnd';
import Createmeet from './source/screens/CreateMeeting/Createmeet';
import Dashboard from './source/screens/Dashboard/Dashboard';
import DoctorDetails from './source/screens/DoctorDetails/DoctorDetails';
import Doctor from './source/screens/Doctors/Doctor';
// import Faqs from './source/screens/Faqs/Faqs';
// import FavDoctor from './source/screens/Favdoctor/FavDoctor';
import ForgotPassword from './source/screens/ForgotPassword/ForgotPassword';
// import Help from './source/screens/Help/Help';
// import InviteFriend from './source/screens/InviteFriend/InviteFriend';
import Joinmeet from './source/screens/JoinMeeting/Joinmeet';
import Login from './source/screens/Login/Login';
import Notification from './source/screens/Notification/Notification';
import OnBoarding from './source/screens/OnBoarding/OnBoarding';
import OnlineAppointment from './source/screens/OnlineAppointment/OnlineAppointment';
import Otpverification from './source/screens/Otp/OtpVerification';
import PatientDetail from './source/screens/PatientBookingDetails/PatientDetail';
import Profile from './source/screens/Profile/Profile';
import ProfileDetails from './source/screens/ProfileDetails/ProfileDetails';
import AddPhoto from './source/screens/AddPhoto/AddPhoto';
// import ProMember from './source/screens/ProMember/Promember';
import RecoveryPassword from './source/screens/RecoveryPassword/RecoveryPassword';
import Register from './source/screens/Register/Register';
import Review from './source/screens/Review/Review';
import Selection from './source/screens/Selection/Selection';
import { FCM_TOKEN } from './source/utils/commonUtils';
import ChatScreen from './source/screens/ChatScreen/ChatScreen';
import { PersistGate } from 'redux-persist/integration/react';
import Donation from './source/screens/Donation/Dontation';
import Thankyou from './source/screens/Thnaku/ThankYou';

const RootStack = createStackNavigator();

LogBox.ignoreAllLogs();

const options = {
  headerShown: false
};

const App = () => {
  const [handleLogin, sethandleLogin]: any = useState('');

  const getToken = async () => {
    try {
      // await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      await AsyncStorage.setItem(FCM_TOKEN, token);
    } catch (error) {
      console.log('Error retrieving FCM token:', error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    const CheckLogin = async () => {
      const checkLogin = await AsyncStorage.getItem('loginState');

      if (checkLogin === 'true') {
        sethandleLogin(checkLogin);
      } else {
        sethandleLogin('false');
      }
    };

    CheckLogin();
    getToken();

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {},

      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        // process the notification

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        // process the action
      },

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true
    });

    PushNotification.createChannel(
      {
        channelId: 'channel_id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        vibrate: true // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, [handleLogin]);

  React.useEffect(() => {
    const type = 'notification';
    if (Platform.OS === 'ios') {
      requestPermissions();
      setTimeout(() => {
        getToken();
      }, 1000);
    } else {
      getToken();
      onMessage();
    }
    return () => {};
  }, []);

  const showNotification = (notification: any) => {
    PushNotification.localNotification({
      channelId: 'channel_id',
      title: notification.title,
      message: notification.body!
    });
  };

  const onMessage = async () => {
    firebase.messaging().onMessage(response => {
      showNotification(response.notification);
    });
  };

  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          onMessage();
        } else {
          console.log('Not authorized');
        }
      })
      .catch(e => console.log(e));
  };

  const GetStarted = () => (
    <RootStack.Navigator screenOptions={options}>
      <RootStack.Screen name="OnBoarding" component={OnBoarding} />
      <RootStack.Screen name="Selection" component={Selection} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="Otpverification" component={Otpverification} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <RootStack.Screen name="RecoveryPassword" component={RecoveryPassword} />
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen name="DoctorDetail" component={DoctorDetails} />
      <RootStack.Screen name="BookAppointment" component={BookAppointment} />
      <RootStack.Screen name="Donation" component={Donation} />
      <RootStack.Screen name="Thankyou" component={Thankyou} />



      <RootStack.Screen
        name="PatientBookingDetails"
        component={PatientDetail}
      />
      <RootStack.Screen
        name="OnlineAppointment"
        component={OnlineAppointment}
      />
      <RootStack.Screen name="Joinmeet" component={Joinmeet} />
      <RootStack.Screen name="Createmeet" component={Createmeet} />
      <RootStack.Screen name="CallEnd" component={CallEnd} />
      <RootStack.Screen name="Review" component={Review} />
      {/* <RootStack.Screen name="Faqs" component={Faqs} /> */}
      {/* <RootStack.Screen name="Help" component={Help} /> */}
      <RootStack.Screen name="Notification" component={Notification} />
      <RootStack.Screen name="Dashboard" component={Dashboard} />
      <RootStack.Screen name="Doctor" component={Doctor} />
      {/* <RootStack.Screen name="ProMember" component={ProMember} /> */}
      {/* <RootStack.Screen name="FavDoctor" component={FavDoctor} /> */}
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="ProfileDetails" component={ProfileDetails} />
      <RootStack.Screen name="AddPhoto" component={AddPhoto} />
      {/* <RootStack.Screen name="InviteFriend" component={InviteFriend} /> */}
      <RootStack.Screen name="Authentication" component={Authentication} />
    </RootStack.Navigator>
  );

  const Authentication = () => (
    <RootStack.Navigator screenOptions={options}>
      <RootStack.Screen name="Tabs" component={Tabs} />
      <RootStack.Screen name="DoctorDetail" component={DoctorDetails} />
      <RootStack.Screen name="BookAppointment" component={BookAppointment} />
      <RootStack.Screen name="Donation" component={Donation} />
      <RootStack.Screen name="Thankyou" component={Thankyou} />

      <RootStack.Screen
        name="PatientBookingDetails"
        component={PatientDetail}
      />
      <RootStack.Screen
        name="OnlineAppointment"
        component={OnlineAppointment}
      />
      <RootStack.Screen name="Joinmeet" component={Joinmeet} />
      <RootStack.Screen name="Createmeet" component={Createmeet} />
      <RootStack.Screen name="ChatScreen" component={ChatScreen} />
      <RootStack.Screen name="CallEnd" component={CallEnd} />
      <RootStack.Screen name="Review" component={Review} />
      {/* <RootStack.Screen name="Faqs" component={Faqs} /> */}
      {/* <RootStack.Screen name="Help" component={Help} /> */}
      <RootStack.Screen name="Notification" component={Notification} />
      <RootStack.Screen name="Doctor" component={Doctor} />
      {/* <RootStack.Screen name="ProMember" component={ProMember} /> */}
      {/* <RootStack.Screen name="FavDoctor" component={FavDoctor} /> */}
      <RootStack.Screen name="Profile" component={Profile} />
      {/* <RootStack.Screen name="InviteFriend" component={InviteFriend} /> */}
      <RootStack.Screen name="OnBoarding" component={OnBoarding} />
      <RootStack.Screen name="Selection" component={Selection} />
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
      <RootStack.Screen name="Otpverification" component={Otpverification} />
      <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <RootStack.Screen name="RecoveryPassword" component={RecoveryPassword} />
      <RootStack.Screen name="ProfileDetails" component={ProfileDetails} />
      <RootStack.Screen name="GetStarted" component={GetStarted} />
    </RootStack.Navigator>
  );

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#FFF3E3"
            translucent={true}
          />
          <InternetConnectionAlert onChange={connectionState => {}}>
            <RootStack.Navigator screenOptions={options}>
              {handleLogin === 'false' ? (
                <RootStack.Screen name="GetStarted" component={GetStarted} />
              ) : (
                <RootStack.Screen
                  name="Authentication"
                  component={Authentication}
                />
              )}
            </RootStack.Navigator>
          </InternetConnectionAlert>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
