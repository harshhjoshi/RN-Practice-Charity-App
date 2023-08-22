import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../styles/variables';
import { styles } from './CallEndStyles';

const CallEnd = ({ navigation, route }: any) => {
  const params = route.params;
  const doctor_name = params.doctor_name;
  const doctor_image = params.doctor_image;
  const doctor_duration = params.doctor_duration;

  let [hours, minutes] = doctor_duration?.split(':');
  hours = hours.padStart(2, '0');
  minutes = minutes.padStart(2, '0');
  const formattedTime = `${hours}:${minutes}`;

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <Text style={styles.end}>Call Ended</Text>
        <Text style={[styles.time, { color: colors.simplegreen }]}>
          {formattedTime}
        </Text>

        <Image
          source={{ uri: doctor_image?doctor_image:require('../../assets/images/profiledetails.png') }}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.name}>{doctor_name}</Text>
      
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={styles.buttonwhite}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default CallEnd;
