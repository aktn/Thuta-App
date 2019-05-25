import React, { Component } from "react";
import { ScrollView, StyleSheet, FlatList, Image } from "react-native";

const books = [
  {
    key: 1,
    title: "Suits",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg"
  },
  {
    key: 2,
    title: "Modern Family",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg"
  },
  {
    key: 3,
    title: "The Flash",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
  },
  {
    key: 4,
    title: "Supergirl",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg"
  },
  {
    key: 5,
    title: "Designated Survivor",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg"
  },
  {
    key: 6,
    title: "24: Legacy",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
  }
];

class ArticlesList extends Component {
  _renderBooks(book) {
    return <Image style={styles.horizontal} source={{ uri: book.image }} />;
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          horizontal
          style={{ marginHorizontal: 5 }}
          data={books}
          renderItem={({ item }) => this._renderBooks(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  horizontal: {
    width: 120,
    height: 180,
    margin: 5
  }
});
export default ArticlesList;
