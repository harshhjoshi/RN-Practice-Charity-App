import React, {  useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import TextInputs from '../../components/TextInput/TextInput';
import { responsiveHeight } from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { emailRegex } from '../../utils/GeneralRegex';
import { PatientForgotPassword } from '../../utils/service';
import { styles } from './ForgotPasswordStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = ({ navigation, route }: any) => {
  const params = route.params;
  const [loginloading, setloginloading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);

  const [Form, setForm]: any = useState({
    email: ''
  });

  const emailCheck = emailRegex(Form.email);

  const onSubmit = async () => {
    setloginloading(true);

    setLogInAttemp(true);

    if (!Form.email) {
      setEmailError(true);
      setloginloading(false);
      return;
    }
    if (!emailCheck) {
      setEmailError(true);
      setloginloading(false);
      return;
    }

    if (Form.email) {
        const fotgotpassapi = await PatientForgotPassword({
          payloadData: {
            requestData: {
              email: Form.email
            }
          }
        });

        if (fotgotpassapi?.rc === 0) {
          setloginloading(false);

          showToast(fotgotpassapi.payloadResponse.message);
          await navigation.navigate('Otpverification', {
            requestId: fotgotpassapi.payloadResponse.data.requestId,
            requestType: 'forgotPass',
            email: Form.email
          });
          Form.email = '';
        } else {
          setloginloading(false);
          showToast(fotgotpassapi.payloadResponse.error[0].message);
        }
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1, paddingBottom: responsiveHeight(12) }}
        colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow />
        <Text style={styles.header}>Forgot password</Text>
        <Text style={styles.text}>
          Please enter your Email Address to receive your OTP.
        </Text>
        <KeyboardAwareScrollView>
          <ScrollView contentContainerStyle={styles.mt}>
            <TextInputs
              value={Form.email}
              // maxlength={10}
              onChangeText={(value: any) => {
                if (emailError) {
                  setEmailError(false);
                }
                setForm({ ...Form, email: value.trim() });
              }}
              secureText={false}
              image={require('../../assets/images/Email_Icon.png')}
              title={'Email'}
              placeholder={'Enter your email address'}
            />
            {/* {emailError && logInAttemp ? (
            <Text style={styles.Error}>Please Enter email id</Text>
          ) : null} */}

            {emailError && logInAttemp ? (
              <Text style={styles.Error}>Please Enter Valid email address</Text>
            ) : null}
          </ScrollView>
        </KeyboardAwareScrollView>

        <Buttons
          needLoading={loginloading}
          onPress={onSubmit}
          style={styles.btn}
          text={'Send OTP'}
        />
      </LinearGradient>
    </View>
  );
};

export default ForgotPassword;
