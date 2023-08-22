import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./Dashboardstyles";
import { colors, fontFamily, responsiveHeight, responsiveWidth } from "../../styles/variables";

const Dashboard = ({ navigation }: any) => {
  const [click, setClick] = useState(false);
  const Click = () => {
    setClick(true);
  };
  const renderItems = ({ item, index }: any) => {
    return (
      <View
        style={{
          marginStart: 15,
          backgroundColor: "white",
          elevation: 2,
          height: responsiveHeight(24),
          marginTop: 20,
          width: responsiveWidth(55),
          borderRadius: 12,
          maxHeight: responsiveHeight(25),
          bottom: 3,
        }}
      >
        <Image
          style={{
            height: responsiveHeight(14),
            width: responsiveWidth(55),
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
          resizeMode="cover"
          source={require("../../assets/images/help_hand.png")}
        ></Image>
        <View>
          <View style={{ marginTop: 8, marginStart: 9 }}>
            <Text style={{ color: "black", fontWeight: "700" }}>
              Helping Hands Foundation
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 12,
                maxWidth: "70%",
                fontWeight: "300",
              }}
            >
              Lorem Ipsum is simply dummy text.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Donation")}
              style={{
                height: 28,
                borderRadius: 20,
                width: "35%",
                backgroundColor: "#E0A14E",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ alignSelf: "center", color: "white", fontSize: 12 }}
              >
                Donate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderItemsNGO = ({ item }: any) => {
    console.log("Item:", item);
    return (
      <TouchableOpacity
        onPress={() => Click()}
        style={{
          marginStart: 15,
          backgroundColor: "#E0A14E50",
          paddingHorizontal: 15,
          borderColor: "black",
          paddingVertical:5,
          borderWidth: 0.2,
          height:30,marginBottom:20,
          marginTop: 10,
          justifyContent: "center",
          borderRadius: 25,
        }}
      >
        <Text style={{ color: "black", fontSize: 14, alignSelf: "center" }}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const List=({item}:any)=>{
    return(
<View style={{borderWidth:0.5,borderColor:colors.black,width:responsiveWidth(87),alignSelf:'center',height:responsiveHeight(10),borderRadius:10,marginTop:10,flexDirection:'row',}}>
  <Image style={{height:60,width:60,borderRadius:10,alignSelf:'center',left:10}} source={item.image}/>
  <View style={{alignSelf:'center',left:20}}>

    <Text style={{fontFamily:fontFamily.medium,fontSize:16,color:colors.black}}>{item.title}</Text>
    <Text numberOfLines={2} style={{fontFamily:fontFamily.regular,fontSize:12,color:colors.forgotpassgray,width:responsiveWidth(50)}}>{item.desc}</Text>
    <TouchableOpacity>
    <Image style={{height:40,width:40,borderRadius:20,alignSelf:'center',position:'absolute',right:-20,bottom:5}} source={require('../../assets/images/heartimg.png')}/>
    </TouchableOpacity>

  </View>
</View>
    )
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: responsiveWidth(90),
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            height: responsiveHeight(10),
            width: responsiveWidth(6),
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={require("../../assets/images/side_drawer.png")}
        ></Image>

        <Image
          style={{
            height: responsiveHeight(5),
            width: responsiveWidth(6),
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={require("../../assets/images/logout_icon.png")}
        ></Image>
      </View>

      <Text
        style={{
          fontSize: 23,
          marginStart: 20,
          color: "black",
          fontWeight: "800",
        }}
      >
        Dashboard
      </Text>

      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          marginTop: 20,
          borderTopRightRadius: 30,
          elevation: 5,
          borderTopLeftRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginStart: 22,
            color: "#36312B",
            marginTop: 22,
            fontWeight: "600",
          }}
        >
          My Goal
        </Text>

        {/* My Goal Progress Bar */}

        <View
          style={{
            flexDirection: "row",
            width: "90%",
            height: 60,
            borderColor: "gray",
            borderRadius: 5,
            alignSelf: "center",
            borderWidth: 0.5,
            marginTop: 12,
            padding: 10,
          }}
        >
          <View
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 13,
                maxWidth: "70%",
                fontWeight: "400",
              }}
            >
              50$ of 20$ Donate
            </Text>
            <View
              style={{
                width: "86%",
                height: 7,
                borderRadius: 20,
                backgroundColor: "#E8E8E8",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: "45%",
                  height: 7,
                  borderRadius: 20,
                  backgroundColor: "#E0A14E",
                  position: "absolute",
                  top: 0,
                }}
              ></View>
            </View>
          </View>

          <Image
            style={{
              height: 22,
              width: 22,
              end: "65%",
              alignSelf: "center",
            }}
            resizeMode="contain"
            source={require("../../assets/images/next.png")}
          ></Image>
        </View>

        {/* Donate Tamplates / Banners */}
        <View style={{ flex: 1 }}>
          <View style={{ maxHeight: responsiveHeight(35) }}>
            <FlatList
              data={[{ key: 1 }, { key: 0 }, { key: 2 }]}
              contentContainerStyle={{ marginStart: 5, paddingEnd: 15 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({ item, index }) => renderItems(item, index)}
            />
          </View>

          {/* Top Charities / NGOs */}
          <View style={{ padding: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#36312B",
                  // marginTop: 22,
                  fontWeight: "600",
                }}
              >
                Top Charities / NGOs
              </Text>
              <Image
                style={{
                  height: responsiveHeight(2),
                  width: responsiveWidth(6),
                  alignSelf: "center",
                  resizeMode: "contain",
                }}
                resizeMode="contain"
                source={require("../../assets/images/Filter.png")}
              ></Image>
            </View>

            <View style={{ maxHeight: responsiveHeight(35) }}>
              <FlatList
                data={[
                  { key: 1, title: "Pets" },
                  { key: 0, title: "Child Education" },
                  { key: 2, title: "Hunger" },
                ]}
                contentContainerStyle={{ width: "100%" }}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={(item) => renderItemsNGO(item)}
              />
               <FlatList
                data={[
                  { key: 0, title: "Animal Rescue League",desc:"Lorem Ipsum is simply dummy text of the printing",image:require('../../assets/images/dog1.png') },
                  { key: 1, title: "Critter Care Coalition",desc:"Lorem Ipsum is simply dummy text of the printing" ,image:require('../../assets/images/dog2.png')},
                  { key: 2, title: "Animal Rescue League",desc:"Lorem Ipsum is simply dummy text of the printing",image:require('../../assets/images/dog1.png') },
                  { key: 3, title: "Critter Care Coalition",desc:"Lorem Ipsum is simply dummy text of the printing",image:require('../../assets/images/dog2.png') },
                  { key: 4, title: "Animal Rescue League",desc:"Lorem Ipsum is simply dummy text of the printing",image:require('../../assets/images/dog1.png') },


                ]}
                contentContainerStyle={{ width: "100%",paddingBottom:80 }}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => List(item)}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Dashboard;
