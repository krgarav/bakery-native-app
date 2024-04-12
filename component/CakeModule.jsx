import { Text, StyleSheet, View, Image } from "react-native";
import React from "react";

export default function CakeModule(props) {
  return (
    <View style={styles.bakerContainer}>
      <Image
        style={{ width: 100, height: 120 }}
        source={{
          uri: "https://st4.depositphotos.com/10614052/25239/i/450/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
        }}
      />
      <Text>Nik Baker's</Text>
      <Text>
        Connaught Place,
        {"\n"}
        New Delhi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bakerContainer: {
    backgroundColor: "pink",
  },
});
