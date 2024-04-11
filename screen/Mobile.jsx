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
        <Text style={styles.text}>Enter Your Mobile Number</Text>
        <Text style={styles.subtext}>
          We will send you the 4 digit verification code
        </Text>
        <Text></Text>

        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter your mobile number"
          keyboardType="numeric"
        />
      </SafeAreaView>
      <Text></Text>

      <Button
        title="send code"
        color="purple"
        onPress={() => navigation.navigate("otp")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    // opacity: 0.5,
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  area: {
    width: "80%",
  },
  subtext: {
    textAlign: "center",
    paddingTop: 10,
    color: "lightgrey",
  },
});
