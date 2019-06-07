import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import InputField from "../../common/form/InputField";
//import { PropTypes } from "prop-types";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      validEmail: false,
      validPassword: false,
      formIsValid: false,
      loading: false
    };
  }

  handleEmailChange(email) {}

  render() {
    const { formIsValid, loading, validEmail, validPassword } = this.state;
    const displayErrMessage = !formIsValid;

    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>LogIn.</Text>
            <InputField
              labelTextSize={14}
              inputType="email"
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              placeholder="Email Address"
              autoFocus
            />
            <InputField
              labelTextSize={14}
              inputType="password"
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
              placeholder="Password"
              autoFocus
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// Login.propTypes = {
//   logIn: PropTypes.func.isRequired
// };

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fffbe6"
  },
  scrollViewWrapper: {
    marginTop: 170,
    flex: 1,
    padding: 0,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 45,
    color: "#FD5523",
    fontWeight: "600",
    paddingBottom: 40
  }
});

export default LogIn;
