import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../screens/Login/Loginstyles';

const NormalButton = ({bacgroundstyle, textStyle,text, onPress}: any) => {
  return (
    <TouchableOpacity
      style={bacgroundstyle}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NormalButton;
