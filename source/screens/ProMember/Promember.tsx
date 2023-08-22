// import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
// import React, {useRef, useState} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
// import Carousel from 'react-native-snap-carousel';
// import Model from '../../components/Model';
// import {proMember_data, talk_data} from '../../data/data';
// import {responsiveWidth, spaceVertical} from '../../styles/variables';
// import {styles} from './ProMemberStyles';

// const ProMember = ({navigation}: any) => {
//   const [indexs, setIndex]: any = useState(1);
//   const carouselRef: any = useRef();
//   const [isModalVisible, setModalVisible] = useState(false);

//   const renderItem = ({item, index}: any) => (
//     <View
//       style={[
//         styles.renderContainer,
//         {backgroundColor: index == indexs ? '#332840' : '#FFFFFF'},
//       ]}>
//       <Text
//         style={[
//           styles.mainTitle,
//           {color: index == indexs ? '#FFFFFF' : 'black'},
//         ]}>
//         {item.plan}
//       </Text>
//       <View style={styles.subRenderContainer}>
//         {item.planDesc.map((i: any) => {
//           return (
//             <View style={styles.row}>
//               <Image
//                 source={require('../../assets/images/right.png')}
//                 style={styles.rightArrow}
//               />
//               <Text
//                 style={[
//                   styles.title,
//                   {color: index == indexs ? '#FFFFFF' : 'black'},
//                 ]}>
//                 {i.p1}
//               </Text>
//             </View>
//           );
//         })}
//       </View>

//       <View style={styles.priceSection}>
//         <Text
//           style={[
//             styles.price,
//             {color: index == indexs ? '#FFFFFF' : 'black'},
//           ]}>
//           {item.price}
//         </Text>
//         <Text
//           style={[
//             styles.title,
//             {color: index == indexs ? '#FFFFFF' : 'black'},
//           ]}>
//           {item.month}
//         </Text>
//       </View>
//       <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => setModalVisible(!isModalVisible)}>
//         <LinearGradient
//           style={styles.btn}
//           colors={index == indexs ? ['white', 'white'] : ['#5936F1', '#47DAE3']}
//           start={{x: 0, y: 0}}
//           end={{x: 1, y: 0}}>
//           <Text
//             style={[
//               styles.textStyle,
//               {color: index == indexs ? '#129A7F' : 'white'},
//             ]}>
//             Get started
//           </Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );

//   const renderItem2 = ({item:{talk}}: any) => (
//     <View style={styles.renderItem2Contaner}>
//       <Image
//         source={require('../../assets/images/patient.png')}
//         style={styles.patientIcon}
//       />
//       <View>
//         <View style={styles.row}>
//           {[1, 2, 3, 4, 5].map((i: any) => (
//             <View>
//               <Image
//                 source={require('../../assets/images/star.png')}
//                 style={styles.starIcon}
//               />
//             </View>
//           ))}
//         </View>
//         <Text style={styles.talktitle}>{talk}</Text>
//       </View>
//     </View>
//   );
//   return (
//     <View style={styles.container}>
//       <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
//         <HeaderArrow
//           title={'Become a pro member jihj jukju'}
//         />
//         <View style={{marginTop: spaceVertical.small}}>
//           <Carousel
//             ref={carouselRef}
//             data={proMember_data}
//             renderItem={renderItem}
//             sliderWidth={responsiveWidth(100)}
//             itemWidth={responsiveWidth(70)}
//             useScrollView={true}
//             onSnapToItem={(index: any) => {
//               let i = index;
//               setIndex(i);
//             }}
//             firstItem={1}
//           />
//         </View>
//         <View style={styles.talkSection}>
//           <Text style={styles.talkTiltle}>They talk about us</Text>
//           <FlatList
//             data={talk_data}
//             renderItem={renderItem2}
//             keyExtractor={(item: any) => item.id}
//             showsVerticalScrollIndicator={false}
//             contentContainerStyle={styles.contentContainerStyle}
//           />
//         </View>
//         <Model
//           isVisible={isModalVisible}
//           text="Go to dashboard"
//           title="Upgraded"
//           twisbtn={false}
//           source={require('../../assets/images/crownright.png')}
//           onPress={() => setModalVisible(false)}
//           subTitle="Your DoctorPoint Pro Membership activated. Enjoy your Pro Membership and get unlimited consultations."
//         />
//       </LinearGradient>
//     </View>
//   );
// };

// export default ProMember;
