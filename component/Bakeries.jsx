import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import CakeModule from "./CakeModule";
const Bakeries = () => {
  return (
    <View>
      <View>
        <Text> Your Taste</Text>
        <Text> See All</Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.bakerContainer}
      >
        <CakeModule />
        <CakeModule />
        <CakeModule />
        <CakeModule />
        <CakeModule />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  bakerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "scroll",
    alignItems: "center",
    // flexWrap : "wrap",
    gap: 20,
    paddingHorizontal: 10,
  },
});

export default Bakeries;
