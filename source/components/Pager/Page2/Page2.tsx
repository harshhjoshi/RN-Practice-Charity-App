import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../PageStyles';

const Page3 =() => {
  return (
    <>
      <View style={{flex: 1}}>
        <Image
          resizeMode='contain'

          source={require('../../../assets/images/page2.png')}
          style={styles.img}></Image>

        <View style={styles.view}>
          <Text style={styles.title}>Live talk with doctor</Text>
          <Text style={styles.subTitle}>
            Easily connect with doctor and start video chat for your better
            treatment & prescription.
          </Text>
        </View>
      </View>
    </>
  );
};

export default Page3;
