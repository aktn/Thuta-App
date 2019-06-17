import LogIn from "../screens/login/Login";
import { createStackNavigator } from "react-navigation";

export const AuthNavigator = createStackNavigator(
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
