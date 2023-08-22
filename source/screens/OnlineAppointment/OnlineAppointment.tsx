import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import {
  colors,
  responsiveHeight,
  responsiveWidth
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { AppointmentDetails } from '../../utils/service';
import { styles } from './OnlineAppointmentStyle';

const OnlineAppointment = ({ navigation, route }: any) => {
  const params = route.params;
  const appointment_id = params.appointment_id;
  const doctor_id = params.doctor_id;
  const [loader, setLoader] = useState(true);
  const [onlinedata, setOnlineData]: any = useState();

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    if (onlinedata) {
      setLoader(false);
    }
  }, [onlinedata]);

  const getDetails = async () => {
    const alldetails = await AppointmentDetails({
      payloadData: {
        requestData: {
          appointment_id: appointment_id
        }
      }
    });
    if (alldetails.rc === 0) {
      setOnlineData(alldetails?.payloadResponse?.data);
    } else {
      showToast(alldetails?.payloadResponse?.error[0]?.message);
    }
  };

  const end_time = moment(onlinedata?.appointment_time)
    .add(15, 'minutes')
    .toISOString();

  const handleClick = () => {
    const currentTime = moment();
    if (currentTime.isBetween(onlinedata?.appointment_time, end_time)) {
      {
        onlinedata?.appointment_mode === 'VIDEO' ||
        onlinedata?.appointment_mode === 'AUDIO'
          ? Createmeeting()
          : Chat();
      }
    } else if (currentTime.isBefore(onlinedata?.appointment_time)) {
      showToast('Your appointment time is yet to begin');
      // Action not allowed during this time
    } else if (currentTime.isAfter(end_time)) {
      showToast('Your appointment time  has passed');
    } else {
      showToast('please contact to doctor ');
    }
  };

  const Createmeeting = () => {
    navigation.navigate('Authentication', {
      screen: 'Createmeet',
      params: {
        appointment_id: appointment_id,
        type: onlinedata.appointment_mode,
        name: onlinedata.doctor_name,
        image: onlinedata.doctor_img
      }
    });
  };

  const Chat = () => {
    navigation.navigate('Authentication', {
      screen: 'ChatScreen',
      params: {
        chatId: doctor_id,
        username: onlinedata.doctor_name,
        profile_pic: onlinedata.doctor_img
      }
    });
  };

  const convertTo12Hour = (timeString: any) => {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(':').map(Number);

    // Determine if it's AM or PM
    const amOrPm = hours < 12 ? 'AM' : 'PM';

    // Convert from 24-hour to 12-hour format
    const twelveHour = hours % 12 || 12;

    // Format the time string with leading zeros
    const formattedTime = `${twelveHour.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')} ${amOrPm}`;

    return formattedTime;
  };

  const Dates =
    new Date(onlinedata?.appointment_time).getHours() +
    ':' +
    new Date(onlinedata?.appointment_time).getMinutes();

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow title={'Online appointments'} />

        {!loader ? (
          <>
            <View style={styles.topview}>
              <Image
                style={styles.patient}
                source={{ uri: onlinedata?.doctor_img }}
              />
              <View style={{ left: 10, alignSelf: 'center' }}>
                <Text numberOfLines={1} style={styles.name}>
                  {onlinedata?.doctor_name}
                </Text>
                <Text numberOfLines={1} style={styles.fileno}>
                  {onlinedata?.doctor_specialities[0]}
                </Text>
              </View>
            </View>

            <View style={styles.detailview}>
              <View style={styles.middleview}>
                <View style={styles.bgsquare}>
                  <Image
                    style={styles.callicon}
                    tintColor={
                      onlinedata?.appointment_mode === 'AUDIO'
                        ? 'white'
                        : '#FFFFFF20'
                    }
                    resizeMode="contain"
                    source={require('../../assets/images/callicon.png')}
                  />
                </View>
                <View style={styles.bgsquare}>
                  <Image
                    style={styles.msgicon}
                    tintColor={
                      onlinedata?.appointment_mode === 'CHAT'
                        ? 'white'
                        : '#FFFFFF20'
                    }
                    resizeMode="contain"
                    source={require('../../assets/images/msgicon.png')}
                  />
                </View>

                <View style={styles.bgsquare}>
                  <Image
                    style={styles.videoicon}
                    resizeMode="contain"
                    tintColor={
                      onlinedata?.appointment_mode === 'VIDEO'
                        ? 'white'
                        : '#FFFFFF20'
                    }
                    source={require('../../assets/images/videoicon.png')}
                  />
                </View>

                <TouchableOpacity
                  style={[
                    styles.bgsquare,
                    { backgroundColor: colors.simplegreen }
                  ]}>
                  <Image
                    style={styles.icon}
                    resizeMode="contain"
                    source={require('../../assets/images/alrmicon.png')}
                  />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.innerview}>
                <View style={styles.headertext}>
                  <View style={styles.innertextview}>
                    <Image
                      style={styles.clock}
                      resizeMode="contain"
                      source={require('../../assets/images/clock.png')}
                    />

                    <View style={{ left: 10 }}>
                      <Text style={styles.text}>Visit Time</Text>
                      <Text style={styles.fileno}>
                        {new Date(onlinedata?.appointment_time).toDateString()}
                      </Text>

                      <Text
                        style={[styles.fileno, { color: colors.simplegreen }]}>
                        {convertTo12Hour(Dates) +
                          ' - ' +
                          moment(convertTo12Hour(Dates), 'h:mmA')
                            .add(onlinedata.appointment_duration, 'minutes')
                            .format('hh:mm A')}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.headertext}>
                    <View style={styles.innertextview}>
                      <Image
                        style={styles.clock}
                        resizeMode="contain"
                        source={require('../../assets/images/fees.png')}
                      />
                      <View style={{ left: 10 }}>
                        <Text style={styles.text}>Fee Information</Text>
                        <Text style={styles.fileno}>Paid</Text>
                        <Text
                          style={[
                            styles.fileno,
                            { color: colors.simplegreen }
                          ]}>
                          ${onlinedata?.appointment_price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <View
                style={{
                  bottom: 20,
                  position: 'absolute',
                  alignSelf: 'center'
                }}>
                {onlinedata?.appointment_mode === 'INPERSON' ? null : (
                  <Buttons
                    onPress={() => {
                      onlinedata?.appointment_mode === 'VIDEO' ||
                      onlinedata?.appointment_mode === 'AUDIO' ||
                      onlinedata?.appointment_mode === 'CHAT'
                        ? handleClick()
                        : console.log('In Null');
                    }}
                    style={styles.btn}
                    text={
                      onlinedata?.appointment_mode === 'VIDEO'
                        ? 'Start Video Call Now'
                        : onlinedata?.appointment_mode === 'AUDIO'
                        ? 'Start Voice Call Now'
                        : onlinedata?.appointment_mode === 'CHAT'
                        ? 'Start Chat Now'
                        : null
                    }
                  />
                )}
              </View>
            </View>
          </>
        ) : (
          <ActivityIndicator
            style={{ justifyContent: 'center', top: responsiveHeight(40) }}
            size="large"
            color={colors.simplegreen}
          />
        )}
      </LinearGradient>
    </View>
  );
};

export default OnlineAppointment;
