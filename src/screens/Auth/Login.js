import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation/index";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
      <Text>Enter your username</Text>
      <TextInput placeholder="Please enter your username" />
      <Text>Enter your password</Text>
      <TextInput placeholder="Please enter your password" />
      <Button title="Login" />

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.AUTH_NAVIGATION.SIGNUP);
          }}
        >
          <Text>Don't have an account? Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
