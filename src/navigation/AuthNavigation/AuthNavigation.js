import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Auth/Login";
import Signup from "../../screens/Auth/Signup";
import NAVIGATION from "..";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.AUTH_NAVIGATION.LOGIN} component={Login} />
      <Stack.Screen
        name={NAVIGATION.AUTH_NAVIGATION.SIGNUP}
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
