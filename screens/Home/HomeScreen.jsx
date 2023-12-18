import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Vibration,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const cuemathImage = require("../../assets/images/cuemath.png");
const goImage = require("../../assets/images/Go!.png");

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState("Signup");

  const handleButtonPress = () => {
    Vibration.vibrate(100);
  };

  const handleLoginPress = () => {
    handleButtonPress();
    setSelectedButton("Login");
    navigation.navigate("Login");
  };

  const handleSignupPress = () => {
    handleButtonPress();
    setSelectedButton("Signup");
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.outercontainer}>
      <View style={styles.innerContainer}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={cuemathImage} style={styles.imageStyle1} />
          <View style={{ width: 10 }} />
          <Image source={goImage} style={styles.imageStyle2} />
        </View>

        {/* Space */}
        <View style={{ marginVertical: 40 }} />

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleSignupPress}
            style={[
              styles.signupButton,
              selectedButton === "Signup" && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Signup" && styles.selectedText,
              ]}
            >
              Signup
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLoginPress}
            style={[
              styles.loginButton,
              selectedButton === "Login" && styles.selectedButton,
            ]}
          >
            <Text
              style={[
                styles.buttonText,
                selectedButton === "Login" && styles.selectedText,
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outercontainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  innerContainer: {
    width: "80%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle1: {
    // borderWidth: 1,
    // borderColor: "pink",
    width: 190,
    height: 50,
    resizeMode: "contain",
  },

  imageStyle2: {
    // borderWidth: 1,
    // borderColor: "pink",
    width: 70,
    height: 30,
    resizeMode: "contain",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signupButton: {
    padding: 12,
    paddingLeft: 53,
    paddingRight: 53,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    marginRight: 7,
  },
  loginButton: {
    padding: 12,
    paddingLeft: 53,
    paddingRight: 53,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    marginLeft: 7,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedButton: {
    backgroundColor: "white",
    borderWidth: 1,
    // borderColor:"black"
  },
  selectedText: {
    color: "black",
  },
});

export default HomeScreen;
