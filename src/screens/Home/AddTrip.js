import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "@tanstack/react-query";
import { createTrip } from "../../api/Trips/trips";

const AddTrip = () => {
  const [trip, setTrip] = useState({});
  const [imageTrip, setImageTrip] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImageTrip(result.assets[0].uri);
      setTrip({ ...trip, image: result.assets[0].uri });
    }
  };

  const { mutate } = useMutation({
    mutationFn: () => createTrip(trip),
    mutationKey: ["createTrip"],
    onSuccess: () => {
      alert("Trip added successfully");
    },
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Text>Add a Trip</Text>
      <TextInput
        style={{
          borderColor: "brown",
          borderWidth: 1,
          width: "100%",
          padding: 10,
          borderRadius: 10,
        }}
        placeholder="Title"
        onChangeText={(text) => {
          setTrip({ ...trip, title: text });
        }}
      />
      <TextInput
        style={{
          borderColor: "brown",
          borderWidth: 1,
          width: "100%",
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
        }}
        placeholder="Description"
        onChangeText={(text) => {
          setTrip({ ...trip, description: text });
        }}
      />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imageTrip && (
        <Image
          source={{ uri: imageTrip }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button
        onPress={() => {
          console.log(trip);
          mutate();
        }}
        title="Add trip"
      />
    </View>
  );
};

export default AddTrip;
