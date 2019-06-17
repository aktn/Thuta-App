import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthNavigator } from "./AuthNavigator";
import { MainNavigator } from "./MainNavigator";
import { FavoritesNavigator } from "./FavoritesNavigator";

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon name={name} size={size} color={tintColor} />
  );
  return icon;
};

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainNavigator,
      navigationOptions: {
        tabBarLabel: "Discover",
        tabBarIcon: CustomTabBarIcon("globe", 20)
      }
    },
    Library: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: CustomTabBarIcon("heart-o", 20)
      }
    },
    Account: {
      screen: AuthNavigator,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: CustomTabBarIcon("user-o", 20)
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#fffbe6"
      },
      activeTintColor: "#FF6F00",
      inactiveTintColor: "#263238"
    }
  }
);

export default BottomTabNavigator;
