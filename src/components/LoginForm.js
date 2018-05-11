import React, { Component } from "react";
import { TextInput } from "react-native";
import { Button, Card, CardSection } from "./common";

class LoginForm extends React.Component {
  render() {
    return (
      <Card>
        <CardSection>
          <TextInput />
        </CardSection>
        <CardSection />
        <CardSection>
          <Button>Log In</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
