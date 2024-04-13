import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";

export default function CakeModule(props) {
  return (
    <View style={styles.bakerContainer} >
      <Image
        style={{
          width: "100%",
          height: 100,
          zIndex: 998,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
        source={{
          uri: "https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headText}>Nik Baker's</Text>
        <Text>
          Connaught Place,
          {"\n"}
          New Delhi
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bakerContainer: {
    backgroundColor: "pink",
    elevation : 10 ,
    borderRadius: 10,
    zIndex: 999,
  },
  headText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom :5
  },
  textContainer: {
    padding: 10,
  },
});
