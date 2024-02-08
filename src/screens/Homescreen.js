import { StyleSheet, Text, View } from "react-native";
import React from "react";

const styleSheet = StyleSheet.create({
  boldText: { fontWeight: "bold", fontSize: 20, textAlign: "center" },
  normalText: { fontSize: 16 },
  statsDiv: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  lineDiv: {
    marginTop: 20,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  subText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: "gray",
  },
  mainText: {
    fontSize: 30,
    textAlign: "center",
  },
});
const Homescreen = () => {
  return (
    <View style={{ flex: 3 }}>
      <View style={{ flex: 3, backgroundColor: "lightblue" }}></View>
      <View
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        <Text style={styleSheet.mainText}>
          Rita Correia
          <Text style={styleSheet.subText}>32</Text>
        </Text>
        <Text style={styleSheet.subText}>London</Text>
        <View style={styleSheet.lineDiv} />
      </View>
      <View style={styleSheet.statsDiv}>
        <View>
          <Text style={styleSheet.boldText}>80K</Text>
          <Text style={styleSheet.normalText}>Followers</Text>
        </View>
        <View>
          <Text style={styleSheet.boldText}>803K</Text>
          <Text style={styleSheet.normalText}>Likes</Text>
        </View>
        <View>
          <Text style={styleSheet.boldText}>1.4K</Text>
          <Text style={styleSheet.normalText}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default Homescreen;
