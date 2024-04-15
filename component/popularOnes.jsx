import { Text, StyleSheet, View, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import SingleCake from "./singleCake";
import ImageUrl from "../Resource/restaurantImg";

export default function PopularOnes(props) {
  const [state, setState] = useState(false);
  const { navigation } = props;
  const pressHandler = (imgUrl) => {
    navigation.navigate("Cake_detail", { imgUrl: imgUrl });
  };
  const pressInHandler = () => {
    // console.log("Pressed");
  };

  const PressOutHandler = () => {
    // console.log("Press out");
  };

  const module = ImageUrl.map((item, index) => {
    return (
      <Pressable
        onPress={() => pressHandler(item)}
        onPressIn={pressInHandler}
        // onPressOut={PressOutHandler}
        key={index}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "lightgray" : "white",
          },
          styles.pressable,
        ]}
      >
        <SingleCake imgUrl={item} />
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
  pressable: {
    borderRadius: 10,
  },
});
