import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const style = StyleSheet.create({
  container: {
    height: 400,
    width: 420,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    fontSize: 30,
  },
});

const Header = (props, { container, heading, button }) => {
  return (
    <View style={style.container}>
      <Text style={style.heading}>{props.title}</Text>
      <Text style={style.heading}>{props.subtitle}</Text>
      <Button
        color="blue"
        style={style.button}
        title={props.button}
        onPress={() => Alert.alert("You just clicked buton")}
      />
    </View>
  );
};
export default Header;
