import React from "react";
import { View, TextInput, Button } from "react-native";

const CreatePost = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState("");

  return (
    <View style={{ backgroundColor: "black" }}>
      <TextInput
        multiline
        placeholder="What is on your mind"
        style={{
          height: 638,
          padding: 10,
          backgroundColor: "black",
          color: "white",
        }}
        value={postText}
        onChangeText={setPostText}
      />

      <Button
        title="Done"
        onPress={() => {
          navigation.navigate({
            name: "Post",
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </View>
  );
};
export default CreatePost;
