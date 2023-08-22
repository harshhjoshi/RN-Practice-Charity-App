import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../PageStyles';

const Page3 =() => {
  return (
    <>
      <View style={{flex: 1}}>
        <Image
          resizeMode='contain'
          source={require('../../../assets/images/page3.png')}
          style={styles.img}></Image>

        <View style={styles.view}>
          <Text style={styles.title}>Chat With doctors</Text>
          <Text style={styles.subTitle}>
            Book an appointment with doctor. Chat with doctor via appointment
            letter. Get consultancy
          </Text>
        </View>
      </View>
    </>
  );
};

export default Page3;
