import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import React, { useState, useRef } from "react";
// import { Button } from "react-native-paper";

const Otp = () => {
  const [otp, setOTP] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (index, value) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < otp.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  const handleSubmit = () => {
    alert(otp.join(""))
    console.log(otp.join(""));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.otp}>OTP verification</Text>
      <Text>
        Enter the verification code that we just sent on your Mobile Number.
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleChange(index, text)}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === "Backspace" && handleBackspace(index, value)
            }
          />
        ))}
      </View>
      <View>
        <Button title="Verify" onPress={handleSubmit} />
      </View>
      <View style={styles.resendcontainer}>
        <Text>Didnt recieved the code ? Resend</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "center",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  otp: {
    fontSize: 40,
    fontWeight: "900",
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    marginHorizontal: 5,
    borderColor: "transparent",
    backgroundColor: "lightgray",
    fontSize: 25,
    fontWeight: "500",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
  },
  resendcontainer:{
    alignItems: "center",
    marginTop: 20,
  }
});

export default Otp;
