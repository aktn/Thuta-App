import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArticlesList from "./src/components/articles/ArticlesList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ArticlesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
