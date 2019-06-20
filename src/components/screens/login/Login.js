import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet
} from "react-native";
import InputField from "../../common/form/InputField";
import SquareButton from "../../common/buttons/SquareButton";
import { PropTypes } from "prop-types";
import ErrorMessage from "../../common/messages/ErrorMessage";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
      validEmail: false,
      validPassword: false,
      formIsValid: true,
      loading: false
    };
  }

  handleEmailChange = emailAddress => {
    const validateEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validateEmailRegex.test(emailAddress)) {
      this.setState({ validEmail: true });
    } else if (!validateEmailRegex.test(emailAddress)) {
      this.setState({ validEmail: false });
    }

    this.setState({ emailAddress });
  };

  handlePasswordChange = password => {
    if (password.length > 4) {
      this.setState({ validPassword: true });
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
    this.setState({ password });
  };

  handleCloseMessage = () => {
    this.setState({ formIsValid: true });
  };

  handleSubmitButton = () => {
    //this.setState({ loading: true });

    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      //send request to backend here
      console.log("Yay");
      this.setState({ formIsValid: true, loading: false });
    } else {
      console.log("Boo");
      this.setState({ formIsValid: false, loading: false });
    }
    // setTimeout(() => {

    // }, 2000);
  };

  /*
   * Disable the button if the fields are invalid
   */
  toggleButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  };

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
              fieldIsValid={validEmail}
              autoFocus
            />
            <InputField
              labelTextSize={14}
              inputType="password"
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
              placeholder="Password"
              fieldIsValid={validPassword}
            />
            <SquareButton
              handleSubmitButton={this.handleSubmitButton}
              // disabled={this.toggleButtonState()}
            />
            <ErrorMessage
              type="error"
              message="Please check the fields above"
              displayMessage={displayErrMessage}
              closeNotification={this.handleCloseMessage}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

LogIn.propTypes = {};

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
