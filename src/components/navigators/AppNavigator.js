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
import { Animated, Easing, Platform } from "react-native";

// collapse and expand effects when being activated
let expandScreen = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{ scaleY }]
  };
};

// Default slider, sliding from right to left
let SlideRightToLeft = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  // animate the position according to width & index
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  });
  const slideFromRight = { transform: [{ translateX }] };
  return slideFromRight;
};

const TransitionConfig = () => {
  return {
    // Configuring animation styles & timing
    transitionSpec: {
      duration: 600,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    // sceneProps will be called in each screen & apply the transition based on its return value
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || "default";
      return {
        //if param has collapseExpand, this effect will take place
        collapseExpand: expandScreen(index, position),
        //otherwise apply the default one
        default: SlideRightToLeft(index, position, width)
      }[transition];
    }
  };
};

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
    transitionConfig: TransitionConfig,
    mode: Platform.OS === "ios" ? "modal" : "card",
    defaultNavigationOptions: {
      //header: null,
    }
  }
);

MainNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 1) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

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
