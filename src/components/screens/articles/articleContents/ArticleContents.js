import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Contents as url } from "../../../../config";

class ArticleContents extends Component {
  constructor(props) {
    super(props);

    // Static data for now
    this.state = {
      contents: []
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const articleID = navigation.getParam("articleID", "ArticleID");

    fetch(url + `?id=` + articleID)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          contents: response
        });
        console.log(this.state.contents);
      })
      .catch(error => console.log(error));
  }

  _renderContents(content, index) {
    return (
      <TouchableHighlight
        underlayColor="#ffffff00"
        onPress={() =>
          this.props.navigation.navigate("Details", {
            contents: this.state.contents,
            index: index
          })
        }
      >
        <View style={styles.contentList}>
          <Text style={styles.contentPart}>{content.part}.</Text>
          <Text style={styles.contentTitle}>{content.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.articleTitle}>How to Talk to Your Kids</Text>
        <FlatList
          data={this.state.contents}
          renderItem={({ item, index }) => this._renderContents(item, index)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fffbe6"
  },
  articleTitle: {
    fontSize: 40,
    color: "#FD5523",
    paddingLeft: 10,
    paddingVertical: 20
  },
  contentList: {
    paddingVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    borderBottomWidth: 0.5,
    borderColor: "#828282"
  },
  contentPart: {
    fontSize: 18,
    paddingRight: 10,
    lineHeight: 30
  },
  contentTitle: {
    fontSize: 18,
    letterSpacing: 1.5,
    paddingRight: 14,
    lineHeight: 30
  }
});

export default ArticleContents;
