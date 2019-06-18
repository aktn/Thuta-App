import React, { Component, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  TouchableHighlight
} from "react-native";
import { Network_Interface as url } from "../../../config/index";
import axios from "axios";

const styles = StyleSheet.create({
  horizontal: {
    width: 160,
    height: 220,
    marginBottom: 5,
    marginRight: 10
  },
  heading: {
    color: "#FD5523",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  container: {
    margin: 5
  },
  articleTitle: {
    fontSize: 14,
    width: 160,
    fontWeight: "400"
  },
  viewMore: {
    position: "absolute",
    right: 1,
    top: 30,
    color: "#37966F"
  },
  categoryTxt: {
    position: "absolute",
    top: 2,
    right: 5,
    height: 25,
    padding: 4,
    backgroundColor: "#rgba(255, 255, 255, 0.5)"
  }
});

const _renderArticles = (article, props) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate("Summary", { article: article })
        }
      >
        <Image style={styles.horizontal} source={{ uri: article.image }} />
      </TouchableHighlight>
      <Text style={styles.categoryTxt}>{article.category}</Text>
      <Text numberOfLines={3} style={styles.articleTitle}>
        {article.title}
      </Text>
    </View>
  );
};

const fetchArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setArticles(result.data);
    };
    fetchData();
  }, [url]);

  return {
    articles
  };
};

export default (ArticlesList = props => {
  const { articles } = fetchArticles();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.heading}>New.</Text>
        <Text style={styles.viewMore}>More</Text>
      </View>
      <FlatList
        horizontal
        style={{ marginHorizontal: 5 }}
        data={articles}
        renderItem={({ item }) => _renderArticles(item, { ...props })}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
});
