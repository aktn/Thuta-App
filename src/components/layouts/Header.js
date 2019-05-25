import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Header = props => (
  <View style={styles.container}>
    <Icon name="search1" size={30} color="black" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 20,
    height: 60
  }
});

export default Header;
