import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Header = props => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigate("Search")}>
        <Icon name="search1" size={30} color="black" />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 20,
    marginBottom: 10,
    marginRight: 20,
    height: 60
  }
});

export default Header;
