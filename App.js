import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ArticlesList from "./src/components/articles/ArticlesList";
import Header from "./src/components/layouts/Header";
import Slide from "./src/components/UI/slider/Slider";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Slide />
        <ArticlesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
