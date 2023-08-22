import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard/Dashboard";
import Appointment from "../screens/Appointments/Appointment";
import Setting from "../screens/Settings/Settings";
import { screenOptions } from "../utils/commonUtils";
import { styles } from "./styles";
import Doctor from "../screens/Doctors/Doctor";

const TabpatientNavigation = ({ route }: any) => {
  const params = route.params;
  const flag = params?.flag;
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Dashbord"
        component={Dashboard}
        initialParams={{ flag: flag }}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/images/dashboard.png")
                  : require("../assets/images/dashboard_inactive.png")
              }
              resizeMode="contain"
              style={styles.tabIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SearchPatient"
        component={Doctor}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/images/search_active.png")
                  : require("../assets/images/search_icon.png")
              }
              resizeMode="contain"
              style={styles.tabIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AppointmentPatient"
        component={Appointment}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/images/notification_active.png")
                  : require("../assets/images/notification_icon.png")
              }
              resizeMode="contain"
              style={styles.tabIcon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../assets/images/profile_active.png")
                  : require("../assets/images/profile.png")
              }
              resizeMode="contain"
              style={styles.tabIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabpatientNavigation;
