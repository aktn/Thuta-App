import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

class SquareButton extends Component {
  render() {
    const { disabled, handleNextButton } = this.props;
    const opacityStyle = disabled ? 0.8 : 1;
    return (
      <View style={{ paddingTop: 25 }}>
        <TouchableHighlight
          style={{ opacity: opacityStyle }}
          onPress={handleNextButton}
          disabled={disabled}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 22,
    color: "#37966F",
    width: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: "#37966F",
    textAlign: "center"
  }
});

export default SquareButton;
