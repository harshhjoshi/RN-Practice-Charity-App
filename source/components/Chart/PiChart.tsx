// import { View, StyleSheet, Text } from 'react-native';
// import React from 'react';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   responsiveHeight,
//   fontFamily,
//   fontSize
// } from '../../styles/variables';
// import Legend from './Legend';

// const PiCharts = ({ data, title1, title2, title3, bg1, bg2, bg3 }: any) => {
//   const chartConfig = {
//     backgroundGradientFrom: colors.white,
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientTo: colors.white,
//     backgroundGradientToOpacity: 0.5,
//     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     useShadowColorFromDataset: false
//   };
//   return (
//     // original
//     <View style={styles.pichart}>
//       <View style={styles.legend}>
//         <Legend title={title1} backgroundColor={bg1} />
//         <Legend title={title2} backgroundColor={bg2} />
//         <Legend title={title3} backgroundColor={bg3} />
//       </View>
//       {/* <PieChart
//   data={data}
  
//   width={responsiveWidth(90)}
//   height={responsiveHeight(25)}

//   chartConfig={chartConfig}
//   accessor={"population"}
//   backgroundColor={"transparent"}
//  paddingLeft={'70'}
//    center={[0, 5]}
//   hasLegend={false}
//   absolute
// /> */}
//       <View>
//         <Text style={styles.month}>Month</Text>
//         <Text style={styles.date}>Jan-2022</Text>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   pichart: {
//     height: responsiveHeight(40),
//     backgroundColor: colors.white,
//     elevation: 3,
//     borderRadius: borderRadius.boxRadius,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   legend: {
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   month: {
//     fontFamily: fontFamily.regular,
//     fontSize: fontSize.medium,
//     color: colors.black,
//     textAlign: 'center'
//   },
//   date: {
//     fontFamily: fontFamily.bold,
//     fontSize: fontSize.large,
//     color: colors.black,
//     textAlign: 'center'
//   }
// });

// export default PiCharts;
