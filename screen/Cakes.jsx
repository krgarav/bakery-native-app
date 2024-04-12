import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Eventblock from "../component/eventblock";

const Cakes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Pre Order From</Text>
        <Text>Connaught Place</Text>
      </View>

      <ScrollView>
        <Eventblock />
      </ScrollView>
    </View>
  );
  //   <ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // flexDirection: "row"
  },
  header: {
    // borderWidth: ,
    padding: 10,
    elevation: 1,
    backgroundColor: "#fff",
  },
});

export default Cakes;
