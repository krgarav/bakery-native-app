import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Eventblock from "../component/eventblock";
import Bakeries from "../component/Bakeries";
import Veggiebox from "../component/Veggiebox";
import PopularOnes from "../component/popularOnes";

const Cakes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Pre Order From</Text>
        <Text>Connaught Place</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Eventblock />
        <Bakeries />
        <Text></Text>
        <Veggiebox />
        <PopularOnes />
      </ScrollView>
    </View>
  );
  //   <ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    marginTop: "10%",
    backgroundColor: "#fff",
    // width: "90%",
  },
  header: {
    // borderWidth: ,
    padding: 10,
    elevation: 10,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    // width: "95%",
    // justifyContent : "center",
    // alignContent : "center"
  },
});

export default Cakes;
