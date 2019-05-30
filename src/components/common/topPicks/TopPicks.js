import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class TopPicks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Top Picks For.</Text>
        <View style={styles.topPicks}>
          <Text style={styles.tag}>#Students</Text>
          <Text style={styles.tag}>#Professionals</Text>
          <Text style={styles.tag}>#Parents</Text>
          <Text style={styles.tag}>#Athletes</Text>
          <Text style={styles.tag}>#Seniors</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  heading: {
    color: "#FD5523",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  topPicks: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  tag: {
    fontSize: 20,
    color: "#356859",
    fontWeight: "600",
    paddingLeft: 10,
    paddingRight: 15,
    paddingVertical: 10,
    borderWidth: 0.5,
    borderColor: "#356859",
    borderRadius: 25,
    marginBottom: 15,
    marginHorizontal: 10
  }
});

export default TopPicks;
