import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "userData";

const localStorage = {
  getUser: async () => {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("Error getting data:", error);
      return null;
    }
  },

  saveUser: async (user) => {
    try {
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
      console.log("Data stored in loacal storage:", user);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  },

  removeUser: async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
    } catch (error) {
      console.error("Error removing data:", error);
    }
  },
};

export default localStorage;
