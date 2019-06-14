import React from "react";
import { createStackNavigator } from "react-navigation";
import SearchBar from "../screens/search/SearchBar";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import ArticlesSummary from "../screens/articles/articlesSummary/ArticlesSummary";
import LogIn from "../screens/login/Login";
import HomeScreen from "../screens/home/HomeScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";
import ArticleContents from "../screens/articles/articleContents/ArticleContents";
import ArticleDetails from "../screens/articles/articleDetails/ArticleDetails";

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        headerBackTitle: null
      }
    },
    Search: {
      screen: SearchBar,
      navigationOptions: {
        header: null
      }
    },
    Summary: {
      screen: ArticlesSummary,
      navigationOptions: {
        title: "",
        headerBackTitle: null,
        headerTintColor: "#37966F",
        headerStyle: {
          backgroundColor: "#fffbe6",
          borderBottomWidth: 0,
          marginLeft: 10
        }
      }
    },
    Contents: {
      screen: ArticleContents,
      navigationOptions: {
        title: "",
        headerBackTitle: null,
        headerTintColor: "#37966F",
        headerStyle: {
          backgroundColor: "#fffbe6",
          borderBottomWidth: 0,
          marginLeft: 10
        }
      }
    },
    Details: {
      screen: ArticleDetails,
      navigationOptions: {
        header: null,
        tabBarVisible: false
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      //header: null,
    }
  }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Favorites"
  }
);

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LogIn,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

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
        tabBarIcon: CustomTabBarIcon("globe", 22)
      }
    },
    Library: {
      screen: FavoritesNavigator,
      navigationOptions: {
        tabBarLabel: "Library",
        tabBarIcon: CustomTabBarIcon("book", 22)
      }
    },
    Account: {
      screen: AuthNavigator,
      navigationOptions: {
        tabBarLabel: "Account",
        tabBarIcon: CustomTabBarIcon("user", 22)
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
