import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../../screens/Home/Homescreen";
import BookDetail from "../../screens/Home/BookDetail";
import NAVIGATION from "..";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { deleteToken } from "../../api/Auth/storage";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AddTrip from "../../screens/Home/AddTrip";
const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerRight: () => <HomeRightHeader />,
        }}
        name={NAVIGATION.HOME_NAVIGATION.HOME}
        component={Homescreen}
      />
      <Stack.Screen
        name={NAVIGATION.HOME_NAVIGATION.BOOK_DETAIL}
        component={BookDetail}
      />
      <Stack.Screen
        name={NAVIGATION.HOME_NAVIGATION.ADD_TRIP}
        component={AddTrip}
      />
    </Stack.Navigator>
  );
};

const HomeRightHeader = () => {
  const navigation = useNavigation();
  const { setIsAuthenticated } = useContext(UserContext);
  return (
    <View
      style={{
        width: "80%",
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        borderRadius: 10,
      }}
    >
      <Pressable
        onPress={() => {
          deleteToken();
          setIsAuthenticated(false);
          navigation.navigate(NAVIGATION.AUTH_NAVIGATION.INDEX, {
            screen: NAVIGATION.AUTH_NAVIGATION.REGISTER,
          });
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white" }}>LOGOUT</Text>
      </Pressable>
    </View>
  );
};
export default HomeNavigation;
