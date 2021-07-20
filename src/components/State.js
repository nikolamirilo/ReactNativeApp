import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: 300,
    width: 400,
    marginTop: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 30,
    marginBottom: 20,
  },
});
const State = (props, { container, heading }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={style.container}>
      <Text style={style.heading}>You clicked {count} times</Text>
      <Button
        color="blue"
        onPress={() => setCount(count + 2)}
        title={props.button}
      />
    </View>
  );
};
export default State;
