import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../common/layouts/Header";
import Slide from "../../common/slider/Slider";
import CategoriesList from "../../common/categories/CategoriesList";
import ArticlesList from "../../common/articles/ArticlesList";
import TopPicks from "../../common/topPicks/TopPicks";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Slide />
        <CategoriesList />
        <ArticlesList />
        <TopPicks />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe6"
  }
});
