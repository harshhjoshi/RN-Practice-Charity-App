import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import React from 'react';
import { styles } from '../../screens/Settings/Settingsstyles';

const SettingHead = ({ name, onPress, source }: any) => {
  return (
    <View style={styles.settingContainer}>
      <View style={styles.settingLeft}>
        <Image source={source} style={styles.profileIcon} />
        <View style={styles.settingTitle}>
          <Text style={styles.title}>Hello, User!</Text>
          <Text
            numberOfLines={2}
            style={styles.subTitle
            }>
           Exciting Developments Underway 🚀
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.selectIcon}>
          <Image
            source={require('../../assets/images/edit_pencil.png')}
            resizeMode="contain"
            style={styles.editimg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingHead;
