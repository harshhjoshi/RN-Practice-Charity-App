import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from "../../styles/variables";
import Buttons from "../../components/Button";
import YellowBtn from "../../components/yellowbtn";

const Donation = ({ navigation }: any) => {
  const [hide, setHide] = useState(false);
  const [border, setBorder] = useState(false);
const Btnclicked=()=>{
    if (hide==false) {
    setHide(true)
        
    }else{
        navigation.navigate('Thankyou')
    }

}
  
  return (
    <View style={{ flexGrow: 1, backgroundColor: colors.white }}>
      <ImageBackground
        style={{ height: responsiveHeight(45), width: "100%" }}
        source={require("../../assets/images/bgimage.png")}
      >
        <View
          style={{
            width: responsiveWidth(90),
            justifyContent: "space-between",
            alignSelf: "center",
            flexDirection: "row",
            top: spaceVertical.large,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                height: responsiveHeight(7),
                width: responsiveHeight(7),
              }}
              source={require("../../assets/images/backimg.png")}
            />
          </TouchableOpacity>

          <Image
            style={{ height: responsiveHeight(7), width: responsiveHeight(7) }}
            source={require("../../assets/images/heartimg.png")}
          />
        </View>
      </ImageBackground>
      <>
        {!hide ? (
          <>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "white",
                height: responsiveHeight(100),
                borderRadius: 30,
                bottom: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  width: responsiveWidth(90),
                  fontFamily: fontFamily.medium,
                  alignSelf: "center",
                  marginTop: spaceVertical.small,
                }}
              >
                Helping Hands Foundation
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: fontFamily.regular,
                  color: colors.forgotpassgray,
                  width: responsiveWidth(90),
                  alignSelf: "center",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularized in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classical.
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: responsiveWidth(90),
                alignSelf: "center",
                marginBottom: 30,justifyContent:'space-evenly'
              }}
            >
              <Image
                style={{
                  height: responsiveHeight(7),
                  width: responsiveWidth(14),
                  borderRadius: 10,
                }}
                source={require("../../assets/images/bgimage.png")}
              />
              <View>
                <Text
                  style={{
                    color: colors.forgotpassgray,
                    fontFamily: fontFamily.regular,
                    fontSize: 12,
                  }}
                >
                  Organized by
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: colors.black,
                      fontFamily: fontFamily.medium,
                      fontSize: 16,
                    }}
                  >
                    Helping Hands Foundation
                  </Text>
                  <Image
                    style={{
                      height: responsiveHeight(2),
                      width: responsiveWidth(4),
                      top: 4,
                    }}
                    source={require("../../assets/images/tick.png")}
                  />
                </View>
              </View>
            </View>
          </>
        ) : (
          <View>
            <Text
              style={{
                color: colors.black,
                fontFamily: fontFamily.semiBold,
                alignSelf: "center",
                fontSize: 18,
                marginTop: spaceVertical.small,
              }}
            >
              How much donate?
            </Text>
            <TouchableOpacity
                 onPress={()=>setBorder(!border)}

              style={{
                width: responsiveWidth(90),
                backgroundColor:border?'#E0A14E20':'#FFFFFF',
                borderRadius: 10,
                borderWidth: 1,
                borderColor:border?'#E0A14E': colors.forgotpassgray,
                height: responsiveHeight(7),
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: spaceVertical.small,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: 18,
                  color: colors.forgotpassgray,
                }}
              >
                $50
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: responsiveWidth(90),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.forgotpassgray,
                height: responsiveHeight(7),
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: spaceVertical.small,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: 18,
                  color: colors.forgotpassgray,
                }}
              >
                $70
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
       
              style={{
                width: responsiveWidth(90),
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.forgotpassgray,
                height: responsiveHeight(7),
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                marginTop: spaceVertical.small,
              }}
            >
              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: 18,
                  color: colors.forgotpassgray,
                }}
              >
                $100
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',width:responsiveWidth(90),justifyContent:'space-between',alignSelf:'center'}}>
                <View style={{borderBottomWidth:1,width:responsiveWidth(40)}}></View>
                <Text 
                   style={{
                    fontFamily: fontFamily.regular,
                    fontSize: 18,
                    color: colors.forgotpassgray,top:15
                  }}>OR</Text>
                <View style={{borderBottomWidth:1,width:responsiveWidth(40)}}></View>

            </View>
            <TextInput
              style={{
                width: responsiveWidth(90),
                borderRadius: 10,
                borderWidth: 1,
                color:colors.black,
                borderColor: colors.forgotpassgray,
                height: responsiveHeight(7),
                alignSelf: "center",
                justifyContent: "center",

                alignItems: "center",
                marginTop: spaceVertical.small,
              }}
              placeholder="Enter dontation price"
              placeholderTextColor={colors.forgotpassgray}
              keyboardType="numeric"
              onChangeText={value => {
                if (value) {
                  setBorder(false);
                }
              }}
            ></TextInput>
          </View>
        )}
      </>
      <YellowBtn margintop={10} onPress={() => Btnclicked()} text={"Donate Now"} />
    </View>
  );
};

export default Donation;
