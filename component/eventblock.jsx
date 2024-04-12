import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Eventblock = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Gaurav</Text>
        <Text>Let's explore this evening</Text>
      </View>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={require("../assets/offer.png")} />
        <Image style={styles.img} source={require("../assets/wallet.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex :1
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
  },
  imgcontainer: {
    flexDirection: "row",
    gap:15
  },
});

export default Eventblock;
