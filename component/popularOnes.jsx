import { Text, StyleSheet, View } from "react-native";
import React from "react";
import SingleCake from "./singleCake";

export default function PopularOnes() {
  return (
    <View>
      <Text style={styles.text}>Popular Ones</Text>
      <SingleCake/>
    </View>
  );
}

const styles = StyleSheet.create({
    text : {
        fontWeight : "900",
        
    }
});
