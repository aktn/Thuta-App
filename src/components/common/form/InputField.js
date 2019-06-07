import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideInput: !(
        (props.inputType === "email") |
        (props.inputType === "text")
      ),
      inputValue: props.defaultValue
    };
  }

  showPassword = () => {
    this.setState({ hideInput: !this.state.hideInput });
  };

  onChangeText = value => {
    this.props.onChangeText(value);
    this.setState({ inputValue: value });
  };

  render() {
    const { inputType, placeholder, autoFocus, onChangeText } = this.props;
    const { hideInput, inputValue } = this.state;
    const keyboardType = inputType === "email" ? "email-address" : "default";

    return (
      <View style={styles.container}>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.showPassword}
          >
            <Text style={styles.showButtonText}>
              {hideInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}

        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          placeholderTextColor={"#a4a5a4"}
          value={inputValue}
          autoCorrect={false}
          autoFocus={autoFocus}
          autoComplete={false}
          keyboardType={keyboardType}
          secureTextEntry={hideInput}
          onChangeText={this.onChangeText}
          selectionColor={"#37966F"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  inputField: {
    marginBottom: 40,
    borderBottomColor: "#232323",
    borderBottomWidth: 1,
    paddingTop: 5,
    fontSize: 22,
    fontFamily: "Cochin"
  },
  showButton: {
    position: "absolute",
    right: 0,
    zIndex: 2
  },
  showhiddenText: {
    fontWeight: "700"
  }
});

export default InputField;
