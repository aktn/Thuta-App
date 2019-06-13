import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";

const data = [
  {
    part: "1",
    name:
      "What might happen to our communities if driverless cars become a reality"
  },
  { part: "2", name: "How did Artificial Intelligence started" },
  {
    part: "3",
    name: "How university campuses have become breeding grounds for intolerance"
  },
  { part: "4", name: "Another Fake content goes here for now." },
  { part: "5", name: "Bolin" },
  { part: "6", name: "Jinora" }
];

class ArticleContents extends Component {
  _renderContent(content, index) {
    return (
      <TouchableHighlight
        underlayColor="#ffffff00"
        onPress={() =>
          this.props.navigation.navigate("Details", { content: content })
        }
      >
        <View style={styles.contentList}>
          <Text style={styles.contentPart}>{content.part}.</Text>
          <Text style={styles.contentName}>{content.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentTxt}>How to Talk to Your Kids</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => this._renderContent(item)}
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
  contentTxt: {
    fontSize: 40,
    color: "#FD5523",
    paddingLeft: 10,
    paddingVertical: 20
  },
  contentList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  contentPart: {
    fontSize: 18,
    paddingRight: 10
  },
  contentName: {
    fontSize: 18
  }
});

export default ArticleContents;
