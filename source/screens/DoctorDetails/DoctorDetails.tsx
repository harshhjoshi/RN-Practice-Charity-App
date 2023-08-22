import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import {
  colors,
  responsiveHeight,
  spaceVertical
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { getDoctorDetails } from '../../utils/service';
import { styles } from './DoctorDetailStyle';

const DoctorDetail = ({ navigation, route }: any) => {
  const params = route.params;
  const _id = params._id;
  const [details, setDetails]: any = useState();
  const [date, setDate]: any = useState('');
  const [loader, setLoader] = useState(true);
  const [days_Numb, setDays_Numb]: any = useState(new Date().getDay());

  const getDetails = async () => {
      const alldetails = await getDoctorDetails({
        payloadData: {
          requestData: {
            id: _id
          }
        }
      });

      if (alldetails.rc === 0) {
        setDetails(alldetails.payloadResponse.data);
      }
  };

  const onDateSelected = (dates: any) => {
    let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    setDate(new Date(dates).toDateString());
    setDays_Numb(dayNames.indexOf(dates.format('dddd').substring(0, 3)));
  };

  const booking = () => {
    if (date === '') {
      showToast('Please select date');
    } else {
      navigation.navigate('BookAppointment', {
        date: date,
        doc_name: details?.doctor_name,
        _id: _id,
        days_Numb: days_Numb
      });
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    if (details) {
      setLoader(false);
    }
  }, [details]);

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <HeaderArrow title={'Doctor Details'} />
        {!loader ? (
          <>
            <View style={styles.topview}>
              <Image
                style={styles.patient}
                resizeMode="contain"
                source={
                  details?.profile_pic && !Array.isArray(details?.profile_pic)
                    ? { uri: details?.profile_pic }
                    : require('../../assets/images/profiledetails.png')
                }
              />
              <View style={{ left: 10, alignSelf: 'center' }}>
                <Text style={styles.name}>{details?.doctor_name}</Text>
                <Text style={styles.fileno}>
                  {details?.specialities[0]?.name}
                </Text>
              </View>
            </View>
            <View style={styles.detailview}>
              <View style={styles.middleview}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.bgcircle}>
                    <Image
                      style={[styles.image18, { tintColor: colors.white }]}
                      resizeMode="contain"
                      source={require('../../assets/images/gender.png')}
                    />
                  </View>
                  <View style={styles.middleinternalview}>
                    <Text style={styles.age}>{details?.patients_served}+</Text>
                    <Text style={styles.agetext}>Patients</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.bgcircle}>
                    <Image
                      style={styles.dropimage}
                      resizeMode="contain"
                      source={require('../../assets/images/batch.png')}
                    />
                  </View>
                  <View style={styles.middleinternalview}>
                    <Text style={styles.age}>
                      {details?.exp_yrs ? details.exp_yrs : 0} Years
                    </Text>
                    <Text style={styles.agetext}>Experience</Text>
                  </View>
                </View>
              </View>

              <ScrollView contentContainerStyle={styles.innerview}>
                <View style={styles.bottomview}>
                  <Text style={styles.text}>About Doctor</Text>
                  <Text numberOfLines={4} style={styles.desc}>
                    {details?.doctor_name}
                  </Text>
                </View>
                <View style={{ flex: 1, marginTop: spaceVertical.small }}>
                  <CalendarStrip
                    scrollable
                    style={{ height: responsiveHeight(15) }}
                    innerStyle={{
                      minHeight: responsiveHeight(22),
                      marginStart: 12
                    }}
                    dayComponentHeight={150}
                    minDate={new Date()}
                    updateWeek={false}
                    startingDate={new Date()}
                    useIsoWeekday={false}
                    maxDate={
                      new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)
                    }
                    dayContainerStyle={styles.dayContainerStyle}
                    scrollerPaging={true}
                    leftSelector={[]}
                    rightSelector={[]}
                    onDateSelected={(dates: any) => onDateSelected(dates)}
                    scrollToOnSetSelectedDate={true}
                    calendarHeaderContainerStyle={{
                      position: 'absolute',
                      left: '5%'
                    }}
                    calendarHeaderStyle={styles.calendarHeaderStyle}
                    dateNumberStyle={styles.dateNumberStyle}
                    dateNameStyle={styles.dateNameStyle}
                    highlightDateContainerStyle={{
                      backgroundColor: colors.simplegreen
                    }}
                    highlightDateNameStyle={{ color: colors.white }}
                    highlightDateNumberStyle={{ color: colors.white }}
                  />
                </View>

                <View style={styles.buttonview}>
                  <Buttons
                    onPress={() => booking()}
                    style={styles.btn}
                    text={'Book appointment'}
                  />
                </View>
              </ScrollView>
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

export default DoctorDetail;
