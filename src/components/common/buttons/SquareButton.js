import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, Text, View } from "react-native";

class SquareButton extends Component {
  render() {
    const { disabled, handleSubmitButton } = this.props;
    //const opacityStyle = disabled ? 0.8 : 1;
    return (
      <View style={{ paddingTop: 25 }}>
        <TouchableHighlight
          //style={{ opacity: opacityStyle }}
          onPress={handleSubmitButton}
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
    color: "#232323",
    width: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: "#232323",
    textAlign: "center"
  }
});

export default SquareButton;
