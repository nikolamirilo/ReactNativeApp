import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

function Post({ navigation, route }) {
  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Button
        title="Create post"
        onPress={() => navigation.navigate("CreatePost")}
      />
      <Text style={{ margin: 10, fontSize: 28, color: "white" }}>
        Post: {route.params?.post}
      </Text>
      <Text style={{ margin: 10 }}>{""}</Text>

      <Button
        title="Go back home"
        color="red"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
export default Post;
