import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PTRView from 'react-native-pull-to-refresh';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import { appointment_btn } from '../../data/data';
import {
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { PatientAppointment } from '../../utils/service';
import { styles } from './Appointmentsstyles';

const Appointment = ({ navigation }: any) => {
  

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#FFF', '#FFF']}>
        <HeaderArrow title={'Notifications'} backIconsHide={true} />
       
                <View style={styles.fileArea}>
                  <Image
                    style={{
                      width: 100,
                      borderWidth: Platform.OS === 'ios' ? 0 : 1,
                      height: 100
                    }}
                    resizeMode="contain"
                    source={require('../../assets/images/file1.png')}
                  />
                  <Text style={styles.fileTitle}>
                  Exciting Developments Underway 🚀
                  </Text>
                </View>
          
        
      </LinearGradient>
    </View>
  );
};

export default Appointment;
