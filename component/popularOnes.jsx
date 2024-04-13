import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import SingleCake from "./singleCake";
import Image from "../Resource/restaurantImg";

export default function PopularOnes() {
  const [state, setState] = useState(false);

  const pressHandler = (imgUrl) => {
    console.log(imgUrl);
  };
  const pressInHandler = () => {
    console.log("Pressed");
  };

  const PressOutHandler = () => {
    console.log("Press out");
  };

  const module = Image.map((item, index) => {
    return (
      <Pressable
        onPress={() => pressHandler(item)}
        onPressIn={pressInHandler}
        // onPressOut={PressOutHandler}
    
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgray" : "white",
          },
          styles.pressable,
        ]}
      >
        <SingleCake key={index} imgUrl={item} />
      </Pressable>
    );
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Popular Ones</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {module}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  scrollContainer: {
    gap: 20,
  },
  container: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  pressable:{
    borderRadius : 10
  }
});
