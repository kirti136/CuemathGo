import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home/HomeScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
// import DashboardScreen from "./screens/Dashboard/DashboardScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />

        {/* Signup Screen */}
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            title: "Signup",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        />

        {/* Dashboard Screen */}
        {/* <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
