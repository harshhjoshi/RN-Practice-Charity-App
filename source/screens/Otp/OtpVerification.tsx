import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import { showToast } from '../../utils/commonUtils';
import { PatientOtp, PatientResendPassword } from '../../utils/service';
import { styles } from './OtpverificationStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Otpverification = ({ navigation, route }: any) => {
  const params = route.params;
  const requestId = params.requestId;
  const requestType = params.requestType;
  const email = params.email;
  const [needLoading, setneedLoading] = useState(false);
  const [error, setError] = useState('');
  let timer: any = () => {};
  const [timeLeft, setTimeLeft] = useState(120);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const input1: any = useRef();
  const input2: any = useRef();
  const input3: any = useRef();
  const input4: any = useRef();
  const input5: any = useRef();
  const input6: any = useRef();

  const [Form, setForm] = useState({
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: '',
    digit5: '',
    digit6: ''
  });
  const { digit1, digit2, digit3, digit4, digit5, digit6 } = Form;
  const otpCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;

  const submit = async () => {
    setneedLoading(true);
      const otpverification = await PatientOtp({
        payloadData: {
          requestData: {
            customerAuthentication: {
              otp: {
                requestId: requestId,
                requestType: requestType,
                otpPin: otpCode
              }
            }
          }
        }
      });

      if (otpverification?.rc == 0) {
        setneedLoading(false);
        showToast('Verified');
        {
          requestType == 'register'
            ? navigation.navigate('Login')
            : requestType == 'forgotPass'
            ? navigation.navigate('RecoveryPassword', {
                token: otpverification.payloadResponse.data.token
              })
            : null;
        }
      } else {
        setneedLoading(false);

        if (otpverification.payloadResponse.error[0].message == 'Bad Request') {
          showToast('please try again');

          navigation.navigate('Login');
        }
        showToast(otpverification.payloadResponse.error[0].message);
        setError(otpverification.payloadResponse.error[0].message);
      }
  };

  const ResendOtp = async () => {
      const resetpassword = await PatientResendPassword({
        payloadData: {
          requestData: {
            email: email
          }
        }
      });

      if (resetpassword?.rc === 0) {
        setTimeLeft(10);
        clearTimeout(timer);
        startTimer();

        showToast(resetpassword?.payloadResponse?.message);
      } else {
        showToast(resetpassword.payloadResponse.errors[0].message);
      }
  };

  return (
    <>
      <View style={styles.container}>
        <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
          <HeaderArrow />
          <Text style={styles.header}>OTP</Text>
          <Text style={styles.text}>
            Put the OTP below sent to your email {email}
          </Text>
          <KeyboardAwareScrollView>
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center'
                }}>
                {/* 1st box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input1}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit1: value });

                        input2.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="numeric"></TextInput>
                </View>
                {/* 2nd box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input2}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        input1.current.focus();
                      }
                    }}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit2: value });
                        input3.current?.focus();
                      } else {
                        input1.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="numeric"></TextInput>
                </View>
                {/* 3rd box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input3}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        input2.current.focus();
                      }
                    }}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit3: value });
                        input4.current?.focus();
                      } else {
                        input2.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="number-pad"></TextInput>
                </View>
                {/* 4th box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input4}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        input3.current.focus();
                      }
                    }}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit4: value });
                        input5.current?.focus();
                      } else {
                        input3.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="numeric"></TextInput>
                </View>
                {/* 5th box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input5}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        input4.current.focus();
                      }
                    }}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit5: value });
                        input6.current?.focus();
                      } else {
                        input4.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="numeric"></TextInput>
                </View>
                {/* 6th box */}
                <View style={styles.innertextview}>
                  <TextInput
                    style={styles.otpnumber}
                    ref={input6}
                    onKeyPress={({ nativeEvent }) => {
                      if (nativeEvent.key === 'Backspace') {
                        input5.current.focus();
                      }
                    }}
                    onChangeText={value => {
                      if (value) {
                        setForm({ ...Form, digit6: value });
                        Keyboard.dismiss();
                      } else {
                        input5.current?.focus();
                      }
                    }}
                    maxLength={1}
                    keyboardType="numeric"></TextInput>
                </View>
              </View>
              {requestType == 'register' ? null : (
                <View style={styles.lowerView}>
                  <Text style={styles.lowertext}>{error}</Text>

                  {timeLeft > 0 ? (
                    <View>
                      <Text style={styles.lowerCount}>
                        Resend OTP in {timeLeft} seconds
                      </Text>
                    </View>
                  ) : (
                    <TouchableOpacity onPress={() => ResendOtp()}>
                      <Text style={styles.lowertext2}>Resend OTP</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </ScrollView>
          </KeyboardAwareScrollView>

          <Buttons
            needLoading={needLoading}
            onPress={() =>
              otpCode.length == 6 ? submit() : showToast('Enter Valid OTP')
            }
            style={styles.btn}
            text={'Confirm'}
          />
        </LinearGradient>
      </View>
    </>
  );
};
export default Otpverification;
