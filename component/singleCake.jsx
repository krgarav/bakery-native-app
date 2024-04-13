import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleCake = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/the-cheesecake-factory-cheesecakes.jpg?quality=82&strip=1",
          }}
          style={styles.resImg}
        />
      </View>
      <View>
        <Text>Lazy Bear</Text>
        <Text> Cakes,Pastries , Pasta {"\n"}Connaught Place , New Delhi</Text>
        <Text></Text>
        <Text></Text>
      </View>
    </View>
  );
};

export default SingleCake;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
  },

  resImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
