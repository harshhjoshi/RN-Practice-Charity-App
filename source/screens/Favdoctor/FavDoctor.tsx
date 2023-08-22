// import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
// import Model from '../../components/Model';
// import { favdoctor_data } from '../../data/data';
// import { styles } from './FavDoctorStyles';

// const FavDoctor = ({ navigation }: any) => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const renderItem = ({ item: { image, name, type, location } }: any) => (
//     <TouchableOpacity activeOpacity={0.7} style={styles.renderitem}>
//       <View style={styles.leftSection}>
//         <Image style={styles.profile} source={image} />
//         <View style={styles.textview}>
//           <Text style={styles.name}>{name}</Text>
//           <Text style={styles.types}>
//             {type} - <Text style={styles.location}>{location}</Text>
//           </Text>
//         </View>
//       </View>
//       <TouchableOpacity onPress={() => setModalVisible(!isModalVisible)}>
//         <Image
//           source={require('../../assets/images/lovebg.png')}
//           style={styles.loveicon}
//         />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
//         <HeaderArrow title={'Favourite doctor'} />
//         <View style={styles.mainContainer}>
//           <FlatList
//             data={favdoctor_data}
//             renderItem={renderItem}
//             showsVerticalScrollIndicator={false}
//             keyExtractor={(item: any) => item.id}
//             contentContainerStyle={styles.contentContainerStyle}
//           />
//         </View>
        
//         <Model
//           isVisible={isModalVisible}
//           text="Yes, Unlist it"
//           title="Unlisted"
//           text2="Cancel it"
//           twisbtn={true}
//           source={require('../../assets/images/heartright.png')}
//           onPress={() => navigation.navigate('Dashbord')}
//           onPressCancel={() => setModalVisible(!isModalVisible)}
//           subTitle="Do you want to unlisted Dr. Tierra Riley from your favourite list?"
//         />
//       </LinearGradient>
//     </View>
//   );
// };

// export default FavDoctor;
