import * as React from "react";
import { Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Items from "./src/screens/Items";
import Post from "./src/screens/Post";
import CreatePost from "./src/screens/CreatePost";
import LogoTitle from "./src/components/LogoTitle";
import TabNavigator from "./src/screens/TabNavigator";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      //settings for navigation for all screens
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffd107",
          textAlign: "center",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontweight: "bold",
          fontSize: 28,
          fontFamily: "'Quicksand', sans-serif",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          //right nav button
          headerRight: () => (
            <Button
              onPress={() => alert("This is right button")}
              title="  Alert  "
              color="red"
            />
          ),
          //left nav button
          headerLeft: () => (
            <Button
              onPress={() => confirm("This is left button")}
              color="blue"
              title="Confirm"
            />
          ),
        }}
      />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation, route }) => ({
          headerTitle: (props) => <LogoTitle {...props} />,
        })}
      />
      <Stack.Screen
        name="Items"
        component={Items}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
