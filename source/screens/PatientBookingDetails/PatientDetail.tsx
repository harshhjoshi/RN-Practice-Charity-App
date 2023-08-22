import moment from 'moment';
import React, {  useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import Model from '../../components/Model';
import TextInputs from '../../components/TextInput/TextInput';
import { btn_maleFemal } from '../../data/data';
import { colors } from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { BookAppointment, PatientInfo } from '../../utils/service';
import { useSelector } from 'react-redux';
import { styles } from './PatientDetailStyle';

const PatientDetail = ({ navigation, route }: any) => {
  const params = route.params;
  const date = params.date;
  const text = params.text;
  const doc_name = params.doc_name;
  const id = params.id;
  const selectedSlot = params.selectedSlot;
  const duration = params.timeslot;
  const [loginloading, setloginloading] = useState(false);
  const new_time = moment(selectedSlot, 'hh:mm a').format('HH:mm');
  const new_date = moment(date, 'ddd MMM DD YYYY').format('YYYY-MM-DD');
  const appointment_mode_id = params.appointment_mode_id;
  const [isModalVisible, setModalVisible] = useState(false);
  const [button, setButton] = useState(0);
  const [patientdata, setPatientData]: any = useState();
  const [desc, setdesc] = useState('');
  const branch_id = useSelector((state: any) => state.message.branchName);
  const appointmenetDate = date + ' ' + selectedSlot;
  const momentObj = moment(appointmenetDate, 'ddd MMM DD YYYY h:mm A');
  const isoString = momentObj.toISOString();

  const getDetails = async () => {
    const getapi = await PatientInfo();

    if (getapi?.rc == 0) {
      setPatientData(getapi?.payloadResponse?.data);
    } else {
      showToast(getapi?.payloadResponse?.error[0]?.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  const BookAppoitment = async () => {
    setloginloading(true);
    const booking = await BookAppointment({
      payloadData: {
        requestData: {
          doctor_id: id,
          appointment_mode_id: appointment_mode_id,
          appointment_timestamp: isoString,
          appointment_date: new_date,
          branch_id: branch_id ? branch_id : null,

          appointment_time: new_time,
          problem_description: desc,
          appointment_duration: duration
        }
      }
    });

    if (booking?.rc === 0) {
      setloginloading(false);
      setModalVisible(!isModalVisible);
    } else {
      setloginloading(false);
      showToast(booking?.payloadResponse?.error[0]?.message);
      navigation.navigate('Tabs');
    }
  };

  const book = async () => {
    if (desc) {
      await BookAppoitment();
    } else {
      showToast('Please write your problem');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow title={'Appointment details'} />
        <KeyboardAwareScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.mtTiny}>
            <TextInputs
              secureText={false}
              image={require('../../assets/images/man.png')}
              title={"Patient's Name"}
              placeholder={'Enter your name'}
              value={patientdata?.name}
              editable={false}
            />

            <TextInputs
              secureText={false}
              image={require('../../assets/images/phone.png')}
              title={'Phone Number'}
              placeholder={'+91 9824129937'}
              value={patientdata?.phone}
              keyboard={'numeric'}
              editable={false}
            />
            <TextInputs
              secureText={false}
              image={require('../../assets/images/appmode.png')}
              title={'Appointment Mode '}
              placeholder={'Message'}
              value={text}
              editable={false}
              // keyboard={'numeric'}
            />
            <TextInputs
              secureText={false}
              image={require('../../assets/images/cal.png')}
              title={'Appointment Date '}
              placeholder={'date'}
              value={date}
              editable={false}

              // keyboard={'numeric'}
            />
            <TextInputs
              secureText={false}
              image={require('../../assets/images/alarm2.png')}
              title={'Available Timings'}
              placeholder={selectedSlot}
              editable={false}
            />
            <View style={styles.emailtitle}>
              <Image
                style={styles.profile}
                resizeMode="contain"
                source={require('../../assets/images/gender.png')}></Image>
              <Text style={styles.fieldtitle}>Gender</Text>
            </View>
            <View style={styles.tickview}>
              {btn_maleFemal.map((item: any, index: any) => (
                <TouchableOpacity
                  onPress={() => setButton(item.name)}
                  style={styles.tickinnerview}>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={
                      patientdata?.gender != undefined &&
                      patientdata?.gender.toLowerCase() == item.text
                        ? require('../../assets/images/yes.png')
                        : require('../../assets/images/no.png')
                    }
                  />
                  <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TextInputs
              secureText={false}
              image={require('../../assets/images/docicon.png')}
              title={"Doctor's name"}
              placeholder={'Mahmudul Hasan Manik'}
              editable={false}
              value={doc_name}
            />
            <Text style={[styles.fieldtitle, styles.mtSmall]}>
              Write your problem
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Tell doctor about your problem"
              placeholderTextColor={colors.forgotpassgray}
              multiline={true}
              onChangeText={setdesc}
              value={desc.replace(/^\s+/, '')}
              numberOfLines={3}
            />
            <Buttons
              needLoading={loginloading}
              style={styles.btn}
              text={'Send Request'}
              onPress={() => book()}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
        {/* model */}
        <Model
          isVisible={isModalVisible}
          text="Go to dashboard"
          title="Completed"
          twisbtn={false}
          source={require('../../assets/images/quote.png')}
          onPress={() => navigation.navigate('Tabs')}
          subTitle={`Your appointment booking request successfully completed. Dr. ${doc_name} will connect you soon.`}
        />
      </LinearGradient>
    </View>
  );
};

export default PatientDetail;
