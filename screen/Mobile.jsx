import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.area}>
        <Text style={styles.text}>Enter Your Email Id</Text>
        <Text style={styles.subtext}>
          We will send you the 4 digit verification code
        </Text>
        <Text></Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email id"
          keyboardType="email-address"
        />
        <Text></Text>
        <Button
          title="send code"
          color="#FF6D6A"
          onPress={() => navigation.navigate("Otp")}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  input: {
    alignContent:"flex-start",
    height: 50,
    margin: 5,
    borderWidth: 2,
    padding: 10,
  },
  area: {
    width: "80%",
  },
  subtext: {
    textAlign: "center",
    paddingTop: 10,
    color: "#A9A9A9",
  },
});
