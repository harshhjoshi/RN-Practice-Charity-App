import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import PagerView from "react-native-pager-view";
import { AuthContext } from "../../contexts/authContext";
import Page1 from "../../components/Pager/Page1/Page1";
import Page2 from "../../components/Pager/Page2/Page2";
import Page3 from "../../components/Pager/Page3/Page3";
import Buttons from "../../components/Button";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./OnBoardingStyle";
import PaginationDot from "react-native-animated-pagination-dot";
import { ExpandingDot } from "react-native-animated-pagination-dots";
import { colors } from "../../styles/variables";

const SLIDER_DATA = [
  {
    key: "1",
    title: "App showcase ✨",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    key: "2",
    title: "Introduction screen 🎉",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ",
  },
];

const OnBoarding = ({ navigation }: any) => {
  const pager: any = useRef();
  const [activeIndex, setactiveIndex] = useState(0);
  const getCurrentPageIndex = (e: any) => {
    setactiveIndex(e.nativeEvent.position);
  };
  const [curPage] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const next = () => {
    pager.current?.setPage(activeIndex + 1);
    setactiveIndex(activeIndex + 1);
  };
  const [pagination, setPagination] = useState([
    { key: "", index: 0 },
    { key: "", index: 1 },
    { key: "", index: 2 },
  ]);

  const Submit = () => {
    navigation.navigate("Selection");
  };

  return (
    <>
      <View style={styles.height}>
        <LinearGradient style={{ flex: 1 }} colors={["#FFF3E3", "#FFF3E3"]}>
          <PagerView
            style={styles.pager}
            initialPage={0}
            ref={pager}
            onPageSelected={(e) => {
              getCurrentPageIndex(e);
            }}
          >
            <View key="1">
              <Page1 navigation={navigation} />
            </View>
            <View key="2">
              <Page1 navigation={navigation} />
            </View>
            <View key="3">
              <Page1 navigation={navigation} />
            </View>
            {/* <View key="2">
              <Page2 navigation={navigation} />
            </View>
            <View key="3">
              <Page3 navigation={navigation} />
            </View> */}
          </PagerView>
          <View style={styles.row}>
            <FlatList
              data={pagination}
              numColumns={3}
              renderItem={({ item, index }) => (
                <>
                  <View key={index}>
                    <View style={styles.mr}>
                      <View
                        style={{
                          backgroundColor:
                            activeIndex == item.index ? "#000000" : "#E0A14E",
                          height: 10,
                          width: 10,
                          borderRadius: 20,
                        }}
                      ></View>
                    </View>
                  </View>
                </>
              )}
            ></FlatList>
          </View>

          <View style={styles.btnview}>
            <Buttons
              onPress={() => Submit()}
              style={styles.btn}
              text={"Get Started"}
            />
            <Text style={styles.skip}>
              Existing account?{" "}
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
          </View>
        </LinearGradient>
      </View>
    </>
  );
};

export default OnBoarding;
