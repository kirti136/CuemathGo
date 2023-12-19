import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import localStorage from "../../utils/localStorage";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await localStorage.removeUser();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Dashboard!</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DashboardScreen;
