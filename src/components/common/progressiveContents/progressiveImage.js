import React, { Component } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f6ef",
    marginRight: 10
  },
  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

class ProgressiveImage extends Component {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
  };

  render() {
    const { thumbnailSource, source, style, ...props } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          blurRadius={2}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;
