import React from "React";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import backgroundImage from "../images/back.png";

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: 35,
    marginBottom: 40,
    marginTop: 240,
    color: "white",
    fontWeight: 700,
  },
  image: {
    height: "91.5vh",
  },
});
const Home = ({ navigation }) => (
  <ImageBackground source={backgroundImage} style={style.image}>
    <View style={style.container}>
      <Text style={style.heading}>Home Screen</Text>
      <Button
        color="blue"
        title="Learn More"
        onPress={() => navigation.navigate("About")}
      />
      <Text>{"                 "}</Text>
      <Button
        title="Go to Item 14"
        onPress={() => {
          navigation.navigate("Items", {
            itemId: 14,
          });
        }}
      />
      <Text>{"                 "}</Text>
      <Button
        color="red"
        title="Go to Post Page"
        onPress={() => navigation.navigate("Post")}
      />
    </View>
  </ImageBackground>
);
export default Home;
