import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import { PropTypes } from "prop-types";
import { ScrollView } from "react-native-gesture-handler";

class Login extends Component {
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

  render() {
    const { formIsValid, loading, validEmail, validPassword } = this.state;
    const displayErrMessage = !formIsValid;

    return (
      <KeyboardAvoidingView>
        <View>
          <ScrollView>
            <Text>LogIn</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  errMessage: {
    background: "red"
  }
});

export default Login;
