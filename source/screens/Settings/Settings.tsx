import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import SwitchToggle from "react-native-switch-toggle";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import HeaderArrow from "../../components/HeaderArrow/HeaderArrow";
import SettingHead from "../../components/SettingHeading/SettingHead";
import { language_data, settings_data } from "../../data/data";
import { colors } from "../../styles/variables";
import { styles } from "./Settingsstyles";
import { getProfile, logout } from "../../utils/service";
import { showToast } from "../../utils/commonUtils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";

const Settings = ({ navigation }: any) => {
  const [on, off] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const [language, setlanguage]: any = useState("English");
  const [ind, setind] = useState(3);

  const name = useSelector((state: any) => state.message.name);
  const [profileDP, setProfileDp] = useState("");

  // useEffect(() => {
  //   const fetchImage = async () => {
  //     try {
  //       const getdetails = await getProfile();
  //       if (getdetails?.rc === 0) {
  //         setProfileDp(getdetails?.payloadResponse?.data?.profile_pic);
  //       } else {
  //         showToast(getdetails?.payloadResponse?.error[0]?.message);
  //       }
  //     } catch (error) {
  //       showToast("Failed to fetch image.");
  //     } finally {
  //       setLoader(false);
  //     }
  //   };

  //   fetchImage();
  // }, []);

  const renderPress = (item: any) => {
    // if (item.id === 6) {
    //   navigation.navigate('Faqs');
    // }
    // if (item.id === 7) {
    //   navigation.navigate('Help');
    // }
    // if (item.id === 1) {
    //   navigation.navigate('ProMember');
    // }
    // if (item.id === 4) {
    //   navigation.navigate('InviteFriend');
    // }
    // if (item.id === 5) {
    //   navigation.navigate('FavDoctor');
    // }

    if (item.id === 6) {
      logoutApi();
      setLoader(true);
    }
  };

  const logoutApi = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "OnBoarding" }],
      })
    );
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={styles.renderItem}
      onPress={() => renderPress(item)}
    >
      <View style={styles.leftRender}>
        <View style={[styles.iconsection, { backgroundColor: item.bg }]}>
          <Image
            source={item.icon}
            style={styles.settingIcon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.settingTitle2}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </View>
      {item.id == 3 ? (
        <View>
          <Text style={styles.langText}>{language.slice(0, 7)}</Text>
        </View>
      ) : (
        <></>
      )}
      {item.flag ? (
        <View style={styles.switchSection}>
          {on ? (
            <Text style={styles.activeText}>On</Text>
          ) : (
            <Text style={styles.activeText}>Off</Text>
          )}
          <SwitchToggle
            switchOn={on}
            onPress={() => off(!on)}
            circleColorOff={colors.lightGray}
            circleColorOn={colors.white}
            backgroundColorOn={colors.projectgreen}
            backgroundColorOff="#C4C4C4"
            containerStyle={styles.switchStyle}
            circleStyle={styles.circleStyle}
          />
        </View>
      ) : index === 5 && loader ? (
        <ActivityIndicator
          style={{ justifyContent: "center" }}
          color={colors.simplegreen}
        />
      ) : index === 5 ? null : (
        <Image
          source={require("../../assets/images/rightarrow.png")}
          style={styles.arrowIcon}
        />
      )}
    </TouchableOpacity>
  );

  const profile = () => {
    navigation.push("ProfileDetails", { screenName: "settings" });
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={["#FFF", "#FFF"]}>
        <HeaderArrow title={"Settings"} backIconsHide={true} />
        <View style={styles.mainContainer}>
          {/* <Text style={styles.head}>Settings</Text> */}

          <SettingHead
            // onPress={() => profile()}
            name={name}
            source={
              profileDP
                ? { uri: profileDP }
                : require("../../assets/images/profiledetails.png")
            }
          />

          <FlatList
            data={settings_data}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
          
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.model}>
            <Text style={styles.langTitle}>Select language</Text>
            <View style={styles.modelLangSec}>
              <View
                style={[
                  { borderWidth: ind < 2 ? 0 : 0.5 },
                  {
                    position: "absolute",
                    top: 50,
                    zIndex: 1,
                    width: 200,
                    alignSelf: "center",
                    borderBottomColor: "gray",
                  },
                ]}
              ></View>
              <ScrollPicker
                dataSource={language_data}
                selectedIndex={ind}
                renderItem={(data, index) => {
                  return (
                    <View>
                      <Text
                        style={
                          index == ind
                            ? styles.activeTitle
                            : styles.nonactiveTitle
                        }
                      >
                        {data}
                      </Text>
                    </View>
                  );
                }}
                onValueChange={(data, selectedIndex): any => {
                  if (data) {
                    setlanguage(data);
                    setind(selectedIndex);
                    setTimeout(() => {
                      setModalVisible(!isModalVisible);
                    }, 1500);
                  }
                }}
                wrapperHeight={250}
                wrapperColor="#FFFFFF"
                itemHeight={50}
                highlightColor="black"
                highlightBorderWidth={2}
              />
              <View
                style={[
                  { borderWidth: ind == 6 ? 0 : 0.5 },
                  {
                    position: "absolute",
                    bottom: 40,
                    zIndex: 1,
                    width: 200,
                    alignSelf: "center",
                    borderBottomColor: "gray",
                  },
                ]}
              ></View>
            </View>
          </View>
          
        </Modal>
       
      </LinearGradient>
    </View>
  );
};

export default Settings;
