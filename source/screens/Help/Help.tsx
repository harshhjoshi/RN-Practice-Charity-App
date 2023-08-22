// import {View, Text, TextInput} from 'react-native';
// import React, {useState} from 'react';
// import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
// import LinearGradient from 'react-native-linear-gradient';
// import NormalButton from '../../components/NormalButton';
// import Model from '../../components/Model';
// import {colors} from '../../styles/variables';
// import {styles} from './HelpStyles';

// const Help = ({navigation}: any) => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   return (
//     <View style={styles.container}>
//       <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
//         <HeaderArrow
//           title={'Help'}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Type your message"
//           placeholderTextColor={colors.forgotpassgray}
//           multiline={true}
//           numberOfLines={8}
//         />
//         <Text style={styles.text}>
//           Fill the above form and send an email and one of our team member will
//           address your question as soon as possible
//         </Text>
//         <NormalButton
//           bacgroundstyle={styles.button}
//           text={'send mail'}
//           onPress={() => setModalVisible(!isModalVisible)}
//         />
//         {/* model */}
//         <Model
//           isVisible={isModalVisible}
//           text="Go to dashboard"
//           title="Mail sent"
//           source={require('../../assets/images/mailright.png')}
//           twisbtn={false}
//           onPress={() => setModalVisible(false)}
//           subTitle="Your mail successfully sent. We will get back to you soon. "
//         />
//       </LinearGradient>
//     </View>
//   );
// };

// export default Help;
