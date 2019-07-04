import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const Slider = props => (
  <View style={styles.slider}>
    <View style={styles.container}>
      <Text style={styles.title}>{props.content}</Text>
    </View>
    <Image
      style={[styles.container, styles.image]}
      source={{ uri: props.uri }}
    />
  </View>
);

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    height: 240
  },
  slider: {
    // flex: 1,
    flexDirection: "row",
    width: "100%"
    // flexWrap: "wrap"
  },
  image: {
    backgroundColor: "#464646"
  },
  title: {
    fontSize: 30,
    paddingLeft: 10
  }
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [
        {
          title: "Some text in slider one",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/196/490638.jpg"
        },
        {
          title: "Some text in slider two",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/2/5109.jpg"
        },
        {
          title: "Some text in slider three",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper height={240} showsPagination={false} autoplay>
          {this.state.sliders.map((slider, i) => (
            <Slider uri={slider.image} content={slider.title} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}
