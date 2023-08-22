// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   spaceVertical,
//   responsiveHeight
// } from '../../styles/variables';
// import Legend from './Legend';

// const BarCharts = React.memo(({
//   title1,
//   title2,
//   title3,
//   bg1,
//   bg2,
//   bg3
// }: any) => {
//   return (
//     <View style={styles.barchart}>
//       <View style={styles.legend}>
//         <Legend title={title1} backgroundColor={bg1} />
//         <Legend title={title2} backgroundColor={bg2} />
//         <Legend title={title3} backgroundColor={bg3} />
//       </View>
//       {/* <View style={styles.bar}>
//         <BarChart
//           data={data}
//           barWidth={barWidth}
//           spacing={responsiveWidth(8)}
//           initialSpacing={15}
//           roundedTop
//           roundedBottom
//           hideRules={true}
//           xAxisThickness={0}
//           yAxisThickness={0}
//           noOfSections={4}
//           maxValue={200}
//         />
//         </View> */}
//     </View>
//   );
// });

// const styles = StyleSheet.create({
//   barchart: {
//     height: responsiveHeight(45),
//     justifyContent: 'center',
//     paddingHorizontal: responsiveWidth(4),
//     paddingVertical: spaceVertical.tiny1,
//     width: responsiveWidth(90),
//     backgroundColor: colors.white,
//     elevation: 3,
//     alignSelf: 'center',
//     borderRadius: borderRadius.boxRadius,
//     marginTop: spaceVertical.tiny1
//   },

//   legend: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     bottom: 10
//   },
//   bar: {
//     marginTop: spaceVertical.small
//   }
// });
// export default BarCharts;
