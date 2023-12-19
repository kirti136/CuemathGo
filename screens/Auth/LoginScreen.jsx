import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import localStorage from "../../utils/localStorage";
import { useNavigation } from "@react-navigation/native";

// Images
const cuemathImage = require("../../assets/images/cuemath.png");
const goImage = require("../../assets/images/Go!.png");

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLogin = async () => {
    try {
      const storedUser = await localStorage.getUser();

      if (
        !storedUser ||
        storedUser.email !== email ||
        storedUser.password !== password
      ) {
        setErrorMessage("Invalid credentials");
        setShowErrorMessage(true);
        setTimeout(() => {
          setErrorMessage("");
          setShowErrorMessage(false);
        }, 5000);
        return;
      }

      setErrorMessage("");
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <Image source={cuemathImage} style={styles.imageStyle1} />
        <View style={{ width: 10 }} />
        <Image source={goImage} style={styles.imageStyle2} />
      </View>

      {/* Input Container */}
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email ID"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />

          {/* Error Message */}
          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    height: 550,
    backgroundColor: "black",
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  imageStyle1: {
    // borderWidth: 1,
    // borderColor: "pink",
    width: 120,
    height: 20,
    resizeMode: "contain",
  },

  imageStyle2: {
    // borderWidth: 1,
    // borderColor: "pink",
    width: 40,
    height: 20,
    resizeMode: "contain",
  },
  inputContainer: {
    // borderWidth: 1,
    // borderColor: "pink",
    width: "75%",
    // marginTop: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 11,
    paddingBottom: 11,
    color: "white",
    borderRadius: 8,
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 300,
    // marginBottom: 10,
    width: "75%",
  },
  loginButtonText: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
