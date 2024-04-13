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
        <Text style={styles.headText}>Pre Order From</Text>
        <Text style={styles.subText}>Connaught Place</Text>
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
  headText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#636363",
  },
  subText: {
    fontSize: 22,
    fontWeight: "700",
  },
});

export default Cakes;
