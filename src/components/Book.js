import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { BASEURL } from "../api";
import { AspectRatio, Box, Center, HStack, Heading, Stack } from "native-base";

const Trip = ({ image, title, description, user, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={{ marginTop: 10 }}>
      <Box alignItems="center">
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: `${BASEURL}/${image}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Center>
                <Heading size="md" ml="-1">
                  {title}
                </Heading>
              </Center>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default Trip;
