import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import CakeModule from "./CakeModule";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
const Bakeries = () => {
  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.headText}> Your Taste</Text>
        <View style={styles.seeAll}>
          <Text style={styles.headText1}>See All</Text>
          <View style={styles.icon}>
            <FontAwesome6 name="greater-than" size={12} color="black" />
          </View>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.bakerContainer}
        showsHorizontalScrollIndicator={false}
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
    gap: 20,
    paddingHorizontal: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  headText: {
    fontWeight: "800",
    fontSize: 22,
  },
  headText1: {
    fontWeight: "800",
    fontSize: 22,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor : "lightgrey",
    marginBottom : 5,
    padding :10,
    justifyContent : "center",
    borderRadius : 50
  },
  seeAll: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent : "center"
  },
});

export default Bakeries;
