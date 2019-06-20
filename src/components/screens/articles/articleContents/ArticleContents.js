import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight
} from "react-native";

class ArticleContents extends Component {
  constructor(props) {
    super(props);

    // Static data for now
    this.state = {
      contents: [
        {
          part: "1",
          title:
            "What might happen to our communities if driverless cars become a reality",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history. Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        },
        {
          part: "2",
          title: "How did Artificial Intelligence started",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        },
        {
          part: "3",
          title:
            "How university campuses have become breeding grounds for intolerance",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        },
        {
          part: "4",
          title: "Another Fake content goes here for now.",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        },
        {
          part: "5",
          title: "Bolin",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        },
        {
          part: "6",
          title: "Jinora",
          section:
            "Aang was always able to excel at any new bending moves he learned; at the age of six, he was a better airbender than children twice his age, and by the age of ten, Aang had proven himself to be better than his own teachers. He earned airbending tattoos and the status of an airbending master by the age of twelve for exhibiting prodigious talent with his native element and with his invention of the air scooter, making him the youngest airbending master in Air Nomad history."
        }
      ]
    };
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
