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

const articles = [
  {
    key: 1,
    title: "Suits",
    image:
      "https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione architecto necessitatibus cum praesentium dolor totam voluptatibus recusandae? Illo quod nemo ratione itaque dolores laudantium error vero laborum blanditiis nostrum."
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
  constructor(props) {
    super(props);
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
          History
        </Text>
        <Text style={styles.title}>
          “Hedging Against The Apocalypse” by Jesse Barron.
        </Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>New.</Text>
        <FlatList
          horizontal
          style={{ marginHorizontal: 5 }}
          data={articles}
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
  title: {
    fontSize: 14,
    width: 160
  }
});
export default ArticlesList;
