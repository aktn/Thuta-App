import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Animated } from "react-native";
import Swiper from "react-native-swiper";
import Headroom from "react-native-headroom";
import EvilIcon from "react-native-vector-icons/EvilIcons";

class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(this.props.headerHeight),
      visible: true
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

  _setAnimation(enable) {
    Animated.timing(this.height, {
      duration: 400,
      toValue: enable ? 100 : 0
    }).start();
  }

  render() {
    const { navigation } = this.props;
    const index = navigation.getParam("index", "0");
    const contents = navigation.getParam("contents", [
      "Oops.. something went wrong :("
    ]);

    const header = (
      <View style={[styles.container, styles.header]}>
        <EvilIcon
          name={"close"}
          size={35}
          color={"#37966F"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );

    return (
      <View style={[styles.container]}>
        <Headroom
          style={[styles.container]}
          headerComponent={header}
          ScrollableComponent={ScrollView}
          headerHeight={100}
          scrollEventThrottle={100}
        >
          <View style={styles.container}>
            <Swiper
              index={index}
              style={styles.wrapper}
              loop={false}
              showsPagination={false}
            >
              {contents.map((item, index) => this._renderItem(item, index))}
            </Swiper>
          </View>
        </Headroom>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: "#fffbe6",
    paddingHorizontal: 20,
    paddingVertical: 30
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
  },
  container: {
    flex: 1,
    backgroundColor: "#fffbe6"
  },
  header: {
    paddingTop: 45,
    paddingHorizontal: 20,
    backgroundColor: "#fffbe6",
    borderBottomWidth: 1,
    borderBottomColor: "#37966F"
  }
});

export default ArticleDetails;
