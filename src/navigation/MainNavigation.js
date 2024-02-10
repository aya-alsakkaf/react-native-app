import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./Home/HomeNavigation";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import NAVIGATION from ".";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={NAVIGATION.HOME_NAVIGATION.INDEX}
        component={HomeNavigation}
      />
      <Tab.Screen
        name={NAVIGATION.AUTH_NAVIGATION.INDEX}
        component={AuthNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
