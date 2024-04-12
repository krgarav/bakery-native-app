import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Eventblock = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <View style={styles.insideTextContainer}>
          <Text style={styles.headText}>Gaurav</Text>
          <Text style={styles.subText}>Let's explore this evening</Text>
        </View>
      </View>
      <View style={styles.imgcontainer}>
        <View style={styles.shadowContainer}>
          <Image style={styles.img} source={require("../assets/offer.png")} />
          <Text>Offers</Text>
        </View>
        <View style={styles.shadowContainer}>
          <Image style={styles.img} source={require("../assets/wallet.png")} />
          <Text>Wallet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  headText: {
    fontSize: 20,
    color: "#9897A9",
    fontWeight: "600",
  },
  subText: {
    fontSize: 15,
    fontWeight: "500",
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: "center",
   
  },
  imgcontainer: {
    flexDirection: "row",
    gap: 15,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  textcontainer: {
    width: "50%",
    padding: 20,
  },
  insideTextContainer: {
    elevation: 5,
    backgroundColor: "#ECECEC",
    padding: 20,
    borderRadius: 15,
  },
  shadowContainer:{
    elevation: 5,
    // borderColor : "black"
  }
});

export default Eventblock;
