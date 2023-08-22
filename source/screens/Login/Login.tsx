import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import Buttons from '../../components/Button';
import { setMCStatus, setName } from '../../redux/Slice/UserSlice';
import { colors, responsiveWidth, spaceVertical } from '../../styles/variables';
import { FCM_TOKEN, showToast } from '../../utils/commonUtils';
import { emailRegex, passwordRegex } from '../../utils/GeneralRegex';
import { PatientLogin, Token } from '../../utils/service';
import { styles } from './Loginstyles';

const Login = ({ navigation }: any) => {
  const [secureText, setSecureText] = useState(true);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);
  const [validPasswordError, setvalidPasswordError] = useState(false);
  const [istoken, setIsToken] = useState('');

  const dispatch = useDispatch();
  const [Form, setForm]: any = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    AsyncStorage.getItem(FCM_TOKEN).then((res: any) => {
      setIsToken(res);
    });
  }, []);

  const input1: any = useRef();
  const input2: any = useRef();

  const emailCheck = emailRegex(Form.email);
  const passwordCheck = passwordRegex(Form.password);

  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('api_state', value);
    } catch (e) {
      // saving error
    }
  };

  const TokenApi = async () => {
    if (istoken === null) return null;
    const token = await Token({
      payloadData: {
        requestData: {
          device_token: istoken
        }
      }
    });
    if (token?.rc === 0) {
    } else {
      console.log('fail in  token', token);
    }
  };

  const SignIn = async () => {
    setloginloading(true);

    // dispatch(setMessage(params));
    setLogInAttemp(true);

    if (!Form.email && !Form.password) {
      showToast('All fields are required!');
      setloginloading(false);
      return;
    }
    if (!emailCheck) {
      setEmailError(true);
      setloginloading(false);
      return;
    }

    if (!Form.password) {
      setPassError(true);
      setloginloading(false);
      return;
    }

    if (!passwordCheck) {
      setvalidPasswordError(true);
      setloginloading(false);
      return;
    }

    if (Form.email && Form.password) {
      const loginRequestApi = await PatientLogin({
        appChannelId: 2,
        payloadData: {
          requestData: {
            email: Form.email.toLowerCase(),
            password: Form.password
          }
        }
      });

      TokenApi();

      if (loginRequestApi?.rc === 0) {
        dispatch(
          setMCStatus(loginRequestApi?.payloadResponse?.data?.isMCAssociated)
        );

        dispatch(setName(loginRequestApi?.payloadResponse?.data?.name));

        Form.email = '';
        Form.password = '';
        setloginloading(false);
        if (Platform.OS != 'ios') {
          showToast('Signin Successfully');
        }

        if (loginRequestApi?.payloadResponse?.data.isMCAssociated === true) {
          navigation.navigate('Tabs', { flag: 0 });
          storeData('mc');
        } else {
          navigation.navigate('ProfileDetails', { flag: 1 });
          storeData('sa');
        }
        await AsyncStorage.setItem('loginState', 'true');
        await AsyncStorage.setItem('mcState', 'false');
      } else {
        showToast(loginRequestApi.payloadResponse.error[0].message);

        setloginloading(false);
      }
    }
  };

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
      <Image
        style={styles.proactlogo}
        resizeMode="contain"
        source={require('../../assets/images/proact_logo.png')}
      />
      <KeyboardAwareScrollView>
        <ScrollView
          style={{
            flex: 1,
            marginTop: spaceVertical.large
          }}
          showsVerticalScrollIndicator={false}>
          <View style={styles.emailtitle}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require('../../assets/images/Email_Icon.png')}></Image>
            <Text style={styles.fieldtitle}>Email</Text>
          </View>

          <TextInput
            placeholder="Please enter email address"
            placeholderTextColor={'#797979'}
            style={styles.textinput}
            value={Form.email}
            maxLength={40}
            ref={input1}
            onSubmitEditing={() => input2.current.focus()}
            blurOnSubmit={false}
            onChangeText={value => {
              if (value) {
                setEmailError(false);
              }
              setForm({ ...Form, email: value.trim() });
            }}
          />
          {emailError && logInAttemp ? (
            <Text style={[styles.Error]}>Please enter valid email address</Text>
          ) : null}

          <View style={styles.passwordtitle}>
            <Image
              style={styles.passwordicon}
              resizeMode="contain"
              source={require('../../assets/images/Lock_icon.png')}></Image>
            <Text style={styles.fieldtitle}>Password</Text>
          </View>
          <View
            style={{
              width: responsiveWidth(93),
              alignItems: 'center',
              flexDirection: 'row',
              left: responsiveWidth(5)
            }}>
            <TextInput
              placeholder="Enter password"
              placeholderTextColor={'#797979'}
              secureTextEntry={secureText}
              maxLength={16}
              style={styles.textinput}
              value={Form.password}
              ref={input2}
              onChangeText={value => {
                if (value) {
                  setPassError(false);
                  setvalidPasswordError(false);
                }
                setForm({ ...Form, password: value.trim() });
              }}
            />
            <TouchableOpacity
              style={styles.logoEye}
              onPress={() => {
                setSecureText(prev => !prev);
              }}>
              <IonIcon
                name={secureText ? 'eye-off-outline' : 'eye-outline'}
                size={25}
              />
            </TouchableOpacity>
          </View>
          {passError && logInAttemp ? (
            <Text style={styles.Error}>Please enter password</Text>
          ) : null}

          {validPasswordError && logInAttemp ? (
            <Text style={styles.Error}>
              Must Contain 8 Characters, One Uppercase, One Lowercase, One
              Number and one special case Character
            </Text>
          ) : null}

          <Buttons
            needLoading={loginloading}
            onPress={() => SignIn()}
            style={styles.btn}
            text={'Sign In'}
          />
          <TouchableOpacity onPress={() => ForgotPassword()}>
            <Text style={styles.forgotpassword}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.textview}>
            <Text style={styles.forgotpassword}>Don't have any account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={[styles.forgotpassword, { color: colors.simplegreen }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Login;
