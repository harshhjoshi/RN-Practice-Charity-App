import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../ForgotPassword/ForgotPasswordStyle';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../components/Button';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  colors,
  responsiveHeight,
  responsiveWidth
} from '../../styles/variables';
import { passwordRegex } from '../../utils/GeneralRegex';
import { showToast } from '../../utils/commonUtils';
import { PatientResetPassword } from '../../utils/service';

const RecoveryPassword = ({ navigation, route }: any) => {
  const params = route.params;
  const token = params.token;

  const [secureText, setSecureText] = useState(true);
  const [secureText2, setSecureText2] = useState(true);
  const [passError, setPassError] = useState(false);
  const [confirmpassError, setConfirmPassError] = useState(false);
  const [loginloading, setloginloading] = useState(false);

  const [logInAttemp, setLogInAttemp] = useState(false);
  const [validPasswordError, setvalidPasswordError] = useState(false);

  const [Form, setForm]: any = useState({
    new_password: '',
    confirm_password: ''
  });
  const passwordCheck = passwordRegex(Form.new_password);

  const ResetPassword = async () => {
    setloginloading(true);
    setLogInAttemp(true);

    if (!Form.new_password && !Form.confirm_password) {
      setloginloading(false);

      showToast('please enter password');
      return;
    }

    if (!Form.new_password) {
      setloginloading(false);
      setPassError(true);
      return;
    }

    if (!Form.confirm_password) {
      setloginloading(false);
      setConfirmPassError(true);
      return;
    }

    if (!passwordCheck) {
      setloginloading(false);
      setvalidPasswordError(true);
      return;
    }

    if (Form.new_password != Form.confirm_password) {
      setloginloading(false);
      showToast('Both password should be equal');
    }

    if (Form.new_password == Form.confirm_password) {
        const passwordreset = await PatientResetPassword({
          payloadData: {
            requestData: {
              token: token,
              new_password: Form.new_password,
              confirm_password: Form.confirm_password
            }
          }
        });

        if (passwordreset.rc === 0) {
          setloginloading(false);
          showToast('Password Reset Successfully');
          navigation.navigate('Login');
        } else {
          setloginloading(false);
          showToast(passwordreset?.payloadResponse?.error[0]?.message);
        }
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow />
        <Text style={styles.header}>Reset password</Text>
        <Text style={styles.text}>
          Enter your new and confirm password to reset your password.
        </Text>
        <KeyboardAwareScrollView>
          <ScrollView style={{ marginTop: responsiveHeight(3) }}>
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
                placeholderTextColor={colors.forgotpassgray}
                style={styles.textinput}
                secureTextEntry={secureText}
                maxLength={16}
                value={Form.new_password}
                onChangeText={value => {
                  if (value) {
                    setPassError(false);
                    setvalidPasswordError(false);
                  }
                  setForm({ ...Form, new_password: value.trim() });
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
                6 digit password should contain atleast one Aa-Zz, 0-9 and any
                special Characters
              </Text>
            ) : null}
            <View style={styles.passwordtitle}>
              <Image
                style={styles.passwordicon}
                resizeMode="contain"
                source={require('../../assets/images/Lock_icon.png')}></Image>
              <Text style={styles.fieldtitle}>Confirm Password</Text>
            </View>

            <View
              style={{
                width: responsiveWidth(93),
                alignItems: 'center',
                flexDirection: 'row',
                left: responsiveWidth(5)
              }}>
              <TextInput
                placeholder="Enter confirm password"
                placeholderTextColor={colors.forgotpassgray}
                style={[styles.textinput]}
                secureTextEntry={secureText2}
                maxLength={16}
                value={Form.confirm_password}
                onChangeText={value => {
                  if (value) {
                    setConfirmPassError(false);
                    setvalidPasswordError(false);
                  }
                  setForm({ ...Form, confirm_password: value.trim() });
                }}
              />
              <TouchableOpacity
                style={styles.logoEye}
                onPress={() => {
                  setSecureText2(prev => !prev);
                }}>
                <IonIcon
                  name={secureText2 ? 'eye-off-outline' : 'eye-outline'}
                  size={25}
                />
              </TouchableOpacity>
            </View>

            {confirmpassError && logInAttemp ? (
              <Text style={styles.Error}>Please enter confirm password</Text>
            ) : null}

            {validPasswordError && logInAttemp ? (
              <Text style={styles.Error}>
                A 6 digit password should contain atleast one Aa-Zz, 0-9 and any
                special Characters
              </Text>
            ) : null}
          </ScrollView>
        </KeyboardAwareScrollView>

        <Buttons
          needLoading={loginloading}
          onPress={() => ResetPassword()}
          style={styles.Recoverybtn}
          text={'Reset Password'}
        />
      </LinearGradient>
    </View>
  );
};

export default RecoveryPassword;
