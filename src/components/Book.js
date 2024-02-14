import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BASEURL } from "../api";

const Book = ({ image, title, description, user, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,

      }}
    >
      <View style={{ alignItems: "center"}}>
        <Image
          style={{
            width: "100%",
            height: 200,
            borderRadius: 20,
            objectFit: "cover",
          }}
          source={{
            uri: `${BASEURL}/${image}`,
          }}
        />

        <Text
          style={{
            fontWeight: "bold",
            marginTop: 14,
            fontSize: 20,
          }}
        >
          {title}
        </Text>
       
      </View>
    </TouchableOpacity>
  );
};

export default Book;


