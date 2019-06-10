import React, { Component } from "react";
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

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          articles: response,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  _renderArticles(article) {
    return (
      <View>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("Details", { article: article })
          }
        >
          <Image style={styles.horizontal} source={{ uri: article.image }} />
        </TouchableHighlight>
        <Text
          style={{
            position: "absolute",
            top: 2,
            right: 5,
            height: 25,
            padding: 4,
            backgroundColor: "#rgba(255, 255, 255, 0.5)"
          }}
        >
          {article.category}
        </Text>
        <Text numberOfLines={3} style={styles.articleTitle}>
          {article.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.heading}>New.</Text>
          <Text style={styles.viewMore}>More</Text>
        </View>
        <FlatList
          horizontal
          style={{ marginHorizontal: 5 }}
          data={this.state.articles}
          renderItem={({ item }) => this._renderArticles(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

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
  }
});
export default ArticlesList;
