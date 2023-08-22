// import {View, Text, TouchableOpacity, LayoutAnimation} from 'react-native';
// import React, {useRef, useState} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import {faqs_settings} from '../../data/data';
// import {colors} from '../../styles/variables';
// import {styles} from './Faqstyles';

// const Faqs = ({navigation}: any) => {
//   const [drawerId, setdrawerId] = useState(null);
//   const scrollRef: any = useRef(null);

//   return (
//     <View style={styles.container}>
//       <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
//         <HeaderArrow
          
//           title={'FAQs'}
//         />
//         <View style={styles.mt}>
//           {faqs_settings.map((item: any, index: any) => (
//             <View key={index}>
//               <View style={styles.historyview}>
//                 <Text style={styles.que}>{item.question}</Text>
//               </View>

//               <TouchableOpacity style={styles.arrow}>
//                 <IonIcon
//                   name={
//                     drawerId == item.id ? 'chevron-down' : 'chevron-forward'
//                   }
//                   color={colors.forgotpassgray}
//                   size={25}
//                   onPress={() => {
//                     if (drawerId == item.id) {
//                       setdrawerId(null);
//                     } else {
//                       LayoutAnimation.configureNext(
//                         LayoutAnimation.Presets.easeInEaseOut,
//                       );
//                       setdrawerId(item.id);
//                       scrollRef.current?.scrollTo({
//                         y: 0,
//                         animated: true,
//                       });
//                     }
//                   }}
//                 />
//               </TouchableOpacity>
//               {drawerId == item.id ? (
//                 <Text style={styles.ans}>{item.answer}</Text>
//               ) : null}

//               <View style={styles.line}></View>
//             </View>
//           ))}
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// export default Faqs;
