import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";

class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      pages: ["2", "3", "4"],
      key: 1
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { navigation } = this.props;
    const article = navigation.getParam("articleID", "Article");

    // Dummy data request for now
    const response = await fetch("http://localhost:3001/contents");
    const products = await response.json();
    this.setState({ items: products });

    //Article ID to be used later when calling for an API
    //console.log(articleID);
  };

  // Return the item of array
  _renderItem(item, index) {
    const itemInt = parseInt(item);

    const style = itemInt % 2 == 0 ? styles.slide1 : styles.slide2;
    return (
      <View style={style} key={index}>
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  }

  // onPageChanged(index) {
  //   if (index == 2) {
  //     const newPages = this.state.pages.map(i => (parseInt(i) + 1).toString());
  //     this.setState({ pages: newPages, key: (this.state.key + 1) % 2 });
  //   } else if (index == 0) {
  //     const newPages = this.state.pages.map(i => (parseInt(i) - 1).toString());
  //     this.setState({ pages: newPages, key: (this.state.key + 1) % 2 });
  //   }
  // }

  render() {
    // const { navigation } = this.props;
    // const article = navigation.getParam("article", "Article");
    return (
      <Swiper
        index={0}
        style={styles.wrapper}
        loop={false}
        showsPagination={false}
        // onIndexChanged={index => this.onPageChanged(index)}
      >
        {this.state.items.map((item, index) => this._renderItem(item, index))}
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default ArticleDetails;
