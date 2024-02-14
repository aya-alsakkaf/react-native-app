import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation/index";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../api/Auth/Auth";

const Signup = () => {
  const [user, setUser] = useState({});
  const { mutate, isPending } = useMutation({
    mutationFn: () => register(user),
    mutationKey: ["register"],
  });
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
          placeholder="Username"
          onChangeText={(text) => {
            setUser({ ...user, username: text.toLocaleLowerCase() });
          }}
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
          Bio
        </Text>
        <TextInput
          style={{
            borderColor: "brown",
            borderWidth: 1,
            width: "100%",
            padding: 10,
            borderRadius: 10,
          }}
          placeholder="Bio"
          onChangeText={(text) => {
            setUser({ ...user, bio: text });
          }}
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
          onChangeText={(text) => {
            setUser({ ...user, password: text });
          }}
        />
      </View>

      <View
        style={
          isPending
            ? {
                backgroundColor: "gray",
                width: "100%",
                padding: 3,
                margin: 10,
                borderRadius: 10,
                width: "96%",
              }
            : {
                backgroundColor: "brown",
                width: "100%",
                padding: 3,
                margin: 10,
                borderRadius: 10,
                width: "96%",
              }
        }
      >
        <Button
          disabled={isPending}
          title="REGISTER"
          color="white"
          onPress={() => {
            // console.log(user);
            mutate();
          }}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.AUTH_NAVIGATION.LOGIN);
          }}
        >
          <Text>
            Already have an account?
            <Text style={{ fontWeight: "bold", color: "brown" }}>LOG IN </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;
