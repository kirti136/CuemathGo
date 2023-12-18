import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import storage from "../../utils/storage";
import { useNavigation } from "@react-navigation/native";

const cuemathImage = require("../../assets/images/cuemath.png");
const goImage = require("../../assets/images/Go!.png");

const SignupScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !firstName || !age) {
      setErrorMessage("All fields are required");
      setShowErrorMessage(true);

      setTimeout(() => {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 5000);
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setErrorMessage("Email should end with @gmail.com");
      setShowErrorMessage(true);

      setTimeout(() => {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 5000);
      return;
    }

    if (isNaN(age) || age === "") {
      setErrorMessage("Age should be a number");
      setShowErrorMessage(true);

      setTimeout(() => {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 5000);
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password should be at least 8 characters long");
      setShowErrorMessage(true);

      setTimeout(() => {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 5000);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password don't match");
      setShowErrorMessage(true);

      setTimeout(() => {
        setErrorMessage("");
        setShowErrorMessage(false);
      }, 5000);
      return;
    }

    const user = {
      email,
      password,
      firstName,
      age,
    };

    await storage.saveUser(user);
    console.log("User registered successfully:", user);

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setAge("");
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={cuemathImage} style={styles.imageStyle1} />
          <View style={{ width: 10 }} />
          <Image source={goImage} style={styles.imageStyle2} />
        </View>

        {/* Input Form Container*/}
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="gray"
            onChangeText={(text) => setFirstName(text)}
            value={firstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            placeholderTextColor="gray"
            onChangeText={(text) => setAge(text)}
            value={age}
            keyboardType="numeric"
          />

          {/* Error Message */}
          {showErrorMessage && errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Create Account</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30,
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
    width: "75%",
    marginTop: 20,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
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
  signupButton: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 120,
    marginBottom: 50,
    width: "75%",
  },
  signupButtonText: {
    fontWeight: "bold",
  },
});

export default SignupScreen;
