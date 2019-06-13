import React, { Component } from "react";
//import Orientation from "react-native-orientation";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

class ArticlesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // Orientation.lockToPortrait();
  }

  render() {
    const { navigation } = this.props;
    const article = navigation.getParam("article", "Article");

    return (
      <View style={styles.container}>
        <Text style={styles.articleTitle}>{JSON.stringify(article.title)}</Text>
        <View style={styles.btnWrapper}>
          <View style={styles.btnIcon}>
            <Icon
              name="md-heart"
              style={styles.svgIcon}
              size={25}
              color="grey"
            />
            <Text style={styles.iconText}>Favorite</Text>
          </View>
          <TouchableHighlight
            underlayColor="#ffffff00"
            onPress={() => this.props.navigation.navigate("Contents")}
          >
            <View>
              <Icon
                name="ios-book"
                style={styles.svgIcon}
                size={25}
                color="grey"
              />
              <Text style={styles.iconText}>Read</Text>
            </View>
          </TouchableHighlight>
          <View style={styles.btnIcon}>
            <Icon
              name="md-share"
              style={styles.svgIcon}
              size={25}
              color="grey"
            />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
        <Text style={styles.articleDescription}>{article.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffbe6",
    display: "flex",
    flex: 1
  },
  thumbnail: {
    width: width,
    height: 300
  },
  articleTitle: {
    fontSize: 40,
    color: "#FD5523",
    paddingLeft: 10,
    paddingVertical: 20
  },
  articleDescription: {
    fontSize: 18,
    paddingLeft: 10,
    letterSpacing: 3
  },
  btnWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomColor: "#37966F",
    borderBottomWidth: 1,
    borderTopColor: "#37966F",
    borderTopWidth: 1,
    padding: 10,
    margin: 20,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  btnIcon: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10
  },
  svgIcon: {
    height: 30
  },
  iconText: {
    fontSize: 12
  }
});

export default ArticlesDetail;
