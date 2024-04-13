import { Image, StyleSheet, Text, Dimensions, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const SingleCake = (props) => {
  const { imgUrl } = props;

  const { width } = Dimensions.get("window");
  const VW_HEIGHT = 0.4 * width; // 10% of the viewport width
  return (
    <View style={[styles.container, { height: VW_HEIGHT }]}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.resImg}
          resizeMode="cover"
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.headText}>Lazy Bear</Text>
        <Text style={styles.descText}>
          Cakes,Pastries , Pasta {"\n"}Connaught Place , New Delhi
        </Text>
        <Text style={styles.offer}>4 offers trending</Text>
        <View style={styles.ratingSeparator}>
          <View>
            <Text>
              <Ionicons name="star" size={20} color="orange" /> 4.5
            </Text>
            <Text style={styles.descText}>Popularity</Text>
          </View>
          <View>
            <Text>₹ 200</Text>
            <Text style={styles.descText}>Cost for two</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleCake;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    overflow: "visible",
  },
  offer: {
    marginTop: 3,
    marginBottom: 3,
  },
  resImg: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imgContainer: {
    width: "40%",
  },
  descContainer: {
    width: "60%",
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 6,
  },
  headText: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 2,
  },
  descText: {
    color: "darkgrey",
  },
  ratingSeparator: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
