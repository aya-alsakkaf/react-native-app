import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getTripByID } from "../../api/Trips/trips";
import { BASEURL } from "../../api";
import { ScrollView } from "react-native-gesture-handler";

const BookDetail = () => {
  const route = useRoute();
  const { _id } = route.params;
  const { data: trip } = useQuery({
    queryKey: ["getTripbyID", _id],
    queryFn: () => getTripByID(_id),
  });

  console.log(trip);
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image
        style={{
          width: "90%",
          height: 500,
          borderRadius: 20,
          objectFit: "cover",
          margin: 10,
        }}
        source={{ uri: `${BASEURL}/${trip?.image}` }}
      />

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{trip?.title}</Text>
        <Text style={{ fontSize: 20 }}>{trip?.description}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetail;
