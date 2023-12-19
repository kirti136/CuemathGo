import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import localStorage from "../../utils/localStorage";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await localStorage.removeUser();
    navigation.navigate("Home");
  };

  const user = localStorage.getUser();
  const userEmail = "user@example.com" || user.email;

  return (
    <View style={styles.container}>
      {/* Header Container */}
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


      {/* Lottie Carousel Container */}
      <View style={styles.carousel}>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderWidth:1,
    borderColor:"pink",
    width:"100%"
    // paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    borderWidth:1,
    borderColor:"pink",
    width:"90%",
    justifyContent:"space-between",
    marginTop:"0%"
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 30,
  },
  profileImage: {
    width: 30,
    height: 30,
    marginRight: 3,
    // Add additional styles for your profile image as needed
  },
  emailText: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 3,
    color:"white"
  },
  logoutButton: {
    justifyContent:"center"
  },
  logoutButtonText: {
    fontSize: 15,

    color: "gray",
    // fontWeight: "bold",
  },
  carousel:{
    borderWidth:1,
    borderColor:"pink",
    width:"90%",
    height:100
  }
});

export default DashboardScreen;
