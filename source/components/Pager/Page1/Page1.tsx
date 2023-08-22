import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../PageStyles";

const Page3 = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../../assets/images/main_logo.png")}
          resizeMode="contain"
          style={styles.img}
        ></Image>

        <View style={styles.view}>
          <Text style={styles.title}>Welcome to </Text>
          <Text style={styles.titleBlack}>GiveALatte</Text>
          <Text style={styles.subTitle}>
            Lorem Ipsum is simply dummy text.
            industry.
          </Text>
        </View>
      </View>
    </>
  );
};

export default Page3;
