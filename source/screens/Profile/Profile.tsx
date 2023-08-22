import {View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Profilestyles';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import TextInputs from '../../components/TextInput/TextInput';
import Buttons from '../../components/Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Gender = [
  {id: 1, value: 'Male', label: 'Male'},
  {id: 2, value: 'Female', label: 'Female'},
];

const Profile = ({navigation}: any) => {
  const [eplaceholder, setEPlaceholder]: any = useState(true);
  const [endtime, setEndTime]: any = useState(new Date());
  const [showend, setShowEnd]: any = useState(false);
  const [value, setValue] = useState(null);
  const [secureText, setSecureText] = useState(true);

  const onChangeEnd = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowEnd(false);
    setEndTime(currentDate);
    setEPlaceholder(false);
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
        <View>
          <HeaderArrow
            title={'Edit Profile'}
          />
          <Image
            source={require('../../assets/images/patient.png')}
            style={styles.image}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/Camera.png')}
              style={styles.camara}
            />
          </TouchableOpacity>
          <KeyboardAwareScrollView>
          <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TextInputs
            secureText={false}
            image={require('../../assets/images/man.png')}
            title={'Name'}
            placeholder={'Deep Bhatt'}
          />
          <TextInputs
            secureText={false}
            image={require('../../assets/images/phone.png')}
            title={'Phone Number'}
            placeholder={'+91 9824129937'}
            keyboard={'numeric'}
          />
          <View style={styles.passwordtitle}>
            <Image
              style={styles.passwordicon}
              source={require('../../assets/images/Lock_icon.png')}></Image>
            <Text style={styles.fieldtitle}>Password</Text>
          </View>
          <View>
            <TextInput
              placeholder="Enter password"
              placeholderTextColor={'#797979'}
              secureTextEntry={secureText}
              style={styles.textinput}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureText(prev => !prev);
              }}>
              <IonIcon
                name={secureText ? 'eye-off-outline' : 'eye-outline'}
                size={25}
                style={styles.logoEye}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.emailtitle}>
            <Image
              style={styles.profile}
              source={require('../../assets/images/gender.png')}></Image>
            <Text style={styles.fieldtitle}>Gender</Text>
          </View>
          <Dropdown
            data={Gender}
            maxHeight={300}
            labelField="label"
            valueField="value"
            style={styles.gender}
            value={value}
            onChange={(item: any) => {
              setValue(item);
            }}
          />

          <View style={styles.emailtitle}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/cal.png')}></Image>
            <Text style={styles.fieldtitle}>Date of Birth</Text>
          </View>
          <TouchableOpacity
            style={[styles.input, styles.mb]}
            onPress={() => setShowEnd(true)}>
            <Text>{eplaceholder ? 'Select Date' : endtime.toDateString()}</Text>

            {showend && (
              <DateTimePicker
                testID="dateTimePicker"
                value={endtime}
                mode="date"
                is24Hour={true}
                onChange={onChangeEnd}
              />
            )}
          </TouchableOpacity>

          <Buttons style={styles.btn} text={'Save'} />
          </ScrollView>
          </KeyboardAwareScrollView>

        </View>
      </LinearGradient>
    </View>
  );
};

export default Profile;
