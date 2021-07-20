import React, { useState, useLayoutEffect } from "react";
import { createTabkNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TabBarIOS,
} from "react-native";
import backgroundImage from "../images/back.png";

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    marginBottom: 40,
    marginTop: 240,
    color: "white",
    fontWeight: 700,
  },
  image: {
    height: "91.5vh",
  },
});
const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 80,
  height: 80,
};

const About = ({ navigation }) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  });
  return (
    <ImageBackground source={backgroundImage} style={style.image}>
      <View style={style.container}>
        <Text style={style.heading}>About Screen Counting: {count}</Text>
        <Button
          color="blue"
          title="Go Back Home"
          onPress={() => navigation.goBack()}
        />
        <Text>{"                    "}</Text>
        <Button
          title="Go to Tab Navigation"
          color="red"
          onPress={() => navigation.navigate("TabNavigator")}
        />
      </View>
    </ImageBackground>
  );
};
export default About;
