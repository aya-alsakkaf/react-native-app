import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./Home/HomeNavigation";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import NAVIGATION from ".";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "../screens/Auth/Profile";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "brown" }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name={NAVIGATION.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        name={NAVIGATION.AUTH_NAVIGATION.INDEX}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
