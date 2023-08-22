import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Buttons from "../../components/Button";
import NormalButton from "../../components/NormalButton";
import { styles } from "./SelectionStyle";
import Modal from "react-native-modal";
import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from "../../styles/variables";
import { Dropdown } from "react-native-element-dropdown";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Selection = ({ navigation: { navigate } }: any) => {
  const [server, setServer]: any = useState("");

  const SelectServerFlavor = async (value: any) => {
    setServer(value.value);
    await AsyncStorage.setItem("selectedServer", value.value);
  };

  return (
    // <View style={styles.container}>
    <LinearGradient style={{ flex: 1 }} colors={["#FFF3E3", "#FFF3E3"]}>
      <View style={{ alignSelf: "center", flex: 1 }}>
        <View
          style={{
            flex: 0.92,
            marginTop: 20,
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#E0A14E",
              fontSize: 50,
              fontFamily: fontFamily.semiBold,
              textAlign: "center",
              lineHeight: 70,
              alignSelf: "center",
            }}
          >
            Create an
          </Text>
          <Text
            style={{
              color: "#000",
              fontSize: 50,
              fontFamily: fontFamily.semiBold,
              textAlign: "center",
              lineHeight: 60,
            }}
          >
            Account
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 50,
              backgroundColor: "#DBAE73",
              height: 1.5,
              marginEnd: 10,
            }}
          ></View>
          <Text style={{ color: "black" }}>Continue With</Text>
          <View
            style={{
              width: 50,
              backgroundColor: "#DBAE73",
              height: 1.5,
              marginStart: 10,
            }}
          ></View>
        </View>

        <View>
          <Image
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(40),
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={require("../../assets/images/google_facebook.png")}
          ></Image>
        </View>

        <Text style={{ color: "black", alignSelf: "center", fontSize: 17 }}>
          OR
        </Text>

        <Buttons
          onPress={() => navigate("Register")}
          style={styles.btn}
          text={"Sign Up with email"}
        />
        <Text
          style={{
            fontFamily: fontFamily.semiBold,
            color: colors.forgotpassgray,
            fontSize: 13,
            alignSelf: "center",
            // width: Platform.OS === "ios" ? undefined : responsiveWidth(25),
            top: 10,
          }}
        >
          Existing account?
          <Text
            style={{
              color: "#E0A14E",
              fontSize: 13,
              alignSelf: "center",
              // width: Platform.OS === "ios" ? undefined : responsiveWidth(25),
              top: 10,
            }}
          >
            Log in
          </Text>
        </Text>
        {/* <NormalButton /> */}
      </View>
    </LinearGradient>
    // </View>
  );
};

export default Selection;
