import React from "react";
import { View,Text } from "react-native";
import SearchScreen from "./src/Screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/Navigation/AppNavigator";


const App = () =>{
return (
  <NavigationContainer>
  <AppNavigator/>
  </NavigationContainer>
)
}

export default App