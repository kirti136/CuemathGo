import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import localStorage from "../../utils/localStorage";
import CarouselLottie from "./CarouselLottie";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);

  // Get User Email ID
  useEffect(() => {
    const getEmail = async () => {
      try {
        const user = await localStorage.getUser();
        setUserEmail(user ? user.email : "user@example.com");
        setFirstName(user ? user.firstName : "User");
        setAge(user ? user.age : 0);
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    getEmail();
  }, []);

  // Handle Logout
  const handleLogout = async () => {
    await localStorage.removeUser();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Header Container (profile,email,logout button) */}
      <View style={styles.header}>
        {/* Email Profile */}
        <View style={styles.userInfo}>
          <Image
            source={require("../../assets/images/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.emailText}>{userEmail}</Text>
        </View>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>logout</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel Animation */}
      <CarouselLottie userData={{ firstName, age }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    // borderWidth: 1,
    // borderColor: "pink",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  emailText: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 5,
    color: "white",
  },
  logoutButton: {
    justifyContent: "center",
  },
  logoutButtonText: {
    fontSize: 17,
    color: "gray",
  },
});

export default DashboardScreen;
