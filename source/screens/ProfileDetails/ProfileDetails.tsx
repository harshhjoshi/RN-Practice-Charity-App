import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import React, {  useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { launchImageLibrary } from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import TextInputs from '../../components/TextInput/TextInput';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  spaceVertical
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { getProfile, PatientProfileDetails } from '../../utils/service';
import { styles } from './ProfileDetailsStyle';
import { setAvatar, setMCStatus } from '../../redux/Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
const Gender = [
  { id: 1, value: 'MALE', label: 'MALE' },
  { id: 2, value: 'FEMALE', label: 'FEMALE' }
];

const ProfileDetails = ({ navigation, route }: any) => {
  const params = route.params;
  const CheckScreen = params?.screenName;
  const [eplaceholder, setEPlaceholder]: any = useState(true);
  const [showend, setShowEnd]: any = useState(false);
  const [ImageSelected, setImageSelected]: any = useState('');
  const [uploadedImage, setUploadImage]: any = useState([]);
  const [loginloading, setloginloading] = useState(false);
  const [data, setData] = useState();
  const [image64, setImage64] = useState();
  const [type, setType] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [NationalIdFromAPI, setNationalIdFromAPI] = useState('');
  const [sub, setSub] = useState(false);
  const [loader, setLoader] = useState(false);
  const [getimage, setGetimage] = useState('');
  const dispatch = useDispatch();
  const [Form, setForm]: any = useState({
    gender: '',
    dob: '',
    national_id: '',
    mc_id: '',
    mc_name: '',
    file_no: ''
  });
  const [date, setDate] = useState(new Date());
  const cameraRef = React.useRef(null);

  const handleBarcodeScanned = (event: any) => {
    // Handle barcode scanning logic here

    try {
      const DataQR = JSON.parse(event?.data);
      setForm({ ...Form, mc_id: DataQR?.mc_id, mc_name: DataQR?.mc_name });
      setData(DataQR?.mc_name);
      if (Platform.OS === 'android') {
        showToast('Selected Branch is ' + DataQR?.mc_name);
      }
      setModalVisible(false);
    } catch (error) {
      if (Platform.OS === 'android') {
        showToast('Invalid QR!');
      }
      setModalVisible(false);
    }
  };

  const onChangeEnd = 
    (event: DateTimePickerEvent, selectedDate: Date) => {
      const currentDate = selectedDate || date;
      const SelectedDate = new Date(currentDate);
      // const currentDate = SelectedDate;
      setShowEnd(!showend);
      setForm({ ...Form, dob: SelectedDate });
      setEPlaceholder(false);
    };

  const OPENPICKER = async () => {
    let options: any = {
      quality: 5,
      maxWidth: 500,
      maxHeight: 500,
      includeBase64: true,
      mediaType: 'photo',
      noData: true
    };
    await launchImageLibrary(options, async (response: any) => {
      if (response.didCancel != true) {
        await setUploadImage(response?.assets[0]);
        await setImageSelected(response?.assets[0].uri);
        setType(response?.assets[0].type);
        setImage64(response?.assets[0].base64);
      }
    });
  };

  const profiledetails = async () => {
    setLoader(true);
    const getdetails = await getProfile();

    if (getdetails?.rc === 0) {
      setLoader(false);
      setForm({
        gender: getdetails?.payloadResponse?.data?.gender,
        dob: getdetails?.payloadResponse?.data?.dob,
        national_id: getdetails?.payloadResponse?.data?.national_id,
        mc_id: getdetails?.payloadResponse?.data?.mc_id,
        mc_name: getdetails?.payloadResponse?.data?.mc_name,
        file_no: getdetails?.payloadResponse?.data?.file_no
      });
      setNationalIdFromAPI(getdetails?.payloadResponse?.data?.national_id);
      setImage64(getdetails?.payloadResponse?.data?.profile_pic);
      setGetimage(getdetails?.payloadResponse?.data?.profile_pic);

      setEPlaceholder(false);
    } else {
      showToast(getdetails?.payloadResponse?.error[0].message);
      setLoader(false);
    }
  };

  const onRead = (data: any) => {
    try {
      const DataQR = JSON.parse(data?.data);
      setForm({ ...Form, mc_id: DataQR?.mc_id, mc_name: DataQR?.mc_name });
      setData(DataQR?.mc_name);
      showToast('Selected Branch is ' + DataQR?.mc_name);
      setModalVisible(false);
    } catch (error) {
      showToast('Invalid QR!');
      setModalVisible(false);
    }
  };

  const Updateprofile = async () => {
    if (!image64) {
      showToast('Please select profile pic');
      return;
    }

    setSub(true);
    if (Form.gender && Form.dob && Form.national_id && Form.mc_id) {
      setloginloading(true);
        const profileupdate = await PatientProfileDetails({
          payloadData: {
            requestData: {
              gender: Form?.gender,
              dob: new Date(Form.dob),
              national_id: Form?.national_id,
              mc_id: Form?.mc_id,
              file: {
                name: 'avatarPic',
                data_uri:
                  type === '' ? image64 : `data:${type};base64,` + image64
              }
            }
          }
        });

        if (profileupdate?.rc === 0) {
          dispatch(
            setMCStatus(profileupdate?.payloadResponse?.data["isMCAssociated"])
          );
          if (image64 === getimage) {
          } else {
            dispatch(setAvatar(`data:${type};base64,` + image64));
          }

          setloginloading(false);
          showToast(profileupdate.payloadResponse.message);
          navigation.navigate('Tabs', { flag: 0 });
          await AsyncStorage.setItem('mcState', 'true');
        } else {
          setloginloading(false);
          showToast(profileupdate.payloadResponse.error[0].message);
        }
    } else {
      showToast('Please Fill all the Fields  ');
    }
  };

  useEffect(() => {
    profiledetails();
  }, []);

  const timestamp = date.getTime();

  const SkipFunction = async () => {
    navigation.push('Tabs', { flag: 1 });
    await AsyncStorage.setItem('mcState', 'false');
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        {CheckScreen === 'settings' ? (
          <HeaderArrow title={'Set up your profile'} />
        ) : null}
        <View style={{ paddingBottom: responsiveHeight(3) }}>
          <Modal
            onBackButtonPress={() => setModalVisible(false)}
            animationOut="fadeOut"
            isVisible={isModalVisible}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.iconContainer}>
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={require('../../assets/images/Back.png')}
              />
            </TouchableOpacity>
            <LinearGradient
              colors={['#5936F1', '#47DAE3']}
              style={styles.qrview}>
              {Platform.OS === 'ios' ? (
                <RNCamera
                  ref={cameraRef}
                  style={{ flex: 1 }}
                  type={RNCamera.Constants.Type.back}
                  captureAudio={false}
                  onBarCodeRead={handleBarcodeScanned}
                  barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                />
              ) : (
                <QRCodeScanner
                  onRead={onRead}
                  flashMode={RNCamera.Constants.FlashMode.torch}
                  showMarker={true}
                  fadeIn={true}
                  reactivate={true}
                  containerStyle={{ alignSelf: 'center' }}
                />
              )}
            </LinearGradient>
          </Modal>

          {CheckScreen === 'settings' ? null : (
            <TouchableOpacity
              onPress={() => SkipFunction()} ///1
              style={{
                alignSelf: 'flex-end',
                marginTop: spaceVertical.small,
                right: '5%'
              }}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          )}

          {CheckScreen === 'settings' ? null : (
            <Text style={styles.header}>Set up your profile</Text>
          )}

          <Text style={Platform.OS === 'ios' ? styles.textIOS : styles.text}>
            Update your profile to connect with your doctor and leave a better
            impression.
          </Text>

          {!loader ? (
            <KeyboardAwareScrollView>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainerStyle}>
                {ImageSelected ? (
                  <Image source={{ uri: ImageSelected }} style={styles.image} />
                ) : (
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={
                      image64
                        ? { uri: image64 }
                        : require('../../assets/images/profiledetails.png')
                    }
                  />
                )}

                <TouchableOpacity onPress={() => OPENPICKER()}>
                  <Image
                    source={require('../../assets/images/Camera.png')}
                    style={styles.camara}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

                <TextInputs
                  secureText={false}
                  value={Form.file_no}
                  devicetype={'ios'}
                  editable={false}
                  image={require('../../assets/images/fileNum.png')}
                  title={'File no.'}
                  star={'*'}
                  placeholder={'File no.'}
                  onChangeText={(value: any) => {
                    setForm({ ...Form, mc_id: value });
                  }}
                />

                {/* {!Form.mc_id && sub ? (
              <Text style={styles.Error}>please add medicalCenter</Text>
            ) : null} */}

                <View style={styles.emailtitle}>
                  <Image
                    style={styles.profile}
                    resizeMode="contain"
                    source={require('../../assets/images/gender.png')}></Image>
                  <Text style={styles.fieldtitle}>
                    Gender <Text style={{ color: 'red' }}>*</Text>
                  </Text>
                </View>

                <Dropdown
                  data={Gender}
                  maxHeight={150}
                  labelField="label"
                  valueField="value"
                  itemTextStyle={{
                    fontSize: fontSize.normal,
                    color: colors.forgotpassgray
                  }}
                  selectedTextStyle={{
                    fontSize: fontSize.normal,
                    color: colors.forgotpassgray
                  }}
                  placeholder={'Select your gender'}
                  placeholderStyle={{ fontFamily: fontFamily.regular }}
                  containerStyle={{ bottom: '0%' }}
                  style={styles.gender}
                  iconStyle={{
                    height: 30,
                    opacity: 0.6,
                    left: 3,
                    tintColor: colors.forgotpassgray
                  }}
                  value={Form.gender}
                  onChange={(item: any) => {
                    setForm({ ...Form, gender: item.value });
                  }}
                />

                {!Form.gender && sub ? (
                  <Text style={styles.Error}>please select gender</Text>
                ) : null}

                <View style={styles.emailtitle}>
                  <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('../../assets/images/cal.png')}></Image>
                  <Text style={styles.fieldtitle}>
                    Date of Birth <Text style={{ color: 'red' }}>*</Text>
                  </Text>
                </View>

                <TouchableOpacity
                  style={[styles.input, styles.mb]}
                  onPress={() => setShowEnd(!showend)}>
                  <Text
                    style={{
                      fontFamily: fontFamily.regular,
                      fontSize: fontSize.normal,
                      color: colors.forgotpassgray
                    }}>
                    {eplaceholder
                      ? 'Select your date of birth'
                      : moment(Form?.dob).format('DD-MM-YYYY')}
                  </Text>
                </TouchableOpacity>

                {!Form.dob && sub ? (
                  <Text style={styles.Error}>Please select date of birth</Text>
                ) : null}
                {showend && (
                  <DateTimePicker
                    style={{ alignSelf: 'center', marginTop: 10 }}
                    testID="dateTimePicker"
                    value={new Date(timestamp)} // Create a new Date object from the timestamp value
                    maximumDate={new Date()} // Pass the Date object for maximumDate prop
                    mode="date"
                    display={Platform.OS === 'ios' ? 'default' : 'spinner'}
                    is24Hour={true}
                    onChange={onChangeEnd}
                  />
                )}
                <TextInputs
                  secureText={false}
                  devicetype={'ios'}
                  editable={NationalIdFromAPI ? false : true}
                  star={'*'}
                  value={Form.national_id}
                  image={require('../../assets/images/nationalid.png')}
                  title={'National ID'}
                  placeholder={'Enter your national ID no'}
                  onChangeText={(value: any) => {
                    setForm({ ...Form, national_id: value.trim() });
                  }}
                />

                {!Form.national_id && sub ? (
                  <Text style={styles.Error}>Please enter national ID</Text>
                ) : null}

                <TextInputs
                  secureText={false}
                  editable={false}
                  devicetype={'ios'}
                  value={Form.mc_name}
                  image={require('../../assets/images/mc2.png')}
                  title={'Medical Center'}
                  star={'*'}
                  placeholder={'Scan your medical center QR Code'}
                  onChangeText={(value: any) => {
                    setForm({ ...Form, mc_id: value.trim() });
                  }}
                />

                {!Form.mc_id && sub ? (
                  <Text style={styles.Error}>
                    Please scan QR to add your medical center
                  </Text>
                ) : null}

                {/* <Text style={[styles.header, { alignSelf: 'center' }]}>OR</Text> */}
                <View style={{ marginTop: 12 }}>
                  <Text style={styles.fieldtitle}>Scan QR Code</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  activeOpacity={0.5}
                  style={styles.scanner}>
                  <Image
                    style={styles.scanimg}
                    resizeMode="contain"
                    source={require('../../assets/images/scanner.png')}
                  />
                </TouchableOpacity>

                <Buttons
                  needLoading={loginloading}
                  onPress={() => Updateprofile()}
                  style={styles.btn}
                  text={'Complete'}
                />
              </ScrollView>
            </KeyboardAwareScrollView>
          ) : (
            <ActivityIndicator
              style={{ justifyContent: 'center', top: responsiveHeight(30) }}
              size="large"
              color={colors.simplegreen}
            />
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileDetails;
