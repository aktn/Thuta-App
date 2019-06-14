import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";

class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPart: 0
    };
  }

  // Return the item of array for sliding
  _renderItem(item, index) {
    return (
      <View style={styles.slide} key={index}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.section}>{item.section}</Text>
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const index = navigation.getParam("index", "0");
    const contents = navigation.getParam("contents", [
      "Oops.. something went wrong :("
    ]);

    return (
      <Swiper
        index={index}
        style={styles.wrapper}
        loop={false}
        showsPagination={false}
      >
        {contents.map((item, index) => this._renderItem(item, index))}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "#fffbe6",
    paddingHorizontal: 20,
    paddingVertical: 60
  },
  title: {
    color: "#FD5523",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 45,
    paddingBottom: 30
  },
  section: {
    fontSize: 20,
    lineHeight: 35
  }
});

export default ArticleDetails;
