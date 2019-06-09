import React from "react";
import HomeScreen from "./src/components/screens/home/HomeScreen";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchBar from "./src/components/screens/search/SearchBar";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import ArticlesDetail from "./src/components/screens/articles/articlesDetail/ArticlesDetail";
import LogIn from "./src/components/screens/login/Login";
import BottomTabNavigator from "./src/components/navigators/AppNavigator";

const App = createAppContainer(BottomTabNavigator);

export default App;
