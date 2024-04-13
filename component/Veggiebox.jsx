import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { Button as Btn } from "react-native-paper";
const Veggiebox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.backgroundImg}
          source={require("../assets/wood.jpg")}
        >
          <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.veggieText}>
                VEGGIE FRIENDLY{"\n"}EATERIES
              </Text>
              <Btn mode="contained" style={styles.btnContainer}>Try Now</Btn>
            </View>
            <View style={styles.imgContainer}>
              <Image
                style={styles.cakeImg}
                source={require("../assets/veggie.png")}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Veggiebox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  backgroundContainer: {
    borderRadius: 10, // Adjust as needed
    overflow: "hidden",
  },
  backgroundImg: {
    resizeMode: "cover",
    height: 120,
    borderRadius: 20,
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  veggieText: {
    color: "white",
    fontWeight: "800",
  },
  cakeImg: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  btnContainer:{
    borderRadius : 0,
    margin :10,
    height : 40,
    backgroundColor : "#028A0F"
  },
  textContainer: {
    width: "50%",
    justifyContent: "center",
    padding: 20,
  },
  imgContainer: {
    width: "50%",
    justifyContent: "center",
    alignContent: "center",
  },
});
