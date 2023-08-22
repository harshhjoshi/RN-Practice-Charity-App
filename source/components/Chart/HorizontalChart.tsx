// import React from 'react';
// import {View, StyleSheet, Text, Image} from 'react-native';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   spaceVertical,
//   responsiveHeight,
//   fontFamily,
//   fontSize,
// } from '../../styles/variables';

// const HorizontalChart =() => {
//   return (
//     <View style={styles.barchart}>
//       <View style={styles.legend}>
//         <View>
//           <Text style={styles.title}>Total Patients</Text>
//           <Text style={styles.subtitle}>2,174</Text>
//         </View>
//         <View>
//           <Text style={styles.title}>Month</Text>
//           <Text style={styles.subtitle}>Jan-2022</Text>
//         </View>
//       </View>
//       {/*  */}
//       <View style={styles.parentBlock}>
//       <View style={styles.block}>
//           <View style={styles.block1}></View>
//           <View style={styles.block2}></View>
//           <View style={styles.block3}></View>
//         </View> 
//       </View>
     
//       {/*  */}
//       <View style={styles.legend}>
//         <View>
//           <Text style={styles.title}>Negative</Text>
//           <View style={{flexDirection:'row',alignItems:"center"}}> 
//           <Image
//               source={require('../../assets/images/negativeIcon.png')}
//               style={styles.smileIcon}
//             />
//           <Text style={styles.subtitle}>    
//             16
//           </Text>
//           </View>
         
//         </View>
//         <View>
//           <Text style={styles.title}>Neutral</Text>
//           <View style={{flexDirection:'row',alignItems:"center"}}> 
//           <Image
//               source={require('../../assets/images/neutralIcon.png')}
//               style={styles.smileIcon}
//             />
//           <Text style={styles.subtitle}>45</Text>
//           </View>
//         </View>
//         <View>
//           <Text style={styles.title}>Positive</Text>
//           <View style={{flexDirection:'row',alignItems:"center"}}> 
//           <Image
//               source={require('../../assets/images/positiveIcon.png')}
//               style={styles.smileIcon}
//             />
//           <Text style={styles.subtitle}>2,113</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   barchart: {
//     height: responsiveHeight(40),
//     paddingHorizontal: responsiveWidth(4),
//     paddingVertical: spaceVertical.small,
//     justifyContent: 'space-between',
//     backgroundColor: colors.white,
//     elevation: 3,
//     borderRadius: borderRadius.boxRadius,
//   },
//   legend: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   title: {
//     fontFamily: fontFamily.regular,
//     fontSize: fontSize.medium,
//     color: colors.lightGray,
//   },
//   subtitle: {
//     fontFamily: fontFamily.bold,
//     fontSize: fontSize.semiLarge,
//     color: colors.black,
   
   

//   },
//   smileIcon: {
//     height: responsiveHeight(4),
//     width: responsiveWidth(8),
//     marginRight:responsiveWidth(1.5)
//    },
//    parentBlock:{
//     width:responsiveWidth(72),
//    },
   
//   block: {
//     height: responsiveHeight(6),
//     width:'110%',
//     flexDirection: 'row',
//   },

//   block1: {
//     width: '10%',
//     backgroundColor:colors.red,
//     borderRadius:borderRadius.medium,
//     marginRight:5
//   },
//   block2: {
//     width: '30%',
//     backgroundColor:colors.yellow,
//     borderRadius:borderRadius.medium,
//      marginRight:5,
//   },
//   block3: {
//     width: '60%',
//     backgroundColor:colors.simplegreen,
//     borderRadius:borderRadius.medium
//   },
// });
// export default HorizontalChart;

