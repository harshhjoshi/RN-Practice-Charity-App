// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   spaceVertical,
//   responsiveHeight,
// } from '../../styles/variables';
// // import {PieChart} from 'react-native-gifted-charts';
// import Legend from './Legend';

// const DonutChart = ({
//   data,
//   title1,
//   title2,
//   title3,
//   bg1,
//   bg2,
//   bg3,
// }: any) => {
//   return (
//     <View style={styles.donutchart}>
//       <View>
//         <View style={styles.legend}>
//           <Legend title={title1} backgroundColor={bg1} />
//           <Legend title={title2} backgroundColor={bg2} />
//           <Legend title={title3} backgroundColor={bg3} />
//         </View>
//         <View style={styles.chart}>
//         {/* <PieChart
//             donut
//             showText
//             textColor="white"
//             fontWeight='700'
//             innerRadius={60}
//             radius={110}
//             data={data}
//             /> */}
       
//         </View>
       
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//     donutchart: {
    
//     height: responsiveHeight(40),
//     justifyContent: 'center',
//     alignItems:"center",
//     backgroundColor: colors.white,
//     elevation: 3,
//     borderRadius: borderRadius.boxRadius,
//   },
//   legend: {
//      flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems:"center",
//     marginBottom:spaceVertical.tiny
//   },
//   chart:{
//     paddingLeft:responsiveWidth(10)
//   }

// });
// export default DonutChart;
