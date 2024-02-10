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
        alignItems: "center",
        margin: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          padding: 10,
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Username
        </Text>
        <TextInput
          style={{
            borderColor: "brown",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Please enter your username"
        />
      </View>

      <View
        style={{
          width: "100%",
          padding: 10,
          marginHorizontal: 10,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Password
        </Text>
        <TextInput
          style={{
            borderColor: "brown",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Password"
        />
      </View>

      <View
        style={{
          backgroundColor: "brown",
          width: "100%",
          padding: 3,
          margin: 10,
          borderRadius: 10,
          width: "96%",
        }}
      >
        <Button title="LOGIN" color="white" onPress={() => {}} />
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.AUTH_NAVIGATION.SIGNUP);
          }}
        >
          <Text>
            Don't have an account?
            <Text style={{ fontWeight: "bold", color: "brown" }}>SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
