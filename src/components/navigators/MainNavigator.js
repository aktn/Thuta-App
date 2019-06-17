import ArticlesSummary from "../screens/articles/articlesSummary/ArticlesSummary";
import HomeScreen from "../screens/home/HomeScreen";
import SearchBar from "../screens/search/SearchBar";
import ArticleContents from "../screens/articles/articleContents/ArticleContents";
import ArticleDetails from "../screens/articles/articleDetails/ArticleDetails";
import { Animated, Easing, Platform } from "react-native";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import { createStackNavigator } from "react-navigation";

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

export const MainNavigator = createStackNavigator(
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
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (
          <EvilIcon
            name={"close"}
            size={35}
            color={"#37966F"}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
        title: "",
        headerBackTitle: null,
        headerTintColor: "#37966F",
        headerStyle: {
          backgroundColor: "#fffbe6",
          borderBottomWidth: 0,
          marginLeft: 10
        }
      })
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
