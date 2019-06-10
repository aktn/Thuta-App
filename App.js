import React from "react";
import { createAppContainer } from "react-navigation";

import BottomTabNavigator from "./src/components/navigators/AppNavigator";

const App = createAppContainer(BottomTabNavigator);

export default App;
