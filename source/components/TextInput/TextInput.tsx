import {View, Text, TextInput, Image, TouchableOpacity, Platform} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './Textinputstyles';

const TextInputs = React.forwardRef ((props:any,ref:any) => {
  return (
    <View>
      {/* <View style={styles.passwordtitle}>
        <Image  resizeMode='contain' style={styles.passwordicon} source={props.image}></Image>
        <Text style={styles.fieldtitle}>{props.title} <Text style={{color:'red'}}>{props.star}</Text></Text>
      </View> */}
      <View style={{marginTop:Platform.OS === "ios" ? 12 : 0} }>
        <TextInput
          editable={props.editable}
          value={props.value}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
          returnKeyType={props.returnKeyType}
          ref={ref}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboard}
          placeholder={props.placeholder}
          placeholderTextColor={'#797979'}
          secureTextEntry={props.secureText}
          style={props.devicetype === "ios" ?styles.textinputIOS: styles.textinput}
          maxLength={props.maxlength}
        />
      
      </View>
    </View>
  );
});

export default TextInputs;
