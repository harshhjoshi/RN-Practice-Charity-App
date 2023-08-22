import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LinearGradient from "react-native-linear-gradient";
import Buttons from "../../components/Button";
import NormalButton from "../../components/NormalButton";
import { styles } from "./AddPhotoStyle";
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
    <LinearGradient style={{ flex: 1 }} colors={["#FFF", "#FFF"]}>
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
            {"Add "}
            <Text
              style={{
                color: "#000",
                fontSize: 50,
                fontFamily: fontFamily.semiBold,
                textAlign: "center",
                lineHeight: 60,
                marginStart: 10,
              }}
            >
              Photo
            </Text>
          </Text>

          <View style={{height:250,width:250,marginTop:'15%',backgroundColor:"#36312B",alignSelf:"center",borderRadius:200,justifyContent:'center'}}>
          <Image
            style={{
              height: responsiveHeight(15),
              width: responsiveWidth(25),
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={require("../../assets/images/camera_icon.png")}
          ></Image>
          </View>
        </View>

        <Buttons
          onPress={() => navigate("Tabs")}
          style={styles.btn}
          text={"Upload from Files"}
        />
      </View>
    </LinearGradient>
    // </View>
  );
};

export default Selection;
