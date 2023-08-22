// import React from 'react';
// import {View, StyleSheet,Text} from 'react-native';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   spaceVertical,
//   responsiveHeight,
//   fontFamily,fontSize
// } from '../../styles/variables';
// // import {PieChart} from 'react-native-gifted-charts';
// import Legend from './Legend';

// const CenterRingChart = ({
//   data,
//   barWidth,
//   title1,
//   title2,
//   title3,
//   bg1,
//   bg2,
//   bg3,
// }: any) => {
//   return (
//     <View style={styles.cenetrchart}>
//       <View>
//         <View style={styles.legend}>
//           <Legend title={title1} backgroundColor={bg1} />
//           <Legend title={title2} backgroundColor={bg2} />
//           <Legend title={title3} backgroundColor={bg3} />
//         </View>
//         {/* <PieChart
//                 donut
//                 innerRadius={99}
//                 radius={110}
//                 data={data}
                
//                 centerLabelComponent={(index:any) => {
//                 return <View key={index}>
//                       <Text style={styles.centerText}>Total Patients</Text>
//                     <Text style={styles.centerValue}>50,000</Text>
//                     </View>;
//                 }}
//             /> */}
       
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     cenetrchart: {
//     height: responsiveHeight(40),
//     paddingHorizontal: responsiveWidth(4),
//     justifyContent: 'center',
//     backgroundColor: colors.white,
//     elevation: 3,
//     borderRadius: borderRadius.boxRadius,
//     paddingLeft:50
//   },
//   legend: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom:spaceVertical.tiny
//   },
//   centerText:{
//     fontFamily: fontFamily.regular,
//     fontSize: fontSize.medium,
//     color: colors.lightGray,
//     textAlign:'center',
//   },
//   centerValue:{
//     fontFamily: fontFamily.bold,
//     fontSize: fontSize.large,
//     color: colors.black,
//     textAlign:'center',
//   }

// });
// export default CenterRingChart;
