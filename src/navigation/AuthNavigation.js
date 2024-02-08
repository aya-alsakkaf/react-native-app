import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import NAVIGATION from ".";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NAVIGATION.AUTHNAVIGATION.LOGIN} component={Login} />
      <Stack.Screen
        name={NAVIGATION.AUTHNAVIGATION.SIGNUP}
        component={Signup}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
