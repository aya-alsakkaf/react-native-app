import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getBookByID } from "../../api/books";
import { BASEURL } from "../../api";
import { ScrollView } from "react-native-gesture-handler";

const BookDetail = () => {
  const route = useRoute();
  const { _id } = route.params;

  const { data: book } = useQuery({
    queryKey: ["bookByID", _id],
    queryFn: () => getBookByID(_id),
  });

  console.log(book);
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
        source={{ uri: `${BASEURL}/${book?.image}` }}
      />

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{book?.title}</Text>
        <Text style={{ fontSize: 20 }}>{book?.author}</Text>
        <Text style={{ fontSize: 20 }}>Price: {book?.price}</Text>
      </View>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({});
