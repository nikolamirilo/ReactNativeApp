import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const style = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "91.5vh",
    backgroundColor: "wheat",
  },
  text: {
    fontSize: 26,
  },
});
const Items = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={style.container}>
      <Text style={style.text}>Items on this website</Text>
      <Text style={style.text}>ItemId: {JSON.stringify(itemId)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Items", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go back"
        color="red"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
export default Items;
