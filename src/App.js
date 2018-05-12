import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/LoginForm";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDC4EUVqXSuANApGcAPCWRXisPBeHZ03bE",
      authDomain: "authentication-21269.firebaseapp.com",
      databaseURL: "https://authentication-21269.firebaseio.com",
      projectId: "authentication-21269",
      storageBucket: "authentication-21269.appspot.com",
      messagingSenderId: "822435203893"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection style={{ flexDirection: "row" }}>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}
