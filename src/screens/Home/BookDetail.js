import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const BookDetail = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View>
      <Text>BookDetail</Text>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
