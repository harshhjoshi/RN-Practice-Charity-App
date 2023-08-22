import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { ModesList, slotsTime } from '../../utils/service';
import { styles } from './BookAppointmentStyle';

const BookAppointment = ({ navigation, route }: any) => {
  const params = route.params;
  const date = params.date;
  const newDate = moment(date, 'ddd MMM DD YYYY').format('YYYY-MM-DD');
  const doc_name = params.doc_name;
  const doctor_id = params._id;
  const days_Numb = params.days_Numb;

  const mode = [
    { label: '15 mins', value: '15 mins' },
    { label: '30 mins', value: '30 mins' }
  ];
  const [list, setList] = useState();
  const [text, setText] = useState('');
  const [modes, setModes] = useState();
  const [loder, setLoader] = useState(false);
  const [duration, setDuration] = useState(15);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [slotsData, setSlotsData]: any = useState([]);

  const timeArray12hr = slotsData.map((timeObj: any) => {
    const timeParts = timeObj.label.split(':');
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);
    const time = new Date(2023, 0, 1, hour, minute).toLocaleTimeString(
      'en-US',
      {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }
    );
    const newTimeObj = {
      label: time,
      value: timeObj.value
    };
    return newTimeObj;
  });

  useEffect(() => {
    Modes();
  }, []);

  const Modes = async () => {
    setLoader(true);
    const getmodes = await ModesList({
      payloadData: {
        requestId: '',
        appId: 'MOBILE',
        sessionId: '',
        userId: '',
        isEcnrypt: true,
        requestData: {
          page: 1,
          pageSize: 4,
          is_active: true,
          search: ''
        },
        appChannelId: 2
      }
    });

    if (getmodes?.rc === 0) {
      setLoader(false);
      setModes(getmodes?.payloadResponse?.data?.data);
    } else {
      setLoader(false);
      showToast(getmodes?.payloadResponse?.error[0]?.message);
    }
  };

  useEffect(() => {
    slot();
  }, [duration]);

  const slot = async () => {
    const now = moment().format('HH:mm');
    const soltsPost = await slotsTime({
      payloadData: {
        requestData: {
          doctor_id: doctor_id,
          appointment_date: newDate,
          appointment_day: days_Numb,
          current_time: now
        }
      }
    });
    if (soltsPost?.rc === 0) {
      let newSlotss = [];
      let len = soltsPost.payloadResponse.data.slots.length;
      for (let i = 0; i < len; i++) {
        newSlotss.push({
          label: soltsPost.payloadResponse.data.slots[i],
          value: i.toString()
        });
      }
      await setSlotsData(newSlotss);
      if (newSlots.length === 0) {
        setLoader(false);
      }
    } else {
      showToast(soltsPost?.payloadResponse?.error[0]?.message);
    }
  };

  const presslist = (_id: any, text: any) => {
    setList(_id);
    setText(text);
  };

  type List = {
    image: any;
    text: any;
    bgcolor: any;
    price: any;
    desc: any;
    _id: any;
    price_visibility: any;
  };

  const ItemRender = ({
    text,
    image,
    desc,
    price,
    bgcolor,
    _id,
    price_visibility
  }: List) => (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => presslist(_id, text)}
      style={[
        styles.listview,
        {
          backgroundColor:
            _id === list && text === 'INPERSON'
              ? '#61BEDC'
              : _id === list && text === 'CHAT'
              ? '#FFA873'
              : _id === list && text === 'VIDEO'
              ? '#A079EC'
              : _id === list && text === 'AUDIO'
              ? '#5554DB'
              : colors.white
        }
      ]}>
      <View style={styles.topview}>
        <View style={styles.imgview}>
          <Image style={[styles.icon]} source={{ uri: image }} />
        </View>
        <View style={styles.textview}>
          <Text
            numberOfLines={2}
            style={[
              styles.listtext,
              { color: _id === list ? colors.white : colors.black }
            ]}>
            {text}
          </Text>
          <Text
            numberOfLines={2}
            style={[
              styles.desctext,
              { color: _id === list ? colors.white : colors.forgotpassgray }
            ]}>
            {desc}
          </Text>
        </View>
      </View>
      <Text
        style={[
          styles.price,
          { color: _id === list ? colors.white : colors.simplegreen }
        ]}>
        {price_visibility === true ? '$' + price : null}
      </Text>
    </TouchableOpacity>
  );

  let newSlots = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' }
  ];

  const BookingInitiated = () => {
    if (!selectedSlot) {
      showToast('Please select slots');
    } else if (!list) {
      showToast('Please select appointment mode');
    } else {
      navigation.navigate('PatientBookingDetails', {
        date: date,
        text: text,
        doc_name: doc_name,
        appointment_mode_id: list,
        id: doctor_id,
        selectedSlot: selectedSlot,
        timeslot: duration
      });
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow title={'Appointment'} />
        <Text style={[styles.date, styles.mt]}>{date}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            width: '90%',
            alignSelf: 'center'
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/time.png')}
              style={{ height: 20, width: 20, resizeMode: 'contain' }}></Image>
            <Text
              style={{
                marginStart: 10,
                fontSize: 15,
                color: 'black',
                fontWeight: '600'
              }}>
              Available Timing
            </Text>
          </View>
          <View></View>

          {loder || timeArray12hr.length === 0 ? null : (
            <Dropdown
              style={styles.branchview}
              itemContainerStyle={{ borderRadius: 10 }}
              selectedTextStyle={styles.dropdowntext}
              containerStyle={{ borderRadius: 10 }}
              data={mode}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={duration + ' min'}
              // value={""}
              onChange={item => {
                setDuration(item.value === '15 mins' ? 15 : 30);
              }}
            />
          )}
        </View>

        {loder ? null : timeArray12hr.length === 0 ? (
          <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>No slots available</Text>
          </View>
        ) : (
          <View>
            <Dropdown
              data={timeArray12hr}
              containerStyle={{ borderRadius: 10 }}
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
              placeholder={!selectedSlot ? 'Select timeslot' : selectedSlot}
              placeholderStyle={{ fontFamily: fontFamily.regular }}
              style={{
                alignSelf: 'center',
                marginTop: 15,
                width: '90%',
                borderColor: 'lightgray',
                borderWidth: 1,
                padding: 12,
                borderRadius: 10
              }}
              iconStyle={{
                height: 30,
                opacity: 0.6,
                left: 3,
                tintColor: colors.forgotpassgray
              }}
              value={selectedSlot}
              onChange={(item: any) => {
                setSelectedSlot(item.label);
              }}
            />
          </View>
        )}

        {loder ? (
          <ActivityIndicator
            style={{ justifyContent: 'center', top: responsiveHeight(25) }}
            size="large"
            color={colors.simplegreen}
          />
        ) : null}

        {!loder && timeArray12hr.length != 0 ? (
          <>
            <KeyboardAwareScrollView>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.upperview}>
                <Text style={[styles.listtext, { color: colors.black }]}>
                  Select Appointment Mode
                </Text>

                <FlatList
                  data={modes}
                  renderItem={({
                    item: {
                      icon,
                      type,
                      bgcolor,
                      price,
                      description,
                      _id,
                      price_visibility
                    }
                  }) => (
                    <ItemRender
                      image={icon}
                      text={type}
                      bgcolor={bgcolor}
                      price={price}
                      desc={description}
                      _id={_id}
                      price_visibility={price_visibility}
                    />
                  )}
                  contentContainerStyle={{ paddingBottom: responsiveHeight(5) }}
                  showsVerticalScrollIndicator={false}
                />
              </ScrollView>
            </KeyboardAwareScrollView>
            {selectedSlot && text ? (
              <Buttons
                text={'Continue'}
                style={styles.btn}
                onPress={() => BookingInitiated()}
              />
            ) : null}
          </>
        ) : null}
      </LinearGradient>
    </View>
  );
};

export default BookAppointment;
