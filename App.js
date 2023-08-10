import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import { Provider } from "react-redux";
import Store from "./Contex/store";
import SplashScreen from "./Screens/SplashScreen";
import AddToChat from "./Screens/AddToChat";
import ChatScreen from "./Screens/ChatScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUpScreen" component={SignUp} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddToChat" component={AddToChat} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
