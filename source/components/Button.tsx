import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {styles} from '../screens/Login/Loginstyles';
import { colors } from '../styles/variables';

const Buttons = ({style, text, onPress,needLoading}: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        style={style}
        colors={['#36312B', '#36312B']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
          {needLoading?(
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
        <Text style={styles.buttonText}>{text}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default Buttons;
