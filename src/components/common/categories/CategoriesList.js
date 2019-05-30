import React, { Component } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const categories = [
  {
    name: "Psychology",
    color: "#edcdc5"
  },
  {
    name: "Psychology",
    color: "#eab3c6"
  },
  {
    name: "Psychology",
    color: "#bae6b3"
  },
  {
    name: "Psychology",
    color: "#eab3c6"
  },
  {
    name: "Psychology",
    color: "#bae6b3"
  }
];

class CategoriesList extends Component {
  constructor() {
    super();
  }

  _renderCategories(category) {
    return (
      <View style={[styles.horizontal, { backgroundColor: category.color }]}>
        <Icon name="globe" style={styles.icon} size={30} color="grey" />
        <Text style={styles.text}>{category.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.heading}>Categories.</Text>
        <FlatList
          horizontal
          style={{ marginHorizontal: 5 }}
          data={categories}
          renderItem={({ item }) => this._renderCategories(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontal: {
    width: 140,
    height: 140,
    margin: 5,
    display: "flex",
    alignItems: "center"
    // justifyContent: 'center',
  },
  heading: {
    color: "#FD5523",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 24,
    position: "absolute",
    bottom: -5,
    right: 1,
    fontWeight: "500"
  },
  icon: {
    //  textAlign:'center',
    position: "absolute",
    top: 40,
    backgroundColor: "transparent",
    zIndex: 1
  }
});

export default CategoriesList;
