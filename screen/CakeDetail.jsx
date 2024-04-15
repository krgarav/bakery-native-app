import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import ImageUrl from "../Resource/restaurantImg";
// import Carousel from "react-native-reanimated-carousel";
// import Carousel from 'react-native-reanimated-carousel';
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import MyCarousel from "../component/Carousel";
const CakeDetail = ({ route }) => {
  // const { imgUrl } = route.params;
  // console.log(imgUrl);

  const resImg = ImageUrl.map((item, index) => {
   
    return <Image key={index} source={{ uri: item }} style={styles.img} />;
  });
  return (
    <View style={styles.container}>
      {/* <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={img}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
          </View>
        )}
      /> */}
      {/* <MyCarousel /> */}
      <ScrollView
        horizontal={true}
        // contentContainerStyle={styles.bakerContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.resImg}
      >
        {resImg}
      </ScrollView>
      {/* <Image source={{ uri: imgUrl }} style={styles.img} /> */}
      <View style={styles.descContainer}>
        <View>
          <View>
            <Text>Lazy Bear</Text>
            <Text>Connaught Place. New Delhi</Text>
          </View>
          <View>
            <Text>4.5</Text>
          </View>
        </View>

        <Text>4 Offers Trending</Text>
        <Text>
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </Text>
      </View>
    </View>
  );
};

export default CakeDetail;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
  },
  img: {
    width: "100%",
    height: 500,
    zIndex: 998,
  },
  descContainer: {
    // borderTopRadius: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 999,
    position: "absolute",
    backgroundColor: "white",
    padding: 25,
    width: "100%",
    height: 300,
    bottom: 0,
  },
  resImg: {
    width:"100%",
    height : 500
  },
});
