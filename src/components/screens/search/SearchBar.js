import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Network_Interface as url } from "../../../config/index";

const { width } = Dimensions.get("window");

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      items: "",
      loading: false
    };
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          items: response,
          loading: false
        });
      })
      .catch(error => console.log(error));
  }

  /**
   * Search data based on input of user from the search box
   * @param {string} input
   * @return {Filter items}
   */
  filter(input) {
    const data = this.state.items.filter(item => {
      const itemData = item.title.toUpperCase();
      const inputData = input.toUpperCase();
      return itemData.indexOf(inputData) > -1;
    });
    this.setState({
      textInput: input,
      items: data
    });
  }

  /**
   * Iterating objects from the items array
   * @param {string} item
   */
  _renderItem(item) {
    return (
      <View style={styles.searchList}>
        <View style={styles.searchImage}>
          <Image
            style={{ width: 120, height: 100 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.searchContent}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.description}>{item.title}</Text>
        </View>
      </View>
    );
  }

  /**
   * Clear the state of data when cross button has been activated
   * @param {string} item
   */
  deleteData() {
    this.setState({ textInput: "", items: "" });
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon
            size={18}
            name="search"
            color="grey"
            style={styles.searchIcon}
          />
          <TextInput
            value={this.state.text}
            placeholder="Search..."
            onChangeText={input => this.filter(input)}
            style={styles.input}
            autoFocus={true}
            placeholderTextColor="black"
          />
          {this.state.textInput ? (
            <TouchableWithoutFeedback onPress={() => this.deleteData()}>
              <Icon
                name="times-circle"
                color="grey"
                size={18}
                style={styles.iconInputClose}
              />
            </TouchableWithoutFeedback>
          ) : null}

          <TouchableWithoutFeedback
            style={styles.cancelBtn}
            onPress={() => goBack()}
          >
            <View style={styles.containerBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <ScrollView>
          <FlatList
            style={{ marginRight: 5 }}
            data={this.state.items}
            renderItem={({ item }) => this._renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbe6"
  },
  header: {
    backgroundColor: "#fffbe6",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    borderBottomWidth: 1,
    borderColor: "#37966F",
    paddingBottom: 20,
    position: "relative"
  },
  cancelBtnText: {
    color: "black",
    fontSize: 18
  },
  input: {
    fontSize: 15,
    height: 40,
    width: width - width / 4,
    backgroundColor: "#DCDCDC",
    marginHorizontal: 12,
    paddingLeft: 30,
    borderRadius: 3
  },
  searchIcon: {
    position: "absolute",
    top: 1,
    left: 20,
    zIndex: 1,
    backgroundColor: "transparent"
  },
  iconInputClose: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 1,
    top: 1,
    right: 100
  },
  searchList: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15
  },
  searchImage: {
    flex: 1
  },
  searchContent: {
    flex: 2,
    fontSize: 30
  },
  category: {
    paddingBottom: 18,
    fontSize: 15,
    fontWeight: "700"
  },
  description: {
    fontSize: 16
  }
});
