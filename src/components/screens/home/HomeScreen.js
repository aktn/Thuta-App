import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../../common/layouts/Header";
import Slide from "../../common/slider/Slider";
import CategoriesList from "../../common/categories/CategoriesList";
import ArticlesList from "../../common/articles/ArticlesList";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Slide />
        <CategoriesList />
        <ArticlesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe6"
  }
});
