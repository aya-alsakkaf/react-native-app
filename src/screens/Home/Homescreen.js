import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Trip from "../../components/Book";
import { useQuery } from "@tanstack/react-query";
import { getAllTrips } from "../../api/Trips/trips";
import { useNavigation } from "@react-navigation/native";
import NAVIGATION from "../../navigation";

const Homescreen = () => {
  const { data } = useQuery({
    queryKey: ["allTrips"],
    queryFn: () => getAllTrips(),
    onSucess: (data) => {
      console.log(data);
    },
  });
  const navigation = useNavigation();
  const TripCards = data?.map((trip) => {
    return (
      <Trip
        key={trip._id}
        image={trip.image}
        title={trip.title}
        description={trip.description}
        user={trip.user}
        onPress={() => {
          navigation.navigate(NAVIGATION.HOME_NAVIGATION.BOOK_DETAIL, {
            _id: trip._id,
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
      <ScrollView>{TripCards}</ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
