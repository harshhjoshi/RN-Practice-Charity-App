import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {styles} from '../screens/Login/Loginstyles';
import { colors, responsiveHeight, responsiveWidth } from '../styles/variables';

const YellowBtn = ({ margintop,text, onPress,needLoading}: any) => {
  return (
    <TouchableOpacity
    style={{backgroundColor:'#E0A14E',width:responsiveWidth(90),borderRadius:40,height:responsiveHeight(7),alignSelf:'center',marginBottom:10,
    justifyContent: 'center',marginTop:margintop
}}
    
    onPress={onPress} activeOpacity={0.8}>
          {needLoading?(
          <ActivityIndicator size="small" color={colors.white} />
        ) : (
        <Text style={styles.buttonText}>{text}</Text>
        )}
    </TouchableOpacity>
  );
};
export default YellowBtn;
