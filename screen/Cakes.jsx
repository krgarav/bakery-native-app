import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Eventblock from "../component/eventblock";
import Bakeries from "../component/Bakeries";

const Cakes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Pre Order From</Text>
        <Text>Connaught Place</Text>
      </View>

      <ScrollView>
        <Eventblock />
        <Bakeries />
      </ScrollView>
    </View>
  );
  //   <ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    // borderWidth: ,
    padding: 10,
    elevation: 10,
    backgroundColor: "#fff",
  },
});

export default Cakes;
