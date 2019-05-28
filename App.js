import React from "react";
import HomeScreen from "./src/components/home/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchBar from "./src/components/UI/search/SearchBar";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchBar }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
