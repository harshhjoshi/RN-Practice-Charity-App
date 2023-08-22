import React from "react";
import { Image, ImageBackground, View,Text, TouchableOpacity } from "react-native";
import { colors, fontFamily, responsiveHeight, responsiveWidth, spaceVertical } from "../../styles/variables";
import Buttons from "../../components/Button";

const Thankyou = ({navigation}:any) => {
  return (
    <ImageBackground
      style={{
        height: responsiveHeight(105),
        width: responsiveWidth(100),
        backgroundColor: "#E0A14E20"
      }}
      source={require("../../assets/images/thanksbg.png")}
    >
      <Image
        style={{ height: 40, width: 40, marginTop: 80, alignSelf: "center" }}
        source={require("../../assets/images/Logo.png")}
      ></Image>
      <Image
        style={{ height: 270, width: 210, alignSelf: "center", marginTop: 50 }}
        source={require("../../assets/images/thanks.png")}
      ></Image>
      <Text style={{alignSelf:'center',color:'#E0A14E',fontFamily:fontFamily.semiBold,fontSize:18}}>“Helping Hands Foundation”</Text>
      <Buttons style={{ 
    height: responsiveHeight(7),
    width: responsiveWidth(60),
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: spaceVertical.semiSmall
  } }
  text='Share on Social Media'/>
      <TouchableOpacity onPress={()=>navigation.navigate('Tabs')}>
      <Text style={{alignSelf:'center',color: colors.black,fontFamily:fontFamily.regular,fontSize:18,top:100,}}>back to home</Text>

      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Thankyou;
