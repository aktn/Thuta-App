import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from "react-native";
import { Network_Interface as url } from "../../../config/index";

const item_width = Dimensions.get("window").width;

class FavoritesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favArticles: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          favArticles: response,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  _renderFavArticles(article) {
    return (
      <View style={styles.favCard}>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("Details", { article: article })
          }
        >
          <Image style={styles.imageCover} source={{ uri: article.image }} />
        </TouchableHighlight>
        <Text style={styles.category}>{article.category}</Text>
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
          <Text style={styles.heading}>Favorites.</Text>
        </View>
        <FlatList
          data={this.state.favArticles}
          numColumns={2}
          renderItem={({ item }) => this._renderFavArticles(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingLeft: 5,
    backgroundColor: "#fffbe6"
  },
  imageCover: {
    width: (item_width - 20) / 2,
    height: 220,
    marginBottom: 5,
    flexGrow: 1
  },
  heading: {
    color: "#FD5523",
    fontSize: 45,
    fontWeight: "600",
    paddingVertical: 20
  },
  articleTitle: {
    fontSize: 14,
    width: 160,
    fontWeight: "400"
  },
  category: {
    position: "absolute",
    top: 2,
    right: 5,
    height: 25,
    padding: 4,
    backgroundColor: "#rgba(255, 255, 255, 0.5)"
  },
  favCard: {
    paddingBottom: 35,
    flex: 1
  }
});

export default FavoritesScreen;
