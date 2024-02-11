import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Book from "../../components/Book";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../../api/Books/books";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation";

const Homescreen = () => {
  const { data } = useQuery({
    queryKey: ["allBooks"],
    queryFn: () => getAllBooks(),
  });
  const navigation = useNavigation();
  const BookCards = data?.map((book) => {
    return (
      <Book
        image={book.image}
        title={book.title}
        // key={book._id}
        onPress={() => {
          navigation.navigate(NAVIGATION.HOME_NAVIGATION.BOOK_DETAIL, {
            _id: book._id,
            // title: book.title,
            // price: book.price,
            // author: book.author,
            // image: book.image,
          });
        }}
      />
    );
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>{BookCards}</ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
