// import {View, StyleSheet} from 'react-native';
// import React from 'react';
// import {
//   colors,
//   responsiveWidth,
//   borderRadius,
//   responsiveHeight,
//   spaceVertical,
// } from '../../styles/variables';
// import Legend from './Legend';

// const ProgressCharts = ({data, title1, title2, title3, bg1, bg2, bg3}: any) => {
//   const chartConfig = {
//     backgroundGradientFromOpacity: 0,
//     backgroundGradientToOpacity: 0.5,
//     backgroundColor: colors.green,
//     backgroundGradientFrom: colors.white,
//     backgroundGradientTo: colors.white,
//     color: (opacity = 1) => `rgba(0,0,0,${opacity})`,
//   };
//   return (
//     <View style={styles.progresschart}>
//       <View style={styles.legend}>
//         <Legend title={title1} backgroundColor={bg1} />
//         <Legend title={title2} backgroundColor={bg2} />
//         <Legend title={title3} backgroundColor={bg3} />
//       </View>
//       {/* <ProgressChart
//         data={data}
//         width={responsiveWidth(90)}
//         height={responsiveHeight(29)}
//         strokeWidth={9}
//         hideLegend={true}
//         withCustomBarColorFromData={true}
//         radius={20}
//         chartConfig={chartConfig}
//       /> */}
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   progresschart: {
//     marginTop:spaceVertical.tiny1,
//     backgroundColor: colors.white,
//     elevation:3,
//     borderRadius: borderRadius.boxRadius,
//     borderColor: colors.lightGray,
//     height: responsiveHeight(35),
//     alignSelf: 'center',
//     justifyContent: 'center',
//   },
//   legend: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });

// export default ProgressCharts;
