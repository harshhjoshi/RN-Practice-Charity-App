import React, { useRef, useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import IonIcon from "react-native-vector-icons/Ionicons";
import Buttons from "../../components/Button";
import TextInputs from "../../components/TextInput/TextInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
} from "../../styles/variables";
import { showToast } from "../../utils/commonUtils";
import { emailRegex, passwordRegex } from "../../utils/GeneralRegex";
import { PatientRegister } from "../../utils/service";
import { styles } from "./Registerstyles";
import CountryPicker from "react-native-country-picker-modal";

const Register = ({ navigation }: any) => {
  const [secureText, setSecureText] = useState(true);
  const [secureText2, setSecureText2] = useState(true);

  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setfirstNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [confirmpassError, setConfirmPassError] = useState(false);

  const [phoneLength, setPhoneLength] = useState(false);
  const [validPasswordError, setvalidPasswordError] = useState(false);
  const [phoneError, setphoneError] = useState(false);
  const [loginloading, setloginloading] = useState(false);
  const [logInAttemp, setLogInAttemp] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(1);

  const [countryCode, setcountryCode] = useState(965);
  const [countryImage, setcountryImage]: any = useState("KW");

  const input1: any = useRef();
  const input2: any = useRef();
  // const input2:any = React.createRef()
  const input3: any = useRef();
  const input4: any = useRef();
  const input5: any = useRef();

  const [Form, setForm]: any = useState({
    firstName: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const onSubmitFree = async () => {
    if(currentPosition === 4){
      navigation.navigate('AddPhoto');
    }else{
      setCurrentPosition(currentPosition + 1);
    }
  };

  const emailCheck = emailRegex(Form.email);
  const passwordCheck = passwordRegex(Form.password);

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={["#FFF3E3", "#FFF3E3"]}>
        <KeyboardAwareScrollView>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                currentPosition == 1
                  ? navigation.goBack()
                  : setCurrentPosition(currentPosition - 1)
              }
            >
              <Image
                style={{
                  height: responsiveHeight(10),
                  width: responsiveWidth(10),
                  marginStart: 20,
                }}
                resizeMode="contain"
                source={require("../../assets/images/signup_back.png")}
              ></Image>
            </TouchableOpacity>

            <View
              style={{
                width: "72%",
                backgroundColor: "#E0A14E",
                height: 2,
                marginStart: 20,
                marginEnd: 40,
              }}
            >
              <View
                style={{
                  width: `${25 * currentPosition}%`,
                  backgroundColor: "#000",
                  height: 6,
                  bottom: 2,
                  borderRadius: 20,
                  marginEnd: 40,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              flex: 0.92,
              // marginTop: 20,
              // alignSelf: "center",
              justifyContent: "center",
              marginStart: 20,
            }}
          >
            <Text
              style={{
                color: "#E0A14E",
                fontSize: 35,
                fontFamily: fontFamily.semiBold,
                alignSelf: "flex-start",
                // textAlign: "center",
                lineHeight: 70,
                // alignSelf: "center",
              }}
            >
              {currentPosition == 1
                ? "Your "
                : currentPosition == 2
                ? "Your "
                : currentPosition == 3
                ? "Set "
                : "Welcome "}
              <Text
                style={{
                  color: "#000",
                  fontSize: 35,
                  fontFamily: fontFamily.semiBold,
                  // textAlign: "center",
                  lineHeight: 60,
                }}
              >
                {currentPosition == 1
                  ? "Name "
                  : currentPosition == 2
                  ? "Email "
                  : currentPosition == 3
                  ? "Password "
                  : "Back! "}
              </Text>
            </Text>
          </View>
          {currentPosition == 1 ? (
            <TextInputs
              secureText={false}
              // image={require('../../assets/images/man.png')}
              // title={'Full Name'}
              placeholder={"Full name"}
              value={Form.firstName}
              maxlength={13}
              ref={input2}
              onChangeText={(value: any) => {
                if (value) {
                  setfirstNameError(false);
                }
                setForm({ ...Form, firstName: value });
              }}
              onSubmitEditing={() => input3.current.focus()}
              blurOnSubmit={false}
            />
          ) : currentPosition == 2 ? (
            <TextInputs
              secureText={false}
              // image={require('../../assets/images/man.png')}
              // title={'Full Name'}
              placeholder={"Your Email Address"}
              value={Form.firstName}
              maxlength={13}
              ref={input2}
              onChangeText={(value: any) => {
                if (value) {
                  setfirstNameError(false);
                }
                setForm({ ...Form, firstName: value });
              }}
              onSubmitEditing={() => input3.current.focus()}
              blurOnSubmit={false}
            />
          ) : currentPosition == 3 ? (
            <View>
              <View
                style={{
                  width: responsiveWidth(93),
                  alignItems: "center",
                  flexDirection: "row",
                  left: responsiveWidth(5),
                }}
              >
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={colors.forgotpassgray}
                  style={styles.textinput}
                  secureTextEntry={secureText}
                  maxLength={16}
                  value={Form.password}
                  ref={input4}
                  onChangeText={(value) => {
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
                    setSecureText((prev) => !prev);
                  }}
                >
                  <IonIcon
                    name={secureText ? "eye-off-outline" : "eye-outline"}
                    size={25}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    width: responsiveWidth(93),
                    alignItems: "center",
                    flexDirection: "row",
                    left: responsiveWidth(5),
                  }}
                >
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.forgotpassgray}
                    style={styles.textinput}
                    secureTextEntry={secureText}
                    maxLength={16}
                    value={Form.password}
                    ref={input4}
                    onChangeText={(value) => {
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
                      setSecureText((prev) => !prev);
                    }}
                  >
                    <IonIcon
                      name={secureText ? "eye-off-outline" : "eye-outline"}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : currentPosition == 4 ? (
            <View>
              <TextInputs
                secureText={false}
                // image={require('../../assets/images/man.png')}
                // title={'Full Name'}
                placeholder={"Email Address"}
                value={Form.firstName}
                maxlength={13}
                ref={input2}
                onChangeText={(value: any) => {
                  if (value) {
                    setfirstNameError(false);
                  }
                  setForm({ ...Form, firstName: value });
                }}
                onSubmitEditing={() => input3.current.focus()}
                blurOnSubmit={false}
              />
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    width: responsiveWidth(93),
                    alignItems: "center",
                    flexDirection: "row",
                    left: responsiveWidth(5),
                  }}
                >
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={colors.forgotpassgray}
                    style={styles.textinput}
                    secureTextEntry={secureText}
                    maxLength={16}
                    value={Form.password}
                    ref={input4}
                    onChangeText={(value) => {
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
                      setSecureText((prev) => !prev);
                    }}
                  >
                    <IonIcon
                      name={secureText ? "eye-off-outline" : "eye-outline"}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ) : null}
        </KeyboardAwareScrollView>
        <View style={{ paddingBottom: responsiveHeight(5) }}>
          <Buttons
            needLoading={loginloading}
            onPress={() => onSubmitFree()}
            style={styles.btn}
            text={
              currentPosition == 1
                ? "Next"
                : currentPosition == 2
                ? "Next"
                : currentPosition == 3
                ? "Let's Begin"
                : currentPosition == 4
                ? "Login"
                : null
            }
          />

          {currentPosition === 4 ? (
            <View style={{alignSelf:"center",flexDirection:"row",top:20}}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                color: colors.forgotpassgray,
                fontSize: 13,
              }}
            >
              Don’t have account?
              
            </Text>
            <Text
                style={{
                  color: "#E0A14E",
                  fontSize: 13,
                  marginStart:10
                }}
              >
                Sign up
              </Text>
            </View>
          ) : (
            <View style={{alignSelf:"center",flexDirection:"row",top:20}}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                color: colors.forgotpassgray,
                fontSize: 13,
              }}
            >
              Existing account?
            </Text>
            <Text
                style={{
                  color: "#E0A14E",
                  fontSize: 13,
                  marginStart:10
                }}
              >
                Log in
              </Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Register;
