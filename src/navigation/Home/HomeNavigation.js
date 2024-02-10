import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../../screens/Home/Homescreen";
import BookDetail from "../../screens/Home/BookDetail";
import NAVIGATION from "..";

const Stack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.HOME_NAVIGATION.HOME}
        component={Homescreen}
      />
      <Stack.Screen
        name={NAVIGATION.HOME_NAVIGATION.BOOK_DETAIL}
        component={BookDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
