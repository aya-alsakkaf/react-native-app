import { Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../../api/Auth/Auth";
import { Box, Image } from "native-base";
import { BASEURL } from "../../api";
const Profile = () => {
  const { data } = useQuery({
    queryFn: me,
    queryKey: ["me"],
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
      {data && (
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 20,
          }}
          source={{ uri: `${BASEURL}/${data?.image}` }}
          alt="Profile Image"
        />
      )}

      <Text>Username: {data?.username}</Text>
      <Text>Bio: {data?.bio}</Text>
    </View>
  );
};

export default Profile;
