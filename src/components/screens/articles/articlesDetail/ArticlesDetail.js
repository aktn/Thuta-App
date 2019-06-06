import React, { Component } from "react";
//import Orientation from "react-native-orientation";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

class ArticlesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // Orientation.lockToPortrait();
  }

  renderThumbnail() {
    // const imagePath = require("../../../images/");
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam("article", "Article");

    return (
      <View style={{ flex: 1 }}>
        <Image style={styles.thumbnail} source={{ uri: article.image }} />
        <View>
          <Text style={styles.articleTitle}>
            {JSON.stringify(article.title)}
          </Text>
          <Text style={styles.articleDescription}>{article.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    width: width,
    height: 300
  },
  articleTitle: {
    fontSize: 50,
    color: "#FD5523",
    paddingLeft: 10,
    paddingVertical: 20
  },
  articleDescription: {
    fontSize: 18,
    paddingLeft: 10,
    letterSpacing: 3
  }
});

export default ArticlesDetail;
