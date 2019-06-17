import { createStackNavigator } from "react-navigation";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";

export const FavoritesNavigator = createStackNavigator(
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
