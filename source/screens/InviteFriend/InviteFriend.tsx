// import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
// import { invitefrd_data, socialBtn_data } from '../../data/data';
// import { colors } from '../../styles/variables';
// import { styles } from './InviteFriendStyles';

// const InviteFriend = () => {
//   const [tab, setTab] = useState(1);
//   const [btn, setBtn]: any = useState('');

//   const renderItem = ({ item: { image, name, id } }: any) => (
//     <View style={styles.renderitem}>
//       <View style={styles.leftRender}>
//         <Image style={styles.profileIcon} source={image} />
//         <Text style={styles.name}>{name}</Text>
//       </View>
//       <TouchableOpacity
//         style={[
//           { backgroundColor: id == btn ? colors.simplegreen : '#A0A2B320' },
//           styles.btn
//         ]}
//         onPress={() => setBtn(id)}>
//         <Text
//           style={[
//             { color: id == btn ? colors.white : colors.forgotpassgray },
//             styles.title
//           ]}>
//           Invite
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
//         <HeaderArrow title={'Invite a friend'} />
//         <View style={styles.mainContainer}>
//           <View style={styles.buttonSection}>
//             {socialBtn_data.map((item: any, index: any) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => setTab(item.id)}
//                 style={[
//                   styles.tooglebutton,
//                   {
//                     backgroundColor:
//                       item.id == tab ? colors.simplegreen : colors.white
//                   }
//                 ]}>
//                 <View style={styles.btnConatine}>
//                   <Image style={styles.socialIcon} source={item.icon} />
//                   <Text
//                     style={[
//                       styles.btnTitle,
//                       {
//                         color:
//                           item.id == tab ? colors.white : colors.forgotpassgray
//                       }
//                     ]}>
//                     {item.name}
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ))}
//           </View>
//           <View style={{ flexGrow: 1 }}>
//             {tab === 1 ? (
//               <FlatList
//                 data={invitefrd_data}
//                 renderItem={renderItem}
//                 showsVerticalScrollIndicator={false}
//                 keyExtractor={(item: any) => item.id}
//                 contentContainerStyle={styles.contentContainerStyle}
//               />
//             ) : null}
//           </View>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// export default InviteFriend;
