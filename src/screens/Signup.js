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
import NAVIGATION from "../navigation";

const Signup = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Sign Up</Text>
      <Text>Enter your full name</Text>
      <TextInput placeholder="Please enter your full name" />
      <Text>Enter your username</Text>
      <TextInput placeholder="Please enter your username" />
      <Text>Enter your password</Text>
      <TextInput placeholder="Please enter your password" />
      <Button title="Sign Up" />

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.AUTHNAVIGATION.LOGIN);
          }}
        >
          <Text>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
