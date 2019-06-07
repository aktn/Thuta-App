import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../common/layouts/Header";
import Slide from "../../common/slider/Slider";
import CategoriesList from "../../common/categories/CategoriesList";
import ArticlesList from "../../common/articles/ArticlesList";
import TopPicks from "../../common/topPicks/TopPicks";
import InputField from "../../common/form/InputField";

export default class HomeScreen extends React.Component {
  render() {
    //const { navigation } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Slide />
        <InputField inputType="email" />
        <CategoriesList />
        <ArticlesList navigation={this.props.navigation} />
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
