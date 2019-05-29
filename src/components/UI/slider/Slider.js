import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const Slider = props => (
  <View style={styles.slider}>
    <View style={styles.container}>
      <Text style={styles.title}>Some Text in Column One</Text>
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
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
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
          title: "Hello 1",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg"
        },
        {
          title: "Hello 2",
          image:
            "https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
        },
        {
          title: "Hello 3",
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
            <Slider uri={slider.image} key={i} />
          ))}
        </Swiper>
      </View>
    );
  }
}
